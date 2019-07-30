const path = require('path')

module.exports = function(api) {
    api.chainWebpack(config => {
        // 读取vue单文件组件源代码
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
        config.module
            .rule('get-source-code')
            .resourceQuery(/get-source-code/)
            .use('RawLoader')
            .loader('raw-loader')
            .end()
            .use('HighlightLoader')
            .loader(path.resolve(__dirname, './HighlightLoader'))
        // 修复webpack4 无法把json文件读取成文本
        config.module
            .rule('json/get-source-code')
            .test(/\.json$/)
            .type('javascript/auto')
            .resourceQuery(/get-source-code/)
            .use('HighlightLoader')
            .loader(path.resolve(__dirname, './HighlightLoader'))
    })
}
