<template>
    <div>
        <article>
            <h1>Divider 分割线</h1>
            <p>区域内容的分割线。</p>
            <div class="anchor">
                <h2 id="GS">概述</h2>
                <a href="#GS">#</a>
            </div>
            <p>对不同章节的文本段落进行分割。</p>
            <p>对行内文字/链接进行分割，例如表格的操作列。</p>
            <div class="anchor">
                <h2 id="GS">代码示例</h2>
                <a href="#GS">#</a>
            </div>
            <DemoBox
                title="水平分割线"
                titleId="SPFGX"
                desc="默认为水平分割线，可在中间加入文字。"
                onlineHref="http://jsrun.net/IeyKp/edit"
                :demoCode="SPFGX_code"
            >
                <div slot="demo">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed nonne merninisti licere mihi ista probare, quae sunt
                        a te dicta? Refert tamen, quo modo.
                    </p>
                    <Divider />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed nonne merninisti licere mihi ista probare, quae sunt
                        a te dicta? Refert tamen, quo modo.
                    </p>
                    <Divider>With Text</Divider>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed nonne merninisti licere mihi ista probare, quae sunt
                        a te dicta? Refert tamen, quo modo.
                    </p>
                    <Divider dashed />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed nonne merninisti licere mihi ista probare, quae sunt
                        a te dicta? Refert tamen, quo modo.
                    </p>
                </div>
            </DemoBox>
            <DemoBox
                title="垂直分割线"
                titleId="CZFGX"
                desc='使用 type="vertical" 设置为行内的垂直分割线。'
                onlineHref="http://jsrun.net/IeyKp/edit"
                :demoCode="CZFGX_code"
            >
                <div slot="demo">
                    <a href="#">Link</a>
                    <Divider type="vertical" />
                    <a href="#">Link</a>
                    <Divider type="vertical" />
                    <a href="#">Link</a>
                </div>
            </DemoBox>
            <DemoBox
                title="标题位置"
                titleId="BTWZ"
                desc="修改分割线标题的位置。"
                onlineHref="http://jsrun.net/IeyKp/edit"
                :demoCode="BTWZ_code"
            >
                <div slot="demo">
                    <Divider orientation="left">Left Text</Divider>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed nonne merninisti licere mihi ista probare, quae sunt
                        a te dicta? Refert tamen, quo modo.
                    </p>
                    <Divider orientation="right">Right Text</Divider>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed nonne merninisti licere mihi ista probare, quae sunt
                        a te dicta? Refert tamen, quo modo.
                    </p>
                </div>
            </DemoBox>
            <div class="anchor">
                <h2 id="API">API</h2>
                <a href="#API">#</a>
            </div>
            <section class="demo-param">
                <h3 class="demo-param-header">
                    Divider props
                </h3>
                <Table
                    class="demo-param-content"
                    :columns="propsColumns"
                    :data="dividerPropsData"
                ></Table>
            </section>
        </article>
        <!-- <div class="box">
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
				nonne merninisti licere mihi ista probare, quae sunt a te dicta?
				Refert tamen, quo modo.
			</p>
			<Divider />
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
				nonne merninisti licere mihi ista probare, quae sunt a te dicta?
				Refert tamen, quo modo.
			</p>
			<Divider>With Text</Divider>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
				nonne merninisti licere mihi ista probare, quae sunt a te dicta?
				Refert tamen, quo modo.
			</p>
			<Divider dashed />
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
				nonne merninisti licere mihi ista probare, quae sunt a te dicta?
				Refert tamen, quo modo.
			</p>
			<Divider dotted />
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
				nonne merninisti licere mihi ista probare, quae sunt a te dicta?
				Refert tamen, quo modo.
			</p>
		</div>
		<div class="box">
			<Divider orientation="left">Left Text</Divider>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
				nonne merninisti licere mihi ista probare, quae sunt a te dicta?
				Refert tamen, quo modo.
			</p>
			<Divider orientation="right">Right Text</Divider>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
				nonne merninisti licere mihi ista probare, quae sunt a te dicta?
				Refert tamen, quo modo.
			</p>
		</div>
		<div class="box">
			Text
			<Divider type="vertical" />
			<a href="#">Link</a>
			<Divider type="vertical" />
			<a href="#">Link</a>
		</div> -->
        <!-- <div class="box">
			<h3>参数</h3>
			<p>@dashed 是否虚线 类型：boolean 默认值：false</p>
			<p>@dotted 是否点状线 类型：boolean 默认值：false</p>
			<p>
				@orientation 分割线标题的位置 类型：(enum)left、right、center
				默认值：center
			</p>
			<p>
				@type 水平还是垂直类型 类型：(enum)horizontal、vertical
				默认值：horizontal
			</p>
		</div> -->
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
            SPFGX_code: `<template>
	<div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
        <Divider />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
        <Divider>With Text</Divider>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
        <Divider dashed />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta?Refert tamen, quo modo.</p>
	</div>
</template>
<script>
    export default {
	
    }
<\/script>`,
            CZFGX_code: `<template>
    <div>
        <a href="#">Link</a>
        <Divider type="vertical" />
        <a href="#">Link</a>
        <Divider type="vertical" />
        <a href="#">Link</a>
    </div>
</template>
<script>
    export default {
	
    }
<\/script>`,
            BTWZ_code: `<template>
    <div>
        <Divider orientation="left">Left Text</Divider>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
        <Divider orientation="right">Right Text</Divider>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sednonne merninisti licere mihi ista probare, quae sunt a te dicta?Refert tamen, quo modo.</p>
    </div>
</template>
<script>
    export default {

    }
<\/script>`,
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
            dividerPropsData: [
                {
                    property: 'dashed',
                    explain: '设置是否为虚线。',
                    type: 'Boolean',
                    default: 'false'
                },
                {
                    property: 'dotted',
                    explain: '设置是否点为状线。',
                    type: 'Boolean',
                    default: 'false'
                },
                {
                    property: 'orientation',
                    explain: '分割线标题的位置,值为left、right、center。',
                    type: 'String',
                    default: 'center'
                },
                {
                    property: 'type',
                    explain: '水平类型还是垂直类型，值为horizontal、vertical。',
                    type: 'String',
                    default: 'horizontal'
                }
            ],
            anchorNavList: [
                {
                    href: '#SPFGX',
                    title: '水瓶分割线'
                },
                {
                    href: '#CZFGX',
                    title: '垂直分割线'
                },
                {
                    href: '#BTWZ',
                    title: '标题位置'
                },
                {
                    href: '#API',
                    title: 'API'
                }
            ]
        }
    },
    mounted() {
        this.$emit('on-setAnchorNav', this.anchorNavList)
    }
}
</script>
<style type="text/css">
.box {
    border: 3px dashed;
    margin: 15px;
    padding: 15px;
}
</style>
