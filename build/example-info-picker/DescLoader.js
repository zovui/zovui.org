module.exports = function (source, map) {
    source = source.trim().replace(/^\n+/, '');
    this.callback(
        null,
        `export default function (Component) {
          Component.options.__desc = ${JSON.stringify(source)}
        }`,
        map
    )
};
