const highlight = require('highlight.js')
const SFCHighlightDescription = require('./SFCHighlightDescription')

highlight.registerLanguage('vue', SFCHighlightDescription)

module.exports = function(source, map) {
    source = source.replace(/^\n+/, '')
    const highlighted = highlight.highlight('vue', source, true)
    const highlightedSourceCode = /<span class="xml">((.|\s)*)<\/span>/.exec(
        highlighted.value
    )[1]
    source = JSON.stringify(source)
    this.callback(
        null,
        `export default function (Component) {
          Component.options.__sourceCode = ${source};
          Component.options.__highlightedSourceCode = \`${highlightedSourceCode}\`;
        }`,
        map
    )
}
