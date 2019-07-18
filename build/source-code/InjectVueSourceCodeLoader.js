module.exports = function(source, map) {
    source = source.replace(/^\n+/, '')
    this.callback(
        null,
        `export default function (Component) {
          Component.options.__sourceCode = ${JSON.stringify(source)}
        }`,
        map
    )
}
