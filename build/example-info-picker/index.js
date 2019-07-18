const path = require('path');

module.exports = function (api) {
    api.chainWebpack(config => {
        config.module
            .rule('vue-demo-title')
            .resourceQuery(/blockType=title/)
            .use('TitleLoader')
            .loader(path.resolve(__dirname, './TitleLoader.js'));
        config.module
            .rule('vue-demo-desc')
            .resourceQuery(/blockType=desc/)
            .use('DescLoader')
            .loader(path.resolve(__dirname,  './DescLoader.js'));
    })
};
