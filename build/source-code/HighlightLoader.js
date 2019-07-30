const highlight = require('highlight.js')
const loaderUtils = require('loader-utils')
const path = require('path')

function detectLang(loaderContext) {
    const params = loaderUtils.parseQuery(loaderContext.resourceQuery)
    let extname = path.extname(loaderContext.resourcePath)
    if (params.lang) {
        return params.lang
    }
    if (extname) {
        return extname.slice(1)
    }
    return null
}

module.exports = function(source) {
    let highlighted = null
    let lang = detectLang(this)

    if (lang) {
        highlighted = highlight.highlight(lang, source, true)
    } else {
        highlighted = highlight.highlightAuto(source)
    }

    return highlighted.value
}
