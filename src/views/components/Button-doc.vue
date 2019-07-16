<template>
	<div>
		<article>
			<h1>Button 按钮</h1>
			<div class="anchor">
				<h2 id="GS">概述</h2>
				<a href="#GS">#</a>
			</div>
			<p>
				基础组件，触发业务逻辑时使用。
			</p>
			<h2>代码示例</h2>
			<DemoBox
				title="按钮尺寸"
				titleId="ANCC"
				desc="按钮大小分为大中小三种类型。通过设置size为large，default，small设置三种大小。"
				onlineHref="http://jsrun.net/IeyKp/edit"
				:demoCode="ANCC_code"
			>
				<div slot="demo">
					<Button size="large" @click="size = 'large'">large</Button>
					<Button @click="size = 'default'">middle</Button>
					<Button size="small" @click="size = 'small'">small</Button>
				</div>
			</DemoBox>
			<DemoBox
				title="按钮形状"
				titleId="ANXZ"
				desc="通过设置shape为default，circle可设置按钮两种形状。"
				onlineHref="http://jsrun.net/IeyKp/edit"
				:demoCode="ANXZ_code"
			>
				<div slot="demo">
					<Button>default</Button>
					<Button shape="circle">circle</Button>
				</div>
			</DemoBox>
			<DemoBox
				title="按钮类型"
				titleId="ANLX"
				desc="按钮类型有：默认按钮、主按钮、虚线按钮、文字按钮以及四种颜色按钮。通过设置looks为primary、dashed、text、info、success、warning、error创建不同样式的按钮，不设置为默认样式。"
				onlineHref="http://jsrun.net/aeyKp/edit"
				:demoCode="ANLX_code"
			>
				<div slot="demo">
					<p>
						<Button :size="size">default</Button>
						<Button :size="size" looks="primary">primary</Button>
						<Button :size="size" looks="dashed">dashed</Button>
						<Button :size="size" looks="text">text</Button>
					</p>
					<p>
						<Button :size="size" looks="info">info</Button>
						<Button :size="size" looks="success">success</Button>
						<Button :size="size" looks="warning">warning</Button>
						<Button :size="size" looks="error">error</Button>
					</p>
				</div>
			</DemoBox>
			<DemoBox
				title="loading等待"
				titleId="LOADING_DD"
				desc="通过设置loading为true或false让按钮变更或取消为loading状态"
				onlineHref="http://jsrun.net/aeyKp/edit"
				:demoCode="LOADING_DD_code"
			>
				<div slot="demo">
					<p>
						<Button :size="size" :loading="true">default</Button>
						<Button :size="size" looks="primary" :loading="true"
							>primary</Button
						>
						<Button :size="size" looks="dashed" :loading="true"
							>dashed</Button
						>
						<Button :size="size" looks="text" :loading="true"
							>text</Button
						>
					</p>
				</div>
			</DemoBox>
			<DemoBox
				title="禁用"
				titleId="JY"
				desc="通过设置disabled禁用按钮"
				onlineHref="http://jsrun.net/aeyKp/edit"
				:demoCode="JY_code"
			>
				<div slot="demo">
					<p>
						<Button :size="size" disabled>disabled</Button>
					</p>
				</div>
			</DemoBox>
			<DemoBox
				title="自定义图标"
				titleId="ZDYTB"
				desc="通过设置iconname自定义按钮图标"
				onlineHref="http://jsrun.net/aeyKp/edit"
				:demoCode="ZDYTB_code"
			>
				<div slot="demo">
					<p>
						<Button looks="info" iconname="wifi">自定义icon</Button>
						<Button loading iconname="download">自定义icon</Button>
					</p>
				</div>
			</DemoBox>
			<DemoBox
				title="按钮组合"
				titleId="ANZH"
				desc="将多个Button放入ButtonGroup内，可实现按钮组合的效果。"
				onlineHref="http://jsrun.net/aeyKp/edit"
				:demoCode="ANZH_code"
			>
				<div slot="demo">
					<p>
						<ButtonGroup :size="size">
							<Button>default</Button>
							<Button looks="primary" disabled>primary</Button>
							<Button looks="dashed">dashed</Button>
							<Button looks="info">info</Button>
							<Button>default</Button>
						</ButtonGroup>
					</p>
					<p>
						<ButtonGroup :size="size" shape="circle">
							<Button shape="circle">default</Button>
							<Button looks="primary">primary</Button>
							<Button looks="dashed">dashed</Button>
							<Button looks="info">info</Button>
						</ButtonGroup>
					</p>
				</div>
			</DemoBox>
			<div class="anchor">
				<h2 id="API">API</h2>
				<a href="#API">#</a>
			</div>
			<section class="demo-param">
				<h3 class="demo-param-header">
					Button props
				</h3>
				<Table
					class="demo-param-content"
					:columns="propsColumns"
					:data="buttonData"
				></Table>
				<h3 class="demo-param-header">
					Button Group props
				</h3>
				<Table
					class="demo-param-content"
					:columns="propsColumns"
					:data="buttonGroupData"
				></Table>
			</section>
		</article>
		<!-- <p>
			shape
			<Button :size="size" shape="circle">default</Button>
			<Button :size="size" shape="circle" looks="primary"
				>primary</Button
			>
			<Button :size="size" shape="circle" looks="dashed"
				>dashed</Button
			>
			<Button :size="size" shape="circle" looks="text"
				>text</Button
			>
			<Button :size="size" shape="circle" looks="info"
				>info</Button
			>
			<Button :size="size" shape="circle" looks="success"
				>success</Button
			>
			<Button :size="size" shape="circle" looks="warning"
				>warning</Button
			>
			<Button :size="size" shape="circle" looks="error"
				>error</Button
			>
		</p>
		<p>
			disabled
			<Button :size="size" shape="circle" disabled
				>default</Button
			>
			<Button :size="size" shape="circle" looks="primary" disabled
				>primary</Button
			>
			<Button :size="size" shape="circle" looks="dashed" disabled
				>dashed</Button
			>
			<Button :size="size" shape="circle" looks="text" disabled
				>text</Button
			>
			<Button :size="size" shape="circle" looks="info" disabled
				>info</Button
			>
			<Button :size="size" shape="circle" looks="success" disabled
				>success</Button
			>
			<Button :size="size" shape="circle" looks="warning" disabled
				>warning</Button
			>
			<Button :size="size" shape="circle" looks="error" disabled
				>error</Button
			>
		</p>
		<p>
			Icon
			<Button looks="info" iconname="wifi">自定义icon</Button>
			<Button loading iconname="download">自定义icon</Button>
		</p>
		<p>
			loading 异步
			<Button :loading="loading" @click="loading = !loading"
				>点击我 等待</Button
			>
			<Button :loading="loading">loading</Button>
			<Button :loading="loading" spinname="dbcircle"
				>自定义loading</Button
			>

			<Button :loading="loading" :size="size" shape="circle"
				>default</Button
			>
			<Button
				:loading="loading"
				:size="size"
				shape="circle"
				looks="primary"
				>primary</Button
			>
			<Button
				:loading="loading"
				:size="size"
				shape="circle"
				looks="dashed"
				>dashed</Button
			>
			<Button
				:loading="loading"
				:size="size"
				shape="circle"
				looks="text"
				>text</Button
			>
			<Button
				:loading="loading"
				:size="size"
				shape="circle"
				looks="info"
				>info</Button
			>
			<Button
				:loading="loading"
				:size="size"
				shape="circle"
				looks="success"
				>success</Button
			>
			<Button
				:loading="loading"
				:size="size"
				shape="circle"
				looks="warning"
				>warning</Button
			>
			<Button
				:loading="loading"
				:size="size"
				shape="circle"
				looks="error"
				>error</Button
			>
		</p>
		<p>
			无文本 button
			<Button loading />
			<Button looks="info" iconname="wifi" />
			<Button looks="success" shape="circle" iconname="wifi" />
		</p>
		<p>
			组合按钮
			<ButtonGroup :size="size">
				<Button>default</Button>
				<Button looks="primary" disabled>primary</Button>
				<Button looks="dashed">dashed</Button>
				<Button looks="info">info</Button>
				<Button>default</Button>
			</ButtonGroup>
			<ButtonGroup :size="size" shape="circle">
				<Button shape="circle">default</Button>
				<Button looks="primary">primary</Button>
				<Button looks="dashed">dashed</Button>
				<Button looks="info">info</Button>
			</ButtonGroup>
			<ButtonGroup :size="size" shape="circle" :vertical="true">
				<Button shape="circle">default</Button>
				<Button looks="primary">primary</Button>
				<Button looks="dashed">dashed</Button>
				<Button looks="info">info</Button>
			</ButtonGroup>
		</p> -->
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
	mounted() {
		this.$emit('on-setAnchorNav', this.anchorNavList)
		console.log('render', Render)
	},
	data() {
		return {
			anchorNavList: [
				{
					href: '#GS',
					title: '概述'
				},
				{
					href: '#ANCC',
					title: '按钮尺寸'
				},
				{
					href: '#ANXZ',
					title: '按钮形状'
				},
				{
					href: '#ANLX',
					title: '按钮类型'
				},
				{
					href: '#LOADING_DD',
					title: 'loading 等待'
				},
				{
					href: '#JY',
					title: '禁用'
				},
				{
					href: '#ZDYTB',
					title: '自定义图标'
				},
				{
					href: '#ANZH',
					title: '按钮组合'
				},
				{
					href: '#API',
					title: 'API'
				}
			],
			ANCC_code: `<template>
    <div>
        <Button size="large">large</Button>
        <Button size="default">middle</Button>
        <Button size="small">small</Button>
    </div>
</template>
<script>
    export default {

    }
<\/script>`,
			ANXZ_code: `<template> 
    <div>
        <Button shape="default">default</Button>
        <Button shape="circle">circle</Button>
    </div> 
</template> 
<script> 
    export default {
    
    }
<\/script>`,
			ANLX_code: `<template>
    <div>
        <Button :size="size">default</Button> 
        <Button :size="size" looks="primary">primary</Button> 
        <Button :size="size" looks="dashed">dashed</Button>
        <Button :size="size" looks="text">text</Button>
        <Button :size="size" looks="info">info</Button>
        <Button :size="size" looks="success">success</Button>
        <Button :size="size" looks="warning">warning</Button>
        <Button :size="size" looks="error">error</Button> 
    </div>
</template> 
<script> 
    export default {

	} 
<\/script>`,
			LOADING_DD_code: `<template> 
    <div>
        <Button looks="default" :loading="true">default</Button>
        <Button looks="primary" :loading="true">primary</Button>
        <Button looks="dashed" :loading="true">dashed</Button>
        <Button looks="text" :loading="true">text</Button>
    </div>
</template> 
<script> 
    export default { 
    
    }
<\/script>`,
			JY_code: `<template> 
    <Button disabled>disabled</Button>
</template> 
<script> 
    export default {

    } 
<\/script>`,
			ZDYTB_code: `<template> 
    <div> 
        <Button looks="info" iconname="wifi">自定义icon</Button>
        <Button loading iconname="download">自定义icon</Button>
    </div> 
</template> 
<script> 
    export default { 

    }
<\/script>`,
			ANZH_code: `<template> 
    <div> 
        <ButtonGroup :size="size"> 
            <Button>default</Button>
            <Button looks="primary" disabled>primary</Button> 
            <Button looks="dashed">dashed</Button> 
            <Button looks="info">info</Button>
            <Button>default</Button>
        </ButtonGroup> 
        <ButtonGroup :size="size" shape="circle"> 
            <Button shape="circle">default</Button> 
            <Button looks="primary">primary</Button> 
            <Button looks="dashed">dashed</Button> 
            <Button looks="info">info</Button>
        </ButtonGroup> 
    </div> 
</template>
<script> 
    export default {
	
    } 
<\/script>`,
			size: 'default',
			loading: false,
			propsColumns: [
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
			eventsColumns: [
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
			buttonData: [
				{
					property: 'looks',
					explain:
						'设置按钮类型，可选值default,primary,dashed,text,info,success,warning,error',
					type: 'String',
					default: 'default'
				},
				{
					property: 'shape',
					explain: '设置按钮形状，可选值default,circle',
					type: 'String',
					default: 'default'
				},
				{
					property: 'loading',
					explain: '设置按钮加载中状态',
					type: 'Boolean',
					default: 'false'
				},
				{
					property: 'spinname',
					explain: '',
					type: '',
					default: ''
				},
				{
					property: 'iconname',
					explain: '',
					type: '',
					default: ''
				},
				{
					property: 'disabled',
					explain: '',
					type: '',
					default: ''
				},
				{
					property: 'tag',
					explain: '',
					type: '',
					default: ''
				}
			],
			buttonGroupData: [
				{
					property: 'shape',
					explain: '',
					type: '',
					default: ''
				},
				{
					property: 'vertical',
					explain: '',
					type: '',
					default: ''
				}
			]
		}
	}
}
</script>
