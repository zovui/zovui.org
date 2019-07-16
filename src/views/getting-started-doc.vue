<template>
	<div>
		<Row>
			<Col span="20">
				<article>
					<h1>入门</h1>
					<div class="anchor">
						<h2 id="SYZQ">使用之前</h2>
						<a href="#SYZQ">#</a>
					</div>
					<p>
						在开始之前，我们认为假设你已了解关于 HTML、CSS 和
						JavaScript 的中级知识，熟悉 Vue
						的开发方式，并且已经掌握了 Vue组件 和
						单文件组件。如果你刚开始学习前端或者 Vue，将 UI
						框架作为你的第一步可能不是最好的主意。
					</p>
					<div class="anchor">
						<h2 id="SY_VUE_CLI_3">使用Vue Cli 3</h2>
						<a href="#SY_VUE_CLI_3">#</a>
					</div>
					<p>
						我们为最新的 Vue CLI 3 提供了相应的 zov
						插件，如果你正在用 Vue CLI 3，可以直接在插件中搜索
						zov，安装插件来使用。
					</p>
					<div class="anchor">
						<h2 id="YR_zov">引用 zov</h2>
						<a href="#YR_zov">#</a>
					</div>
					<p>一般在 webpack 入口页面 main.js 中如下配置：</p>
					<div v-highlight>
						<pre class="bg">
							<code class="js">import Vue from 'vue'
import vueRouter from 'vue-router'
import App from './App.vue'
import Routers from './router.js';
import Zov from 'zov'
import 'zov/dist/styles/zov.css';

Vue.use(vueRouter)
Vue.use(Zov)

const RouterConfig = {
    routes: Routers
};
const router = new VueRouter(RouterConfig);

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});</code>
						</pre>
					</div>
					<div class="anchor">
						<h2 id="AXYY">按需引用</h2>
						<a href="#AXYY">#</a>
					</div>
					<p>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
					<div v-highlight>
						<pre class="bg">
							<code class="js">npm install babel-plugin-import --save-dev
// .babelrc
{
  "plugins": [["import", {
    "libraryName": "zov",
    "libraryDirectory": "src/components"
  }]]
}</code>
						</pre>
					</div>
					<p>
						然后这样按需引入组件，就可以减小体积了(按需引入仍需要导入样式)：
					</p>
					<div v-highlight>
						<pre class="bg">
							<code class="js">import { Button, Table } from 'zov';
Vue.component('Button', Button);
Vue.component('Table', Table);</code>
						</pre>
					</div>
					<div class="anchor">
						<h2 id="SYGF">使用规范</h2>
						<a href="#SYGF">#</a>
					</div>
					<p>
						使用 prop 传递数据格式为
						数字、布尔值或函数时，必须带:(兼容String除外，具体看组件文档)，比如：
					</p>
					<div v-highlight>
						<pre class="bg">
							<code class="js">Correct:
&lt;Page :current="1" :total="100"&gt;&lt;/Page&gt;

Incorrect:
&lt;Page current="1" total="100"&gt;&lt;/Page&gt;&lt;/code&gt;</code>
						</pre>
					</div>
					<p>
						在非 template/render 模式下（例如使用 CDN
						引用时），组件名要分隔，例如 DatePicker 必须要写成
						date-picker。
					</p>
					<p>
						以下组件，在非 template/render 模式下，需要加前缀 i-：
					</p>
					<ul class="list">
						<li>Button: z-button</li>
						<li>Input: z-input</li>
						<li>Form: z-form</li>
					</ul>
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
					href: '#SYZQ',
					title: '使用之前'
				},
				{
					href: '#SY_VUE_CLI_3',
					title: '使用Vue Cli 3'
				},
				{
					href: '#YY_zov',
					title: '引用zov'
				},
				{
					href: '#AXYY',
					title: '按需引用'
				},
				{
					href: '#SYGF',
					title: '使用规范'
				}
			]
		}
	},
	routerOptions: {
		order: 2,
		disc: '入门',
		iconname: 'flag'
	}
}
</script>

<style lang="scss">
.list li {
	list-style: disc;
	margin-left: 20px;
}
</style>
