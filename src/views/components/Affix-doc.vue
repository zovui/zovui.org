<style>
body {
	/*height: 2000px;*/
}
.demo-affix {
	display: inline-block;
	height: 30px;
	line-height: 30px;
	background: #f60;
	color: #fff;
	padding: 0 10px;
}
</style>
<template>
	<div>
		<article>
			<h1>Affix 图钉</h1>
			<div class="anchor">
				<h2 id="GS">概述</h2>
				<a href="#GS">#</a>
			</div>
			<p>
				使用图钉，可以将内容固定在屏幕上，并且不随页面的滚动而滚动。常用于侧边菜单等。
			</p>
			<h2>代码示例</h2>
			<DemoBox
				title="基础用法"
				titleId="JCYF"
				desc="简单使用，当元素不可见时，直接固定在最顶端。"
				onlineHref="http://jsrun.net/IeyKp/edit"
				:demoCode="JCYF_code"
			>
				<Affix slot="demo">
					<div class="demo-affix">固定在最顶部</div>
				</Affix>
			</DemoBox>
			<DemoBox
				title="偏移"
				titleId="PY"
				desc="当滚动到一定距离时再固定。"
				onlineHref="http://jsrun.net/aeyKp/edit"
				:demoCode="PY_code"
			>
				<Affix :offset-top="100" slot="demo">
					<div class="demo-affix">
						固定在距离顶部100px触发
					</div>
				</Affix>
			</DemoBox>
			<DemoBox
				title="固定在底部"
				titleId="GDZDB"
				desc="在屏幕下方固定。"
				onlineHref="http://jsrun.net/3eyKp/edit"
				:demoCode="GDZDB_code"
			>
				<Affix :offset-bottom="50" slot="demo">
					<div class="demo-affix">固定在距离底部50px触发</div>
				</Affix>
			</DemoBox>
			<DemoBox
				title="固定状态改变时的回调"
				titleId="HD"
				desc="当到固定状态触发，会触发事件"
				onlineHref="http://jsrun.net/8eyKp/edit"
				:demoCode="HD_code"
			>
				<Affix :offset-top="50" slot="demo" @on-change="handleChange">
					<div class="demo-affix">固定在距离顶部50px触发</div>
				</Affix>
			</DemoBox>
			<div class="anchor">
				<h2 id="API">API</h2>
				<a href="#API">#</a>
			</div>
			<section class="demo-param">
				<h3 class="demo-param-header">
					Affix props
				</h3>
				<Table
					class="demo-param-content"
					:columns="affixPropsColumns"
					:data="affixPropsData"
				></Table>
				<h3 class="demo-param-header">
					Affix events
				</h3>
				<Table
					class="demo-param-content"
					:columns="affixEventsColumns"
					:data="affixEventsData"
				></Table>
			</section>
		</article>
	</div>
</template>
<script>
import DemoBox from '../../components/demo-box'
import Table from '../../components/table'
export default {
	components: {
		DemoBox,
		Table
	},
	data() {
		return {
			arr: [],
			arr1: [],
			affixPropsColumns: [
				{
					title: '属性',
					key: 'property'
				},
				{
					title: '说明',
					key: 'explain'
				},
				{
					title: '类型',
					key: 'type'
				},
				{
					title: '默认值',
					key: 'default'
				}
			],
			affixPropsData: [
				{
					property: 'offset-top',
					explain: '距离窗口顶部达到指定偏移量后触发',
					type: 'Number',
					default: 0
				},
				{
					property: 'offset-bottom',
					explain: '距离窗口底部达到指定偏移量后触发',
					type: 'Number',
					default: '-'
				},
				{
					property: 'placeholder',
					explain: '浮动后原位置的占位块',
					type: 'Boolean',
					default: 'true'
				}
			],
			affixEventsColumns: [
				{
					title: '事件名',
					key: 'eventsName'
				},
				{
					title: '说明',
					key: 'explain'
				},
				{
					title: '返回值',
					key: 'returnValue'
				}
			],
			affixEventsData: [
				{
					eventsName: '@on-change',
					explain: '在固定状态发生改变时触发',
					returnValue: 'true | false'
				}
			],
			anchorNavList: [
				{
					href: '#JCYF',
					title: '基础用法'
				},
				{
					href: '#PY',
					title: '偏移'
				},
				{
					href: '#GDZDB',
					title: '固定在底部'
				},
				{
					href: '#HD',
					title: '固定状态改变时的回调'
				},
				{
					href: '#API',
					title: 'API'
				}
			],
			JCYF_code: `<template> 
    <z-affix> 
        <div class="demo-affix">固定在最顶部</div>
    </z-affix> 
</template> 
<script>
    export default {
        
    } 
<\/script>
`,
			PY_code: `<template> 
    <Affix offset-top="100">
        <span class="demo-affix">固定在距离顶部100px触发</span>
    </Affix> 
</template> 
<script>
    export default {
    
    } 
<\/script>
`,
			GDZDB_code: `<template>
    <Affix offset-bottom="50">
        <span class="demo-affix">固定在距离底部50px触发</span>
    </Affix> 
</template> 
<script>
    export default {
    
    } 
<\/script>
`,
			HD_code: `<template> 
    <Affix offset-bottom="50" @on-change="handleChange"> 
        <span class="demo-affix">固定在距离底部50px触发</span>
    </Affix> 
</template> 
<script>
    export default {
        methods: { 
            handleChange(state) {
                this.$Message.info(\`Status: \${state}\`); 
            } 
        } 
    }
<\/script>`
		}
	},
	methods: {
		handleChange(state) {
			this.$Message.info(`Status: ${state}`)
		}
	},
	created() {
		for (let i = 0; i < 40; i++) {
			this.arr.push(i)
			this.arr1.push(i)
		}
	},
	mounted() {
		this.$emit('on-setAnchorNav', this.anchorNavList)
	}
}
</script>
<style lang="scss">
h2 {
	margin-bottom: 15px;
}
.demo-param {
	margin: 20px 0;
	.demo-param-header {
		margin: 20px 0;
	}
}
</style>
