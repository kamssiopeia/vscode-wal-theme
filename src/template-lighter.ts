import * as Color from 'color';

export default (colors: Color[]) => ({
    'type': 'dark',
    'colors': {
        'editor.background': colors[0].hex(),
        'editor.foreground': colors[15].hex(),
        'activityBarBadge.background': colors[9].hex(),
        'sideBarTitle.foreground': colors[15].hex(),
        'activityBar.background': colors[0].hex(),
        'activityBar.dropBackground': colors[3].hex(),
        'activityBar.foreground': colors[15].hex(),
        'activityBarBadge.foreground': colors[15].hex(),
        'badge.foreground': colors[15].hex(),
        'badge.background': colors[0].hex(),
        'terminal.background': colors[0].hex(),
        'terminal.foreground': colors[15].hex(),
        'terminal.ansiBlack': colors[0].hex(),
        'terminal.ansiRed': colors[1].hex(),
        'terminal.ansiGreen': colors[2].hex(),
        'terminal.ansiYellow': colors[3].hex(),
        'terminal.ansiBlue': colors[4].hex(),
        'terminal.ansiMagenta': colors[5].hex(),
        'terminal.ansiCyan': colors[6].hex(),
        'terminal.ansiWhite': colors[7].hex(),
        'terminal.ansiBrightBlack': colors[8].hex(),
        'terminal.ansiBrightRed': colors[9].hex(),
        'terminal.ansiBrightGreen': colors[10].hex(),
        'terminal.ansiBrightYellow': colors[11].hex(),
        'terminal.ansiBrightBlue': colors[12].hex(),
        'terminal.ansiBrightMagenta': colors[13].hex(),
        'terminal.ansiBrightCyan': colors[14].hex(),
        'terminal.ansiBrightWhite': colors[15].hex(),
        'sideBar.background': colors[0].hex(),
        'sideBar.foreground': colors[15].hex(),
        'statusBar.background': colors[0].hex(),
        'statusBar.debuggingBackground': colors[15].hex(),
        'statusBar.debuggingForeground': colors[0].hex(),
        'statusBar.noFolderForeground': colors[15].hex(),
        'statusBar.noFolderBackground': colors[0].hex(),
        'statusBar.foreground': colors[15].hex(),
        'tab.activeBorder': colors[0].hex(),
        'tab.unfocusedActiveBorder': colors[0].hex(),
        'tab.activeBackground': colors[15].hex() + '1A',
        'tab.activeForeground': colors[15].hex(),
        'tab.inactiveBackground': colors[0].hex(),
        'tab.inactiveForeground': colors[15].hex(),
        'tab.unfocusedActiveForeground': colors[1].hex(),
        'tab.unfocusedInactiveForeground': colors[0].hex(),
        'input.background': colors[0].hex(),
        'input.foreground': colors[15].hex(),
        'button.background': colors[1].hex(),
        'button.foreground': colors[15].hex(),
        'editorGroupHeader.tabsBackground': colors[0].hex(),
        'editorGroup.dropBackground': colors[1].hex() + '99',
        'textLink.activeForeground': colors[3].hex(),
        'textLink.foreground': colors[2].hex(),
        'list.activeSelectionBackground': colors[2].hex(),
        'list.focusBackground': colors[2].hex(),
        'list.hoverForeground': colors[15].hex(),
        'list.hoverBackground': colors[2].hex() + '4D',
        'list.dropBackground': colors[2].hex() + '4D'
    },
    'tokenColors': [
        {
            'settings': {
                'foreground': colors[1].hex(),
                'background': colors[0].hex()
            }
        },
        {
            'name': 'Comment',
            'scope': [
                'comment',
                'punctuation.definition.comment'
            ],
            'settings': {
                'fontStyle': 'italic',
                'foreground': colors[8].hex()
            }
        },
        {
            'name': 'Variables',
            'scope': [
                'variable',
                'string constant.other.placeholder'
            ],
            'settings': {
                'foreground': colors[6].hex()
            }
        },
        {
            'name': 'Colors',
            'scope': [
                'constant.other.color'
            ],
            'settings': {
                'foreground': colors[7].hex()
            }
        },
        {
            'name': 'Invalid',
            'scope': [
                'invalid',
                'invalid.illegal'
            ],
            'settings': {
                'foreground': colors[9].hex()
            }
        },
        {
            'name': 'Keyword, Storage',
            'scope': [
                'keyword',
                'storage.type',
                'storage.modifier'
            ],
            'settings': {
                'foreground': colors[2].hex()
            }
        },
        {
            'name': 'Operator, Misc',
            'scope': [
                'keyword.control',
                'constant.other.color',
                'punctuation',
                'meta.tag',
                'punctuation.definition.tag',
                'punctuation.separator.inheritance.php',
                'punctuation.definition.tag.html',
                'punctuation.definition.tag.begin.html',
                'punctuation.definition.tag.end.html',
                'punctuation.section.embedded',
                'keyword.other.template',
                'keyword.other.substitution'
            ],
            'settings': {
                'foreground': colors[6].hex()
            }
        },
        {
            'name': 'Tag',
            'scope': [
                'entity.name.tag',
                'meta.tag.sgml',
                'markup.deleted.git_gutter'
            ],
            'settings': {
                'foreground': colors[9].hex()
            }
        },
        {
            'name': 'Function, Special Method',
            'scope': [
                'entity.name.function',
                'meta.function-call',
                'variable.function',
                'support.function',
                'keyword.other.special-method'
            ],
            'settings': {
                'foreground': colors[1].hex()
            }
        },
        {
            'name': 'Block Level Variables',
            'scope': [
                'meta.block variable.other'
            ],
            'settings': {
                'foreground': colors[9].hex()
            }
        },
        {
            'name': 'Other Variable, String Link',
            'scope': [
                'support.other.variable',
                'string.other.link'
            ],
            'settings': {
                'foreground': colors[9].hex()
            }
        },
        {
            'name': 'Number, Constant, Function Argument, Tag Attribute, Embedded',
            'scope': [
                'constant.numeric',
                'constant.language',
                'support.constant',
                'constant.character',
                'constant.escape',
                'variable.parameter',
                'keyword.other.unit',
                'keyword.other'
            ],
            'settings': {
                'foreground': colors[3].hex()
            }
        },
        {
            'name': 'String, Symbols, Inherited Class, Markup Heading',
            'scope': [
                'string',
                'constant.other.symbol',
                'constant.other.key',
                'entity.other.inherited-class',
                'markup.heading',
                'markup.inserted.git_gutter',
                'meta.group.braces.curly constant.other.object.key.js string.unquoted.label.js'
            ],
            'settings': {
                'fontStyle': 'normal',
                'foreground': colors[4].hex()
            }
        },
        {
            'name': 'Class, Support',
            'scope': [
                'entity.name',
                'support.type',
                'support.class',
                'support.orther.namespace.use.php',
                'meta.use.php',
                'support.other.namespace.php',
                'markup.changed.git_gutter',
                'support.type.sys-types'
            ],
            'settings': {
                'foreground': colors[5].hex()
            }
        },
        {
            'name': 'Entity Types',
            'scope': [
                'support.type'
            ],
            'settings': {
                'foreground': colors[14].hex()
            }
        },
        {
            'name': 'CSS Class and Support',
            'scope': [
                'source.css support.type.property-name',
                'source.sass support.type.property-name',
                'source.scss support.type.property-name',
                'source.less support.type.property-name',
                'source.stylus support.type.property-name',
                'source.postcss support.type.property-name'
            ],
            'settings': {
                'foreground': colors[14].hex()
            }
        },
        {
            'name': 'Sub-methods',
            'scope': [
                'entity.name.module.js',
                'variable.import.parameter.js',
                'variable.other.class.js'
            ],
            'settings': {
                'foreground': colors[9].hex()
            }
        },
        {
            'name': 'Language methods',
            'scope': [
                'variable.language'
            ],
            'settings': {
                'fontStyle': 'italic',
                'foreground': colors[9].hex()
            }
        },
        {
            'name': 'entity.name.method.js',
            'scope': [
                'entity.name.method.js'
            ],
            'settings': {
                'fontStyle': 'italic',
                'foreground': colors[12].hex()
            }
        },
        {
            'name': 'meta.method.js',
            'scope': [
                'meta.class-method.js entity.name.function.js',
                'variable.function.constructor'
            ],
            'settings': {
                'foreground': colors[12].hex()
            }
        },
        {
            'name': 'Attributes',
            'scope': [
                'entity.other.attribute-name'
            ],
            'settings': {
                'foreground': colors[13].hex()
            }
        },
        {
            'name': 'HTML Attributes',
            'scope': [
                'text.html.basic entity.other.attribute-name.html',
                'text.html.basic entity.other.attribute-name'
            ],
            'settings': {
                'fontStyle': 'italic',
                'foreground': colors[3].hex()
            }
        },
        {
            'name': 'CSS Classes',
            'scope': [
                'entity.other.attribute-name.class'
            ],
            'settings': {
                'foreground': colors[3].hex()
            }
        },
        {
            'name': 'CSS ID\'s',
            'scope': [
                'source.sass keyword.control'
            ],
            'settings': {
                'foreground': colors[12].hex()
            }
        },
        {
            'name': 'Inserted',
            'scope': [
                'markup.inserted'
            ],
            'settings': {
                'foreground': colors[10].hex()
            }
        },
        {
            'name': 'Deleted',
            'scope': [
                'markup.deleted'
            ],
            'settings': {
                'foreground': colors[9].hex()
            }
        },
        {
            'name': 'Changed',
            'scope': [
                'markup.changed'
            ],
            'settings': {
                'foreground': colors[13].hex()
            }
        },
        {
            'name': 'Regular Expressions',
            'scope': [
                'string.regexp'
            ],
            'settings': {
                'foreground': colors[14].hex()
            }
        },
        {
            'name': 'Escape Characters',
            'scope': [
                'constant.character.escape'
            ],
            'settings': {
                'foreground': colors[14].hex()
            }
        },
        {
            'name': 'URL',
            'scope': [
                '*url*',
                '*link*',
                '*uri*'
            ],
            'settings': {
                'fontStyle': 'underline'
            }
        },
        {
            'name': 'Decorators',
            'scope': [
                'tag.decorator.js entity.name.tag.js',
                'tag.decorator.js punctuation.definition.tag.js'
            ],
            'settings': {
                'fontStyle': 'italic',
                'foreground': colors[12].hex()
            }
        },
        {
            'name': 'ES7 Bind Operator',
            'scope': [
                'source.js constant.other.object.key.js string.unquoted.label.js'
            ],
            'settings': {
                'fontStyle': 'italic',
                'foreground': colors[9].hex()
            }
        },
        {
            'name': 'JSON Key - Level 0',
            'scope': [
                'source.json meta.structure.dictionary.json support.type.property-name.json'
            ],
            'settings': {
                'foreground': colors[6].hex()
            }
        },
        {
            'name': 'JSON Key - Level 1',
            'scope': [
                'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json'
            ],
            'settings': {
                'foreground': colors[7].hex()
            }
        },
        {
            'name': 'JSON Key - Level 2',
            'scope': [
                'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json'
            ],
            'settings': {
                'foreground': colors[8].hex()
            }
        },
        {
            'name': 'JSON Key - Level 3',
            'scope': [
                'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json'
            ],
            'settings': {
                'foreground': colors[9].hex()
            }
        },
        {
            'name': 'JSON Key - Level 4',
            'scope': [
                'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json'
            ],
            'settings': {
                'foreground': colors[10].hex()
            }
        },
        {
            'name': 'JSON Key - Level 5',
            'scope': [
                'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json'
            ],
            'settings': {
                'foreground': colors[12].hex()
            }
        },
        {
            'name': 'JSON Key - Level 6',
            'scope': [
                'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json'
            ],
            'settings': {
                'foreground': colors[9].hex()
            }
        },
        {
            'name': 'JSON Key - Level 7',
            'scope': [
                'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json'
            ],
            'settings': {
                'foreground': colors[13].hex()
            }
        },
        {
            'name': 'JSON Key - Level 8',
            'scope': [
                'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json'
            ],
            'settings': {
                'foreground': colors[10].hex()
            }
        },
        {
            'name': 'Markdown - Plain',
            'scope': [
                'text.html.markdown',
                'punctuation.definition.list_item.markdown'
            ],
            'settings': {
                'foreground': colors[7].hex()
            }
        },
        {
            'name': 'Markdown - Markup Raw Inline',
            'scope': [
                'text.html.markdown markup.inline.raw.markdown'
            ],
            'settings': {
                'foreground': colors[13].hex()
            }
        },
        {
            'name': 'Markdown - Markup Raw Inline Punctuation',
            'scope': [
                'text.html.markdown markup.inline.raw.markdown punctuation.definition.raw.markdown'
            ],
            'settings': {
                'foreground': colors[8].hex()
            }
        },
        {
            'name': 'Markdown - Line Break',
            'scope': [
                'text.html.markdown meta.dummy.line-break'
            ],
            'settings': {
                'foreground': ''
            }
        },
        {
            'name': 'Markdown - Heading',
            'scope': [
                'markdown.heading',
                'markup.heading | markup.heading entity.name',
                'markup.heading.markdown punctuation.definition.heading.markdown'
            ],
            'settings': {
                'foreground': colors[10].hex()
            }
        },
        {
            'name': 'Markup - Italic',
            'scope': [
                'markup.italic'
            ],
            'settings': {
                'fontStyle': 'italic',
                'foreground': colors[9].hex()
            }
        },
        {
            'name': 'Markup - Bold',
            'scope': [
                'markup.bold',
                'markup.bold string'
            ],
            'settings': {
                'fontStyle': 'bold',
                'foreground': colors[9].hex()
            }
        },
        {
            'name': 'Markup - Bold-Italic',
            'scope': [
                'markup.bold markup.italic',
                'markup.italic markup.bold',
                'markup.quote markup.bold',
                'markup.bold markup.italic string',
                'markup.italic markup.bold string',
                'markup.quote markup.bold string'
            ],
            'settings': {
                'fontStyle': 'bold',
                'foreground': colors[9].hex()
            }
        },
        {
            'name': 'Markup - Underline',
            'scope': [
                'markup.underline'
            ],
            'settings': {
                'fontStyle': 'underline',
                'foreground': colors[10].hex()
            }
        },
        {
            'name': 'Markup - Strike',
            'scope': [
                'markup.strike'
            ],
            'settings': {
                'fontStyle': 'strike',
                'foreground': ''
            }
        },
        {
            'name': 'Markdown - Blockquote',
            'scope': [
                'markup.quote punctuation.definition.blockquote.markdown'
            ],
            'settings': {
                'background': colors[8].hex(),
                'foreground': colors[8].hex()
            }
        },
        {
            'name': 'Markup - Quote',
            'scope': [
                'markup.quote'
            ],
            'settings': {
                'fontStyle': 'italic',
                'foreground': ''
            }
        },
        {
            'name': 'Markdown - Link',
            'scope': [
                'string.other.link.title.markdown'
            ],
            'settings': {
                'foreground': colors[12].hex()
            }
        },
        {
            'name': 'Markdown - Link Description',
            'scope': [
                'string.other.link.description.title.markdown'
            ],
            'settings': {
                'foreground': colors[13].hex()
            }
        },
        {
            'name': 'Markdown - Link Anchor',
            'scope': [
                'constant.other.reference.link.markdown'
            ],
            'settings': {
                'foreground': colors[3].hex()
            }
        },
        {
            'name': 'Markup - Raw Block',
            'scope': [
                'markup.raw.block'
            ],
            'settings': {
                'foreground': colors[13].hex()
            }
        },
        {
            'name': 'Markdown - Raw Block Fenced',
            'scope': [
                'markup.raw.block.fenced.markdown'
            ],
            'settings': {
                'foreground': colors[15].hex() + '80'
            }
        },
        {
            'name': 'Markdown - Fenced Bode Block',
            'scope': [
                'punctuation.definition.fenced.markdown'
            ],
            'settings': {
                'foreground': colors[15].hex() + '80'
            }
        },
        {
            'name': 'Markdown - Fenced Bode Block Variable',
            'scope': [
                'markup.raw.block.fenced.markdown',
                'variable.language.fenced.markdown',
                'punctuation.section.class.end'
            ],
            'settings': {
                'foreground': colors[7].hex()
            }
        },
        {
            'name': 'Markdown - Fenced Language',
            'scope': [
                'variable.language.fenced.markdown'
            ],
            'settings': {
                'foreground': colors[8].hex()
            }
        },
        {
            'name': 'Markdown - Separator',
            'scope': [
                'meta.separator'
            ],
            'settings': {
                'fontStyle': 'bold',
                'background': colors[15].hex() + '80',
                'foreground': colors[8].hex()
            }
        },
        {
            'name': 'Markup - Table',
            'scope': [
                'markup.table'
            ],
            'settings': {
                'foreground': colors[7].hex()
            }
        },
        {
            'scope': 'token.info-token',
            'settings': {
                'foreground': colors[6].hex()
            }
        },
        {
            'scope': 'token.warn-token',
            'settings': {
                'foreground': colors[3].hex()
            }
        },
        {
            'scope': 'token.error-token',
            'settings': {
                'foreground': colors[9].hex()
            }
        },
        {
            'scope': 'token.debug-token',
            'settings': {
                'foreground': colors[13].hex()
            }
        }
    ]
});
