const { parse } = require('@vue/component-compiler-utils')
const compiler = require('vue-template-compiler')

function attrsToString(attrs) {
    if (!attrs) {
        return ''
    }
    const attrKeys = Object.keys(attrs)
    if (attrKeys.length === 0) {
        return ''
    }
    return Object.keys(attrs)
        .map(key => {
            let value = attrs[key]
            if (typeof value === 'boolean') {
                return key
            }
            return `${key}="${value}"`
        })
        .join(' ')
        .trim()
}

function genCode(tagName, attrs, content) {
    attrs = attrsToString(attrs)
    attrs = attrs === '' ? '' : ' ' + attrs
    if (!content) {
        return ''
    }
    return `<${tagName}${attrs}>\n${content}\n</${tagName}>`
}

module.exports = function(source) {
    const descriptor = parse({
        source,
        compiler,
        needMap: false
    })
    let templateCode = ''
    let stylesCode = ''
    let scriptCode = ''
    if (descriptor.template) {
        templateCode = genCode(
            'template',
            descriptor.template.attrs,
            descriptor.template.content.replace(/^\n+/, '').replace(/\n+$/, '')
        )
    }
    if (descriptor.styles.length) {
        stylesCode = descriptor.styles
            .map(styleDescriptor => {
                return genCode(
                    'style',
                    styleDescriptor.attrs,
                    styleDescriptor.content
                        .replace(/^\n+/, '')
                        .replace(/\n+$/, '')
                )
            })
            .join('')
    }
    if (descriptor.script) {
        scriptCode = genCode(
            'script',
            descriptor.script.attrs,
            descriptor.script.content
                .replace(/(\/\/\n)+/g, '')
                .replace(/^\n+/, '')
                .replace(/\n+$/, '')
        )
    }
    source += `${genCode(
        'sourcecode',
        null,
        [templateCode, stylesCode, scriptCode]
            .filter(code => code !== '')
            .join('\n\n')
    )}`
    return source
}
