import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';
import * as chokidar from 'chokidar';
import * as Color from 'color';
import template from './template';

const walCachePath = path.join(os.homedir(), '.cache', 'wal');
let walColorsJsonPath: string | null = null;
let autoUpdateWatcher: chokidar.FSWatcher | null = null;


export function activate(context: vscode.ExtensionContext) {
	// Fetch json file name from config and create it's path
	const colorsJsonFile = vscode.workspace.getConfiguration().get('walTheme.colorsJsonFile') as string;
	walColorsJsonPath = path.join(walCachePath, colorsJsonFile);

	// Register the update command
	let disposable = vscode.commands.registerCommand('walTheme.update', generateColorThemes);
	context.subscriptions.push(disposable);

	// Start the auto update if enabled
	if(vscode.workspace.getConfiguration().get('walTheme.autoUpdate')) {
		/*
		 * Update theme at startup
		 * Needed for when wal palette updates while vscode isn't running.
		 * The timeout is required to overcome a limitation of vscode which
		 * breaks the theme auto-update if updated too early at startup.
		 */
		setTimeout(generateColorThemes, 10000);

		autoUpdateWatcher = autoUpdate();
	}

	// Toggle the auto update in real time when changing the extension configuration
	vscode.workspace.onDidChangeConfiguration(event => {
		if(event.affectsConfiguration('walTheme.autoUpdate')) {
			if(vscode.workspace.getConfiguration().get('walTheme.autoUpdate')) {
				if(autoUpdateWatcher === null) {
					autoUpdateWatcher = autoUpdate();
				}
			}
			else if(autoUpdateWatcher !== null) {
				autoUpdateWatcher.close();
				autoUpdateWatcher = null;
			}
		}
	});

}

export function deactivate() {

	// Close the watcher if active
	if(autoUpdateWatcher !== null) {
		autoUpdateWatcher.close();
	}

}


/**
 * Generates the theme from the current color palette and overwrites the last one
 */
function generateColorThemes() {
	// Import colors from pywal cache
	let colors: Color[] | undefined;
	try {
		const colorsRaw = fs.readFileSync(walColorsJsonPath!).toString();
		
			type WalJson = {
				special: {
					background: string,
					foreground: string
			},
			colors: {
				[key: string]: string
				}
			};

			let colorsJson: WalJson;
			try {
				colorsJson = JSON.parse(colorsRaw);
			} catch {
				// The wallpaper path on Windows can cause JSON.parse errors since the
				// path isn't properly escaped.
				colorsJson = JSON.parse(colorsRaw
					.split('\n')
					.filter((line) => !line.includes('wallpaper'))
					.join('\n'));
			}

		colors = Object.values(colorsJson.colors)
			.map(color => new Color(color));

			colors[0] = Color(colorsJson?.special?.background);
			colors[7] = Color(colorsJson?.special?.foreground);
	} catch(error) {
			vscode.window.showErrorMessage('Couldn\'t load colors from pywal cache, be sure to run pywal before updating.');
			return;
	}
		
	// Generate the normal theme
	const colorTheme = template(colors, false);
	fs.writeFileSync(path.join(__dirname,'..', 'themes', 'wal.json'), JSON.stringify(colorTheme, null, 4));
	
	// Generate the bordered theme
	const colorThemeBordered = template(colors, true);
	fs.writeFileSync(path.join(__dirname,'..', 'themes', 'wal-bordered.json'), JSON.stringify(colorThemeBordered, null, 4));
}

/**
 * Automatically updates the theme when the color palette changes
 * @returns The watcher for the color palette
 */
function autoUpdate(): chokidar.FSWatcher {
	// Watch for changes in the color palette of wal
	return chokidar
		.watch(walCachePath)
		.on('change', generateColorThemes);
}
