<template>
	<article class="container">
		<h1>Tabs 标签页</h1>
			<div class="anchor">
				<h2 id="GS">概述</h2>
				<a href="#GS">#</a>
			</div>
			<p>
				选项卡切换组件，常用于平级区域大块内容的的收纳和展现。
			</p>
			<h2>代码示例</h2>
		<h1>Tabs</h1>
		<DemoBox
				title="基础用法"
				titleId="JCYF"
				desc="Tabs的基础用法，默认激活第一项。"
				onlineHref="http://jsrun.net/IeyKp/edit"
				:demoCode="JCYF_code"
			>
			<div slot="demo">
				<Tabs>
					<TabPane label="Tab1" id="1">Content of tab 1</TabPane>
					<TabPane label="Tab 2" id="2">Content of tab 2</TabPane>
					<TabPane label="Tab 3" id="3">Content of tab 3</TabPane>
				</Tabs>
			</div>
		</DemoBox>
		<DemoBox
				title="滚动"
				titleId="GD"
				desc="当Tabs超出屏幕时，可滚动nav。"
				onlineHref="http://jsrun.net/IeyKp/edit"
				:demoCode="GD_code"
			>
			<div slot="demo">
				<Tabs>
					<TabPane
						v-for="i in 40"
						:label="'Tab' + i"
						:id="'' + i"
						:key="i"
						>Content of tab {{ i }}</TabPane
					>
				</Tabs>
			</div>
		</DemoBox>
		<DemoBox
				title="标签页位置"
				titleId="BQYWZ"
				desc="根据tabPosition属性控制标签页位置。"
				onlineHref="http://jsrun.net/IeyKp/edit"
				:demoCode="BQYWZ_code"
			>
			<div slot="demo">
				<RadioGroup connected v-model="tabPosition">
					<Radio
						v-for="pos of ['top', 'bottom', 'left', 'right']"
						:label="pos"
						:key="pos"
					></Radio>
				</RadioGroup>
				<Tabs :tab-position="tabPosition">
					<TabPane
						v-for="i in 40"
						:label="'Tab' + i"
						:id="'' + i"
						:key="i"
						>Content of tab {{ i }}</TabPane
					>
				</Tabs>
			</div>
		</DemoBox>
		<DemoBox
				title="排序"
				titleId="PX"
				desc="给TabPane指定order，可让渲染出来的tabs进行排序。TabPane的order配合v-if使用时非常有用。"
				onlineHref="http://jsrun.net/IeyKp/edit"
				:demoCode="PX_code"
			>
			<div slot="demo">
				<Tabs>
					<TabPane
						v-for="i in 3"
						:label="'Tab' + i"
						:id="'' + i"
						:key="i"
						:order="3 - i"
						>Content of tab {{ i }}</TabPane
					>
				</Tabs>
			</div>
		</DemoBox>
		<DemoBox
				title="禁用"
				titleId="JY"
				desc="给TabPane指定disabled，可禁用某tab。"
				onlineHref="http://jsrun.net/IeyKp/edit"
				:demoCode="JY_code"
			>
			<div slot="demo">
				<Tabs>
					<TabPane
						v-for="i in 3"
						:label="'Tab' + i"
						:id="'' + i"
						:disabled="i === 2"
						:key="i"
						>Content of tab {{ i }}</TabPane
					>
				</Tabs>
			</div>
		</DemoBox>
		<DemoBox
				title="懒加载"
				titleId="LJZ"
				desc="给TabPane指定lazy, 是否懒加载。给TabPane指定lazy为true，在tabs渲染时，只有当activeId等于TabPane.id时才会被挂载，当切换至别的tab时，其内容会被销毁。给TabPane指定lazy为false，在tabs渲染时，预渲染其内容。"
				onlineHref="http://jsrun.net/IeyKp/edit"
				:demoCode="LJZ_code"
			>
			<div slot="demo">
				<Tabs>
					<TabPane label="static" id="1" :lazy="false">
						<StaticTestComponent />
					</TabPane>
					<TabPane label="static" id="2" :lazy="false">
						<StaticTestComponent />
					</TabPane>
					<TabPane label="lazy" id="3">
						<LazyTestComponent />
					</TabPane>
				</Tabs>
			</div>
		</DemoBox>
		<DemoBox
				title="卡片化"
				titleId="KPH"
				desc="卡片化Tabs，指定type属性为card, 默认为border-card。"
				onlineHref="http://jsrun.net/IeyKp/edit"
				:demoCode="KPH_code"
			>
			<div slot="demo">
				<Tabs type="card">
					<TabPane
						v-for="i in 3"
						:label="'Tab' + i"
						:id="'' + i"
						:key="i"
						>Content of tab {{ i }}</TabPane
					>
				</Tabs>
			</div>
		</DemoBox>
		<DemoBox
				title="可关闭"
				titleId="KGB"
				desc="通过设置属性 closable 可以关闭某一项。"
				onlineHref="http://jsrun.net/IeyKp/edit"
				:demoCode="KGB_code"
			>
			<div slot="demo">
				<Tabs type="card">
					<TabPane label="Tab1" id="1" closable
						>Content of tab 1</TabPane
					>
					<TabPane label="Tab 2" id="2" closable
						>Content of tab 2</TabPane
					>
					<TabPane label="Tab 3" id="3" closable
						>Content of tab 3</TabPane
					>
				</Tabs>
			</div>
		</DemoBox>
		<DemoBox
				title="可关闭和beforeClose钩子"
				titleId="KGBGZ"
				desc="beforeClose需要返回值。若返回值为Promise,需要返回已经resolved的Promise，并且在resolved时传入true或false来指定是否关闭。若返回值为boolean类型，则通过true | false来选择是否可关闭。"
				onlineHref="http://jsrun.net/IeyKp/edit"
				:demoCode="KGBGZ_code"
			>
			<div slot="demo">
				<p>返回boolean值</p>
				<Tabs type="card" :before-close="beforeClose">
					<TabPane label="Tab1" id="1" closable
						>Content of tab 1</TabPane
					>
					<TabPane label="Tab 2" id="2" closable
						>Content of tab 2</TabPane
					>
					<TabPane label="Tab 3" id="3" closable
						>Content of tab 3</TabPane
					>
				</Tabs>
				<p>返回Promise值</p>
				<Tabs type="card" :before-close="beforeCloseByPromise">
					<TabPane label="Tab1" id="1" closable
						>Content of tab 1</TabPane
					>
					<TabPane label="Tab 2" id="2" closable
						>Content of tab 2</TabPane
					>
					<TabPane label="Tab 3" id="3" closable
						>Content of tab 3</TabPane
					>
				</Tabs>
			</div>
		</DemoBox>
		<DemoBox
				title="beforeChange钩子"
				titleId="BCGZ"
				desc="beforeChange需要返回值。若返回值为Promise,需要返回已经resolved的Promise，并且在resolved时传入true或false来指定是否跳转。若返回值为boolean类型，则通过true | false来选择是否跳转。"
				onlineHref="http://jsrun.net/IeyKp/edit"
				:demoCode="BCGZ_code"
			>
			<div slot="demo">
				<h3>返回boolean值</h3>
				<Tabs type="card" :before-change="beforeChange">
					<TabPane label="Tab1" id="1" closable
						>Content of tab 1</TabPane
					>
					<TabPane label="Tab 2" id="2" closable
						>Content of tab 2</TabPane
					>
					<TabPane label="Tab 3" id="3" closable
						>Content of tab 3</TabPane
					>
					<TabPane label="Tab 4" id="4" closable disabled
						>Content of tab 4</TabPane
					>
				</Tabs>
				<h3>返回Promise值</h3>
				<Tabs type="card" :before-change="beforeChangeByPromise">
					<TabPane label="Tab1" id="1" closable
						>Content of tab 1</TabPane
					>
					<TabPane label="Tab 2" id="2" closable
						>Content of tab 2</TabPane
					>
					<TabPane label="Tab 4" id="4" closable disabled
						>Content of tab 4</TabPane
					>
				</Tabs>
			</div>
		</DemoBox>
		<DemoBox
				title="用slot添加按钮"
				titleId="TJAN"
				desc="使用slot: extra，添加按钮。"
				onlineHref="http://jsrun.net/IeyKp/edit"
				:demoCode="TJAN_code"
			>
			<div slot="demo">
				<Tabs>
					<TabPane
						v-for="i in 10"
						:label="'Tab' + i"
						:id="'' + i"
						:key="i"
						>Content of tab {{ i }}</TabPane>
					<template v-slot:extra>
						<Button>Extra Button</Button>
					</template>
				</Tabs>
			</div>
		</DemoBox>
		<DemoBox
				title="用slot自定义label内容"
				titleId="ZDY"
				desc="给TabPane使用slot: label自定义label内容。"
				onlineHref="http://jsrun.net/IeyKp/edit"
				:demoCode="ZDY_code"
			>
			<div slot="demo">
				<Tabs>
					<TabPane id="1" :lazy="false">
						<template #label>
							<Icon iconname="chatboxes"></Icon
							>{{ slotLabel }}
						</template>
						<ul v-for="item of items" :key="item">
							<li>{{ item }}</li>
						</ul>
						<Button @click.native="appendItem">新增</Button>
					</TabPane>
					<TabPane label="static" id="2" :lazy="false">
						<StaticTestComponent />
					</TabPane>
				</Tabs>
			</div>
		</DemoBox>
		<div class="anchor">
			<h2 id="API">API</h2>
			<a href="#API">#</a>
		</div>
		<section class="demo-param">
			<h3 class="demo-param-header">
				Tabs props
			</h3>
			<Table class="demo-param-content" :columns="propsColumns" :data="tabsPropsData"></Table>
			<h3 class="demo-param-header">
				Tabs events
			</h3>
			<Table class="demo-param-content" :columns="eventsColumns" :data="tabsEventsData"></Table>
			<h3 class="demo-param-header">
				Tabs slot
			</h3>
			<Table class="demo-param-content" :columns="slotColumns" :data="tabsSlotData"></Table>
			<h3 class="demo-param-header">
				TabPane props
			</h3>
			<Table class="demo-param-content" :columns="propsColumns" :data="tabsPropsData"></Table>
			<h3 class="demo-param-header">
				TabPane slot
			</h3>
			<Table class="demo-param-content" :columns="slotColumns" :data="tabsSlotData"></Table>
		</section>
		<!-- <article class="article">
			<section
				class="component-introduction"
				v-for="introduction of componentIntroduction"
				:key="introduction.header"
			>
				<h2 class="component-introduction-header">
					{{ introduction.header }}
				</h2>
				<table class="component-introduction-content">
					<thead>
						<tr>
							<th
								v-for="header of introduction.content.headers"
								:key="header"
							>
								{{ header }}
							</th>
						</tr>
					</thead>
					<tbody>
						<tr
							v-for="props of introduction.content.data"
							:key="props.props"
						>
							<td>{{ props.props }}</td>
							<td>{{ props.introduction }}</td>
							<td>{{ props.type }}</td>
							<td>{{ props.default }}</td>
						</tr>
					</tbody>
				</table>
			</section>
		</article>
		<article class="article">
			<section class="demo">
				<h2 class="demo-header">默认使用</h2>
				<div class="demo-content">
					<Tabs>
						<TabPane label="Tab1" id="1">Content of tab 1</TabPane>
						<TabPane label="Tab 2" id="2">Content of tab 2</TabPane>
						<TabPane label="Tab 3" id="3">Content of tab 3</TabPane>
					</Tabs>
				</div>
			</section>
			<section class="demo">
				<h2 class="demo-header">当tabs超出屏幕时，可滚动nav</h2>
				<div class="demo-content">
					<Tabs>
						<TabPane
							v-for="i in 40"
							:label="'Tab' + i"
							:id="'' + i"
							:key="i"
							>Content of tab {{ i }}</TabPane
						>
					</Tabs>
				</div>
			</section>
			<section class="demo">
				<h2 class="demo-header">tabPosition</h2>
				<div class="demo-content">
					<RadioGroup connected v-model="tabPosition">
						<Radio
							v-for="pos of ['top', 'bottom', 'left', 'right']"
							:label="pos"
							:key="pos"
						></Radio>
					</RadioGroup>
				</div>
				<div class="demo-content" :style="{ height: '300px' }">
					<Tabs :tab-position="tabPosition">
						<TabPane
							v-for="i in 40"
							:label="'Tab' + i"
							:id="'' + i"
							:key="i"
							>Content of tab {{ i }}</TabPane
						>
					</Tabs>
				</div>
			</section>
			<section class="demo">
				<h2 class="demo-header">
					给TabPane指定order，可让渲染出来的tabs进行排序
				</h2>
				<div class="demo-content">
					TabPane的order配合v-if使用时非常有用
				</div>
				<div class="demo-content" :style="{ height: '300px' }">
					<Tabs>
						<TabPane
							v-for="i in 3"
							:label="'Tab' + i"
							:id="'' + i"
							:key="i"
							:order="3 - i"
							>Content of tab {{ i }}</TabPane
						>
					</Tabs>
				</div>
			</section>
			<section class="demo">
				<h2 class="demo-header">
					给TabPane指定disabled，禁用某tab
				</h2>
				<div class="demo-content">
					<Tabs>
						<TabPane
							v-for="i in 3"
							:label="'Tab' + i"
							:id="'' + i"
							:disabled="i === 2"
							:key="i"
							>Content of tab {{ i }}</TabPane
						>
					</Tabs>
				</div>
			</section>
			<section class="demo">
				<h2 class="demo-header">
					给TabPane指定lazy, 是否懒加载
				</h2>
				<div class="demo-content">
					<p>
						给TabPane指定lazy = true，在tabs渲染时，只有当activeId
						===
						TabPane.id时才会被挂载，当切换至别的tab时，其内容会被销毁
					</p>
					<p>
						给TabPane指定lazy = false，在tabs渲染时，预渲染其内容
					</p>
				</div>
				<div class="demo-content">
					<Tabs>
						<TabPane label="static" id="1" :lazy="false">
							<StaticTestComponent />
						</TabPane>
						<TabPane label="static" id="2" :lazy="false">
							<StaticTestComponent />
						</TabPane>
						<TabPane label="lazy" id="3">
							<LazyTestComponent />
						</TabPane>
					</Tabs>
				</div>
			</section>
			<section class="demo">
				<h2 class="demo-header">
					卡片化Tabs，指定Tabs的type = card, 默认为border-card
				</h2>
				<div class="demo-content">
					<RadioGroup connected v-model="cardTabPosition">
						<Radio
							v-for="pos of ['top', 'bottom', 'left', 'right']"
							:label="pos"
							:key="pos"
						></Radio>
					</RadioGroup>
				</div>
				<div class="demo-content">
					<Tabs type="card" :tab-position="cardTabPosition">
						<TabPane
							v-for="i in 3"
							:label="'Tab' + i"
							:id="'' + i"
							:key="i"
							>Content of tab {{ i }}</TabPane
						>
					</Tabs>
				</div>
				<div class="demo-content" :style="{ height: '300px' }">
					<Tabs type="card" :tab-position="cardTabPosition">
						<TabPane
							v-for="i in 40"
							:label="'Tab' + i"
							:id="'' + i"
							:key="i"
							>Content of tab {{ i }}</TabPane
						>
					</Tabs>
				</div>
			</section>
			<section class="demo">
				<h2 class="demo-header">
					可关闭的TabPane
				</h2>
				<div class="demo-content">
					<Tabs type="card">
						<TabPane label="Tab1" id="1" closable
							>Content of tab 1</TabPane
						>
						<TabPane label="Tab 2" id="2" closable
							>Content of tab 2</TabPane
						>
						<TabPane label="Tab 3" id="3" closable
							>Content of tab 3</TabPane
						>
					</Tabs>
				</div>
			</section>
			<section class="demo">
				<h2 class="demo-header">
					可关闭的TabPane + Tabs的beforeClose钩子
				</h2>
				<div class="demo-content">
					<p>beforeClose需要返回值</p>
					<p>
						若返回值为Promise,
						需要返回已经resolved的Promise，并且在resolved时传入true或false来指定是否关闭
					</p>
					<p>
						若返回值为boolean类型，则通过true |
						false来选择是否可关闭
					</p>
				</div>
				<div class="demo-content">
					<h3>返回boolean值</h3>
					<Tabs type="card" :before-close="beforeClose">
						<TabPane label="Tab1" id="1" closable
							>Content of tab 1</TabPane
						>
						<TabPane label="Tab 2" id="2" closable
							>Content of tab 2</TabPane
						>
						<TabPane label="Tab 3" id="3" closable
							>Content of tab 3</TabPane
						>
					</Tabs>
				</div>
				<div class="demo-content">
					<h3>返回Promise值</h3>
					<Tabs type="card" :before-close="beforeCloseByPromise">
						<TabPane label="Tab1" id="1" closable
							>Content of tab 1</TabPane
						>
						<TabPane label="Tab 2" id="2" closable
							>Content of tab 2</TabPane
						>
						<TabPane label="Tab 3" id="3" closable
							>Content of tab 3</TabPane
						>
					</Tabs>
				</div>
			</section>
			<section class="demo">
				<h2 class="demo-header">
					Tabs的beforeChange钩子
				</h2>
				<div class="demo-content">
					<p>beforeChange需要返回值</p>
					<p>
						若返回值为Promise,
						需要返回已经resolved的Promise，并且在resolved时传入true或false来指定是否跳转
					</p>
					<p>
						若返回值为boolean类型，则通过true | false来选择是否跳转
					</p>
				</div>
				<div class="demo-content">
					<h3>返回boolean值</h3>
					<Tabs type="card" :before-change="beforeChange">
						<TabPane label="Tab1" id="1" closable
							>Content of tab 1</TabPane
						>
						<TabPane label="Tab 2" id="2" closable
							>Content of tab 2</TabPane
						>
						<TabPane label="Tab 3" id="3" closable
							>Content of tab 3</TabPane
						>
						<TabPane label="Tab 4" id="4" closable disabled
							>Content of tab 4</TabPane
						>
					</Tabs>
				</div>
				<div class="demo-content">
					<h3>返回Promise值</h3>
					<Tabs type="card" :before-change="beforeChangeByPromise">
						<TabPane label="Tab1" id="1" closable
							>Content of tab 1</TabPane
						>
						<TabPane label="Tab 2" id="2" closable
							>Content of tab 2</TabPane
						>
						<TabPane label="Tab 4" id="4" closable disabled
							>Content of tab 4</TabPane
						>
					</Tabs>
				</div>
			</section>
			<section class="demo">
				<h2 class="demo-header">使用slot: extra，添加按钮</h2>
				<div class="demo-content">
					<RadioGroup connected v-model="extraTabPosition">
						<Radio
							v-for="pos of ['top', 'bottom', 'left', 'right']"
							:label="pos"
							:key="pos"
						></Radio>
					</RadioGroup>
				</div>
				<div class="demo-content" :style="{ height: '300px' }">
					<Tabs :tab-position="extraTabPosition">
						<TabPane
							v-for="i in 10"
							:label="'Tab' + i"
							:id="'' + i"
							:key="i"
							>Content of tab {{ i }}</TabPane
						>
						<template v-slot:extra
							><Button>Extra Button</Button></template
						>
					</Tabs>
				</div>
				<div class="demo-content" :style="{ height: '300px' }">
					<Tabs :tab-position="extraTabPosition" type="card">
						<TabPane
							v-for="i in 10"
							:label="'Tab' + i"
							:id="'' + i"
							:key="i"
							>Content of tab {{ i }}</TabPane
						>
						<template v-slot:extra
							><Button>Extra Button</Button></template
						>
					</Tabs>
				</div>
			</section>
			<section class="demo">
				<h2 class="demo-header">
					给TabPane使用slot: label自定义label内容
				</h2>
				<div class="demo-content">
					<Tabs>
						<TabPane id="1" :lazy="false">
							<template #label>
								<Icon iconname="chatboxes"></Icon
								>{{ slotLabel }}
							</template>
							<ul v-for="item of items" :key="item">
								<li>{{ item }}</li>
							</ul>
							<Button @click.native="appendItem">新增</Button>
						</TabPane>
						<TabPane label="static" id="2" :lazy="false">
							<StaticTestComponent />
						</TabPane>
					</Tabs>
				</div>
			</section>
		</article> -->
	</article>
