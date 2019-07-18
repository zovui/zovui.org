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
			if (typeof key === 'boolean') {
				return key
			}
			return `${key}="${value}"`
		})
		.join(' ')
}

function genCode(tagName, attrs, content) {
	return `<${tagName} ${attrsToString(attrs)}>${content}</${tagName}>`
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
			descriptor.template.content
		)
		templateCode = templateCode.replace(/^\n+/, '')
	}
	if (descriptor.styles.length) {
		stylesCode = descriptor.styles
			.map(styleDescriptor => {
				let normalizeContent = styleDescriptor.content.replace(
					/^\n+/,
					''
				)
				return genCode('style', styleDescriptor.attrs, normalizeContent)
			})
			.join('')
	}
	if (descriptor.script) {
		scriptCode = genCode(
			'script',
			descriptor.script.attrs,
			descriptor.script.content
		)
		scriptCode = scriptCode.replace(/(\/\/\n)+/g, '')
	}
	source += `${genCode(
		'sourcecode',
		null,
		`${templateCode}\n${stylesCode}\n${scriptCode}`
	)}`
	return source
}
