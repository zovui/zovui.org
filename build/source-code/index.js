const path = require('path')

module.exports = function(api) {
    api.chainWebpack(config => {
        config.module
            .rule('vue-demo-source-code-generator')
            .test(/\.vue$/)
            .resourceQuery(/demo/)
            .use('GeneratorVueSourceCodeLoader')
            .loader(
                path.resolve(__dirname, './GeneratorVueSourceCodeLoader.js')
            )
        config.module
            .rule('vue-demo-source-code-inject')
            .resourceQuery(/blockType=sourcecode/)
            .use('InjectVueSourceCodeLoader')
            .loader(path.resolve(__dirname, './InjectVueSourceCodeLoader.js'))
    })
}
