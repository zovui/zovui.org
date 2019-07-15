<template>
	<div class="install-page">
		<Row>
			<Col span="20">
				<article>
					<h1>安装说明</h1>
					<div class="anchor">
						<h2 id="NPM_IN">npm安装</h2>
						<a href="#NPM_IN">#</a>
					</div>
					<p>
						推荐使用npm安装方式，它能更好地与<a
							href="https://webpack.js.org/"
							target="_blank"
							>webpack</a
						>打包工具配合使用
					</p>
					<p>
						如果您使用了 NPM 安装，并使用 webpack
						作为构建工具，请继续阅读<router-link
							to="/getting-started"
							>入门</router-link
						>章节。
					</p>
					<div v-highlight>
						<pre class="bg">
							<code class="js">npm i zov -S</code>
						</pre>
					</div>
					<div class="anchor">
						<h2 id="CDN_IN">CDN 引入</h2>
						<a href="#CDN_IN">#</a>
					</div>
					<p>
						通过
						<a href="https://unpkg.com/zov@0.7.0/lib/zov.min.js"
							>unpkg.com/zov</a
						>
						可以看到 Zov 最新版本的资源,在页面上引入 js 和 css
						文件即可开始使用：
					</p>
					<div v-highlight>
						<pre class="bg">
							<code class="html">&lt;!-- import Vue.js --&gt;
&lt;script src="//vuejs.org/js/vue.min.js"&gt;&lt;/script&gt;
&lt;!-- import stylesheet --&gt;
&lt;link rel="stylesheet" href="//unpkg.com/zov@0.6.0/lib/zov.min.css"&gt;
&lt;!-- import iView --&gt;
&lt;script src="//unpkg.com/zov@0.6.0/lib/zov.min.js"&gt;&lt;/script&gt;</code>
						</pre>
					</div>
					<div class="anchor">
						<h3 id="SL">示例</h3>
						<a href="#SL">#</a>
					</div>
					<p>
						通过 CDN
						的方式可以快速写出一个示例，您可以复制下面代码或<a
							href="http://jsrun.net/ieyKp/edit"
							target="_blank"
							>在线预览</a
						>
					</p>
					<div v-highlight>
						<pre class="bg">
							<code class="xml">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;meta charset="utf-8"&gt;
    &lt;title&gt;iview example&lt;/title&gt;
    &lt;link rel="stylesheet" type="text/css" href="http://unpkg.com/iview/dist/styles/iview.css"&gt;
    &lt;script type="text/javascript" src="http://vuejs.org/js/vue.min.js"&gt;&lt;/script&gt;
    &lt;script type="text/javascript" src="http://unpkg.com/iview/dist/iview.min.js"&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div id="app"&gt;
    &lt;i-button @click="show"&gt;Click me!&lt;/i-button&gt;
    &lt;Modal v-model="visible" title="Welcome"&gt;Welcome to iView&lt;/Modal&gt;
&lt;/div&gt;
&lt;script&gt;
    new Vue({
        el: '#app',
        data: {
            visible: false
        },
        methods: {
            show: function () {
                this.visible = true;
            }
        }
    })
  &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
							</code>
						</pre>
					</div>
				</article>
			</Col>
			<Col span="4">
				<Affix>
					<Anchor :show-ink="true">
						<AnchorLink
							v-for="(i, j) in anchorNavList"
							:key="j + i.href"
							:href="i.href"
							:title="i.title"
						/>
					</Anchor>
				</Affix>
			</Col>
		</Row>
	</div>
</template>

<script>
export default {
	data() {
		return {
			anchorNavList: [
				{
					href: '#NPM_IN',
					title: 'NPM安装'
				},
				{
					href: '#CDN_IN',
					title: 'CDN安装'
				}
			]
		}
	},
	routerOptions: {
		order: 1,
		disc: '安装',
		iconname: 'cube'
	}
}
</script>
<style lang="scss">
// h1, h2 {
// 	font-size: 400;
// }
.install-page {
	// h1 {
	// 	font-weight: 400;
	// 	margin-bottom: 30px;
	// }
	// .anchor {
	// 	h2, h3 {
	// 		display: inline;
	// 		font-weight: 400;
	// 	}
	// 	a {
	// 		font-size: 24px;
	// 		margin-left: 5px;
	// 		opacity: 0;
	// 		transition: opacity .2s ease-in-out;
	// 	}
	// 	&:hover {
	// 		a {
	// 			opacity: 1;
	// 		}
	// 	}
	// }
	// .bg {
	// 	.hljs {
	// 		padding: 15px;
	// 		// background-color: #F7F7F7;
	// 	}
	// }
}
</style>