</template>

<style lang="scss" scoped>
// @import '../../../core/styles/colors';
// @import '../../../core/styles/mixins/get-color';
.container {
	min-width: 600px;
	margin: 0 auto;
}

.article {
	margin: 20px 0;
}

.component-introduction {
	margin: 20px 0;
	.component-introduction-header {
		margin: 20px 0;
	}
	.component-introduction-content {
		border-collapse: collapse;
		border-spacing: 0;
		margin: 20px 0;
		width: 100%;
		border: 1px solid #dddddd;
		thead {
			// @include get-color-border(background-color);
		}
		th,
		td {
			border: 1px solid #dddddd;
			vertical-align: middle;
			height: 36px;
			text-align: center;
		}
	}
}

.demo {
	box-sizing: border-box;
	margin: 20px 0;
	border: 1px solid #f5f5f5;
	padding: 20px 30px;
	box-shadow: 0 0 5px 0 #7f7f7f;
	.demo-header {
		margin: 10px 0;
	}
	.demo-props {
		margin: 10px 0;
	}
	.demo-content {
		margin: 10px 0;
	}
}
</style>

<script>
import DemoBox from '../../components/demo-box'
import Table from '../../components/table'
export default {
	name: 'TabsDemo',
	components: {
		DemoBox,
		Table,
		StaticTestComponent: {
			data() {
				return {
					timeout: 0
				}
			},
			mounted() {
				setInterval(() => {
					this.timeout++
				}, 1000)
				console.log('static component is mounted!')
			},
			destroyed() {
				console.log('static component is destroyed!')
			},
			render(h) {
				return h(
					'p',
					"I'm static component! " + 'timeout: ' + this.timeout
				)
			}
		},
		LazyTestComponent: {
			mounted() {
				console.log('lazy component is mounted!')
			},
			destroyed() {
				console.log('lazy component is destroyed!')
			},
			render(h) {
				return h('p', "I'm lazy component!")
			}
		}
	},
	created() {
		let count = 1
		setInterval(() => {
			this.slotLabel = 'label' + count++
		}, 1000)
	},
	data() {
		return {
			anchorNavList: [
				{
					href: '#JCYF',
					title: '基础用法'
				},
				{
					href: '#GD',
					title: '滚动'
				},
				{
					href: '#BQYWZ',
					title: '标签页位置'
				},
				{
					href: '#PX',
					title: '排序'
				},
				{
					href: '#JY',
					title: '禁用'
				},
				{
					href: '#BQYWZ',
					title: '标签页位置'
				},
				{
					href: '#LJZ',
					title: '懒加载'
				},
				{
					href: '#KPH',
					title: '卡片化'
				},
				{
					href: '#KGB',
					title: '可关闭'
				},
				{
					href: '#KGBGZ',
					title: '可关闭钩子'
				},
				{
					href: '#BCGZ',
					title: 'befareChange钩子'
				},
				
				{
					href: '#TJAN',
					title: '用slot添加按钮'
				},
				
				{
					href: '#ZDY',
					title: '用slot自定义label内容'
				},
				{
					href: '#API',
					title: 'API'
				}
			],
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
			slotColumns: [
				{
					title: 'slot',
					key: 'slot'
				},
				{
					title: '说明',
					key: 'expain'
				}
			],
			tabsPropsData: [
				{
					property: 'activeId',
					explain: 'v-model对应的prop，激活的tab对应的id',
					type: 'String',
					default: '第一个tabs的id'
				},
				{
					property: 'type',
					explain: 'tabs类型, 可选border-card | card',
					type: 'String',
					default: 'border-card'
				},
				{
					property: 'tabPosition',
					explain: 'tab展示的位置',
					type: 'String',
					default: 'top'
				},
				{
					property: 'beforeClose',
					explain: 'tab关闭时的钩子，可阻止关闭行为',
					type: 'Function',
					default: 'undefined'
				},
				{
					property: 'beforeChange',
					explain: 'tab切换时的钩子，可阻止切换tab的行为',
					type: 'Function',
					default: 'undefined'
				},
				{
					property: 'preventDefaultRemove',
					explain: '可阻止默认的删除行为',
					type: 'Boolean',
					default: 'false'
				}
			],
			tabsEventsData: [
				{
					eventsName: 'on-change',
					explain: '当tabs切换时触发, v-model对应的事件。',
					returnValue: 'id值，当前tabs的id值'
				},
				{
					eventsName: 'on-add',
					explain: '当添加tab时触发。',
					returnValue: '添加pane的id值'
				},
				{
					eventsName: 'on-remove',
					explain: '当删除tab时触发。',
					returnValue: '删除pane的id值'
				},
				{
					eventsName: 'on-prev',
					explain: '当tabs的nav可滚动时，点击上一页时触发。',
					returnValue: '无'
				},
				{
					eventsName: 'on-next',
					explain: '当tabs的nav可滚动时，点击下一页时触发。',
					returnValue: '无'
				},
			],
			tabsSlotData: [
				{
					slot: 'default',
					explain: 'TabPane的占位'
				},
				{
					slot: 'extra',
					explain: '额外的内容'
				}
			],
			tabPanePropsData: [
				{
					property: 'id',
					explain: 'tab的id',
					type: 'String',
					default: '无'
				},
				{
					property: 'label',
					explain: 'tab的label',
					type: 'String',
					default: "''"
				},
				{
					property: 'order',
					explain: 'tab展示顺序',
					type: 'number',
					default: '0'
				},
				{
					property: 'disabled',
					explain: '是否禁用某tab',
					type: 'boolean',
					default: 'false'
				},
				{
					property: 'lazy',
					explain: '是否懒加载',
					type: 'boolean',
					default: 'true'
				},
				{
					property: 'closable',
					explain: '是否可关闭',
					type: 'boolean',
					default: 'false'
				}
			],
			tabPaneSlotData: [
				{
					props: 'label',
					explain: '自定义label内容'
				},
				{
					props: 'default',
					explain: 'tab对应的内容'
				}
			],
			JCYF_code: 
`<template>
    <Tabs>
        <TabPane label="Tab1" id="1">Content of tab 1</TabPane>
        <TabPane label="Tab 2" id="2">Content of tab 2</TabPane>
        <TabPane label="Tab 3" id="3">Content of tab 3</TabPane>
    </Tabs>
</template>
<script>
    export default {
	
    }
<\/script>`,
			GD_code: 
`<template>
    <Tabs>
        <TabPane
            v-for="i in 40"
            :label="'Tab' + i"
            :id="'' + i"
            :key="i"
            >Content of tab {{ i }}</TabPane
        >
    </Tabs>	
</template>
<script>
	export default {

	}
<\/script>`,
			BQYWZ_code: 
`<template>
	<div>
		<RadioGroup connected v-model="tabPosition">
			<Radio
				v-for="pos of ['top', 'bottom', 'left', 'right']"
				:label="pos"
				:key="pos"
			></Radio>
		</RadioGroup>
		<Tabs :tab-position="tabPosition">
			<TabPane
				v-for="i in 40"
				:label="'Tab' + i"
				:id="'' + i"
				:key="i"
				>Content of tab {{ i }}</TabPane
			>
		</Tabs>
	</div>
</template>
<script>
export default {

}	
<\/script>`,
			PX_code:
`<template>
	<Tabs>
		<TabPane
			v-for="i in 3"
			:label="'Tab' + i"
			:id="'' + i"
			:key="i"
			:order="3 - i"
			>Content of tab {{ i }}</TabPane
		>
	</Tabs>	
</template>
<script>
	export default {

	}	
<\/script>`,
			JY_code: 
`<template>
<Tabs>
	<TabPane
		v-for="i in 3"
		:label="'Tab' + i"
		:id="'' + i"
		:disabled="i === 2"
		:key="i"
		>Content of tab {{ i }}</TabPane
	>
</Tabs>	
</template>
<script>
	export default {

	}	
<\/script>`,
			LJZ_code:
`<template>
	<Tabs>
		<TabPane label="static" id="1" :lazy="false">
			<StaticTestComponent />
		</TabPane>
		<TabPane label="static" id="2" :lazy="false">
			<StaticTestComponent />
		</TabPane>
		<TabPane label="lazy" id="3">
			<LazyTestComponent />
		</TabPane>
	</Tabs>	
</template>
<script>
	export default {

	}	
<\/script>`,
			KPH_code: 
`<template>
<Tabs type="card">
	<TabPane
		v-for="i in 3"
		:label="'Tab' + i"
		:id="'' + i"
		:key="i"
		>Content of tab {{ i }}</TabPane
	>
</Tabs>
</template>
<script>
	export default {

	}	
<\/script>`,
			KGB_code:
`<template>
<Tabs type="card">
	<TabPane label="Tab1" id="1" closable
		>Content of tab 1</TabPane
	>
	<TabPane label="Tab 2" id="2" closable
		>Content of tab 2</TabPane
	>
	<TabPane label="Tab 3" id="3" closable
		>Content of tab 3</TabPane
	>
</Tabs>	
</template>
<script>
	export default {

	}	
<\/script>`,
			KGBGZ_code: 
`<template>
	<div slot="demo">
		<p>返回boolean值</p>
		<Tabs type="card" :before-close="beforeClose">
			<TabPane label="Tab1" id="1" closable
				>Content of tab 1</TabPane
			>
			<TabPane label="Tab 2" id="2" closable
				>Content of tab 2</TabPane
			>
			<TabPane label="Tab 3" id="3" closable
				>Content of tab 3</TabPane
			>
		</Tabs>
		<h3>返回Promise值</h3>
		<Tabs type="card" :before-close="beforeCloseByPromise">
			<TabPane label="Tab1" id="1" closable
				>Content of tab 1</TabPane
			>
			<TabPane label="Tab 2" id="2" closable
				>Content of tab 2</TabPane
			>
			<TabPane label="Tab 3" id="3" closable
				>Content of tab 3</TabPane
			>
		</Tabs>
	</div>	
</template>
<script>
	export default {
		methods: {
			beforeClose(id) {
				return window.confirm('是否要关闭Tab: ' + id)
			},
			beforeCloseByPromise(id) {
				return new Promise(resolve => {
					setTimeout(function() {
						resolve(window.confirm('是否要关闭Tab: ' + id))
					}, 3000)
				})
			},
		}
	}	
<\/script>`,
			BCGZ_code: 
`<template>
	<div>
		<h3>返回boolean值</h3>
		<Tabs type="card" :before-change="beforeChange">
			<TabPane label="Tab1" id="1" closable
				>Content of tab 1</TabPane
			>
			<TabPane label="Tab 2" id="2" closable
				>Content of tab 2</TabPane
			>
			<TabPane label="Tab 3" id="3" closable
				>Content of tab 3</TabPane
			>
			<TabPane label="Tab 4" id="4" closable disabled
				>Content of tab 4</TabPane
			>
		</Tabs>
		<h3>返回Promise值</h3>
		<Tabs type="card" :before-change="beforeChangeByPromise">
			<TabPane label="Tab1" id="1" closable
				>Content of tab 1</TabPane
			>
			<TabPane label="Tab 2" id="2" closable
				>Content of tab 2</TabPane
			>
			<TabPane label="Tab 4" id="4" closable disabled
				>Content of tab 4</TabPane
			>
		</Tabs>	
	</div>		
</template>
<script>
	export default {
		methods: {
			beforeChange(from, to) {
				return window.confirm(\`是否要从Tab: \${from} 跳转到 Tab: \${to}\`)
			},
			beforeChangeByPromise(from, to) {
				return new Promise(resolve => {
					setTimeout(function() {
						resolve(
							window.confirm(\`是否要从Tab: \${from} 跳转到 Tab: \${to}\`)
						)
					}, 3000)
				})
			},
		}
	}	
<\/script>`,
			TJAN_code: 
`<template>
	<Tabs>
		<TabPane
			v-for="i in 10"
			:label="'Tab' + i"
			:id="'' + i"
			:key="i"
			>Content of tab {{ i }}</TabPane
		>
		<template v-slot:extra
			><Button>Extra Button</Button></template
		>
	</Tabs>	
</template>
<script>
	export default {

	}
<\/script>`,
			ZDY_code: 
`<template>
	<Tabs>
		<TabPane id="1" :lazy="false">
			<template #label>
				<Icon iconname="chatboxes"></Icon
				>{{ slotLabel }}
			</template>
			<ul v-for="item of items" :key="item">
				<li>{{ item }}</li>
			</ul>
			<Button @click.native="appendItem">新增</Button>
		</TabPane>
		<TabPane label="static" id="2" :lazy="false">
			<StaticTestComponent />
		</TabPane>
	</Tabs>	
</template>
<script>
	export default {
		
	}
<\/script>`,
			componentIntroduction: [
				{
					header: 'Tabs属性',
					content: {
						headers: ['props', '说明', '类型', '默认值'],
						data: [
							{
								props: 'activeId',
								introduction:
									'v-model对应的prop，激活的tab对应的id',
								type: 'string',
								default: '第一个tabs的id'
							},
							{
								props: 'type',
								introduction:
									'tabs类型, 可选border-card | card',
								type: 'string',
								default: 'border-card'
							},
							{
								props: 'tabPosition',
								introduction: 'tab展示的位置',
								type: 'string',
								default: 'top'
							},
							{
								props: 'beforeClose',
								introduction: 'tab关闭时的钩子，可阻止关闭行为',
								type: 'Function',
								default: 'undefined'
							},
							{
								props: 'beforeChange',
								introduction:
									'tab切换时的钩子，可阻止切换tab的行为',
								type: 'Function',
								default: 'undefined'
							},
							{
								props: 'preventDefaultRemove',
								introduction: '可阻止默认的删除行为',
								type: 'boolean',
								default: 'false'
							}
						]
					}
				},
				{
					header: 'Tabs events',
					content: {
						headers: ['事件名', '说明', '回调参数'],
						data: [
							{
								props: 'on-change',
								introduction:
									'当tabs切换时触发, v-model对应的事件',
								type: 'id值，当前tabs的id值'
							},
							{
								props: 'on-add',
								introduction: '当添加tab时触发',
								type: '添加pane的id值'
							},
							{
								props: 'on-remove',
								introduction: '当删除tab时触发',
								type: '删除pane的id值'
							},
							{
								props: 'on-prev',
								introduction:
									'当tabs的nav可滚动时，点击上一页时触发',
								type: '无'
							},
							{
								props: 'on-next',
								introduction:
									'当tabs的nav可滚动时，点击下一页时触发',
								type: '无'
							}
						]
					}
				},
				{
					header: 'Tabs slots',
					content: {
						headers: ['slot名', '说明'],
						data: [
							{
								props: 'default',
								introduction: 'TabPane的占位'
							},
							{
								props: 'extra',
								introduction: '额外的内容'
							}
						]
					}
				},
				{
					header: 'TabPane props',
					content: {
						headers: ['props', '说明', '类型', '默认值'],
						data: [
							{
								props: 'id',
								introduction: 'tab的id',
								type: 'string',
								default: '无'
							},
							{
								props: 'label',
								introduction: 'tab的label',
								type: 'string',
								default: "''"
							},
							{
								props: 'order',
								introduction: 'tab展示顺序',
								type: 'number',
								default: '0'
							},
							{
								props: 'disabled',
								introduction: '是否禁用某tab',
								type: 'boolean',
								default: 'false'
							},
							{
								props: 'lazy',
								introduction: '是否懒加载',
								type: 'boolean',
								default: 'true'
							},
							{
								props: 'closable',
								introduction: '是否可关闭',
								type: 'boolean',
								default: 'false'
							}
						]
					}
				},
				{
					header: 'TabPane slots',
					content: {
						headers: ['slot名', '说明'],
						data: [
							{
								props: 'label',
								introduction: '自定义label内容'
							},
							{
								props: 'default',
								introduction: 'tab对应的内容'
							}
						]
					}
				}
			],
			bindingLabel: 'bindingLabel',
			activeKey: '1',
			tabPosition: 'top',
			cardTabPosition: 'top',
			extraTabPosition: 'top',
			slotLabel: 'label',
			items: []
		}
	},
	mounted() {
		this.$emit('on-setAnchorNav', this.anchorNavList);
	},
	methods: {
		beforeClose(id) {
			return window.confirm('是否要关闭Tab: ' + id)
		},
		beforeCloseByPromise(id) {
			return new Promise(resolve => {
				setTimeout(function() {
					resolve(window.confirm('是否要关闭Tab: ' + id))
				}, 3000)
			})
		},
		beforeChange(from, to) {
			return window.confirm(`是否要从Tab: ${from} 跳转到 Tab: ${to}`)
		},
		beforeChangeByPromise(from, to) {
			return new Promise(resolve => {
				setTimeout(function() {
					resolve(
						window.confirm(`是否要从Tab: ${from} 跳转到 Tab: ${to}`)
					)
				}, 3000)
			})
		},
		appendItem() {
			this.items.push('item' + this.items.length)
		}
	}
}
</script>
