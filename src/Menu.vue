<template>
	<Layout class="org-layout">
		<Header class="org-layout-header">
			<a href="/" class="org-layout-header-logo">
				<img src="./assets/logo.png" />
			</a>
			<div class="org-layout-header-title">Zov Design</div>
			<Select
				class="search-input"
				placeholder="搜索组件"
				:data="selectData"
				v-model="selectValue"
				prefix="search"
				width="300"
				value-name="id"
				label-name="text"
				:filterable="true"
				@on-change="handleSelect"
			>
				<div slot-scope="{ props }">
					{{ props.item.text }}
				</div>
			</Select>
			<div class="org-layout-header-nav">
				<Menu
					class="nav-box"
					mode="horizontal"
					style="width: auto;"
					@on-change="handleNavChange"
				>
					<MenuOption name="0">首页</MenuOption>
					<MenuOption name="1">组件</MenuOption>
					<MenuOption name="2">生态</MenuOption>
				</Menu>
				<Switcher
					class="org-layout-header-theme-btn"
					v-model="isdark"
					size="small"
				>
					<span slot="open">
						<Icon iconname="moon"></Icon>
					</span>
					<span slot="close">
						<Icon iconname="sunny"></Icon>
					</span>
				</Switcher>
			</div>
		</Header>
		<Layout class="org-layout-main">
			<Sider v-model="collapsed" breakpoint="md" width="300">
				<Menu
					:thumbnail="collapsed"
					:active-name="menuActiveName"
					:accordion="true"
				>
					<MenuOption
						v-for="(item, index) in $router.options.routes[1]
							.children"
						:key="index"
						:name="item.path"
						@click="$router.push({ path: item.path })"
					>
						<Icon
							:iconname="item.routerOptions.iconname"
							thumbnail-icon
						/>
						{{ item.routerOptions.disc }}
					</MenuOption>
					<MenuSub name="components">
						<template #title>
							组件
						</template>
						<MenuGroup v-for="(i, index) in siderList" :key="index">
							<span slot="title">
								{{ i.groupName }}
							</span>
							<MenuOption
								v-for="(j, index) in i.groupList"
								:key="index"
								:name="j.disc"
								@click="$router.push({ path: j.path })"
							>
								{{ j.disc }}
							</MenuOption>
						</MenuGroup>
					</MenuSub>
				</Menu>
			</Sider>
			<Content>
				<Row>
					<Col span="20">
						<router-view @on-setAnchorNav="setAnchorNav"/>
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
			</Content>
			<BackTop :bottom="90"></BackTop>
		</Layout>
		<Footer class="org-layout-footer"> </Footer>
	</Layout>
</template>
<script>
export default {
	
	data() {
		return {
			collapsed: false,
			isdark: false,
			menuActiveName: this.$route.path,
			selectValue: '',
			anchorNavList: [],
			// selectData: this.$router.options.routes[2].map(i=>i),
			siderList: [
				{
					groupName: '基础',
					groupList: [
						{
							disc: 'Button 按钮',
							path: 'button-doc'
						},
						{
							disc: 'Icon 图标',
							path: 'icon-doc'
						}
					]
				},
				{
					groupName: '布局',
					groupList: [
						{
							disc: 'Grid 栅格',
							path: 'grid-doc'
						},
						{
							disc: 'Layout 布局',
							path: 'layout-doc'
						},
						{
							disc: 'Divider 分割线',
							path: 'divider-doc'
						}
					]
				},
				{
					groupName: '导航',
					groupList: [
						{
							disc: 'Menu 导航菜单',
							path: 'menu-doc'
						},
						{
							disc: 'Tabs 标签页',
							path: 'tabs-doc'
						},
						{
							disc: 'Anchor 锚点',
							path: 'anchor-doc'
						},
						{
							disc: 'Badge 徽标数',
							path: 'badge-doc'
						},
						{
							disc: 'Breadcrumb 面包屑',
							path: 'breadcrumb-doc'
						},
						{
							disc: 'Drop 下拉菜单',
							path: 'drop-doc'
						},
						{
							disc: 'LoadingBar 加载进度条',
							path: 'loadingbar-doc'
						},
						{
							disc: 'Steps 步骤条',
							path: 'steps-doc'
						},
						{
							disc: 'Page 分页',
							path: 'Page-doc'
						}
					]
				},
				{
					groupName: '表单',
					groupList: [
						{
							disc: 'Input 输入框',
							path: 'input-doc'
						},
						{
							disc: 'Radio 单选框',
							path: 'radio-doc'
						},
						{
							disc: 'Cascader 级联选择',
							path: 'cascader-doc'
						},
						{
							disc: 'Select 选择器',
							path: 'select-doc'
						},
						{
							disc: 'Checkbox 多选框',
							path: 'checkbox-doc'
						},
						{
							disc: 'Switch 开关',
							path: 'switch-doc'
						},
						{
							disc: 'Slider 滑块',
							path: 'slider-doc'
						},
						{
							disc: 'DatePicker 日期选择器',
							path: 'datepicker-doc'
						},
						{
							disc: 'ColorPicker 颜色选择器',
							path: 'colorpicker-doc'
						},
						{
							disc: 'TimePicker 时间选择器',
							path: 'timepicker-doc'
						},
						{
							disc: 'Upload 上传',
							path: 'upload-doc'
						}
					]
				},
				{
					groupName: '视图',
					groupList: [
						{
							disc: 'Avatar 头像',
							path: 'avatar-doc'
						},
						{
							disc: 'Message 全局提示',
							path: 'message-doc'
						},
						{
							disc: 'Notice 通知提醒',
							path: 'notice-doc'
						},
						{
							disc: 'Modal 对话框',
							path: 'modal-doc'
						},
						{
							disc: 'Popper 气泡',
							path: 'popper-doc'
						},
						{
							disc: 'ToolTip 气泡提示',
							path: 'tooltip-doc'
						},
						{
							disc: 'Progress 进度条',
							path: 'progress-doc'
						},
						{
							disc: 'Tag 标签',
							path: 'tag-doc'
						},
						{
							disc: 'Timeline 时间轴',
							path: 'Timeline-doc'
						}
					]
				},
				// {
				// 	groupName: '图表',
				// 	groupList: []
				// },
				{
					groupName: '其它',
					groupList: [
						{
							disc: 'Affix 图钉',
							path: 'affix-doc'
						},
						{
							disc: 'BackTop 返回顶部',
							path: 'backtop-doc'
						},
						{
							disc: 'Spin 加载中',
							path: 'spin-doc'
						},
						{
							disc: 'LongList 无限滚动',
							path: 'longlist-doc'
						},
						{
							disc: 'BigDataList 长列表',
							path: 'bigdatalist-doc'
						}
					]
				}
			]
		}
	},
	computed: {
		selectData() {
			let arr = []
			// console.log('rout',this.$router.options.routes[2]);
			this.$router.options.routes[2].children.map((i, j) =>
				arr.push({
					id: j,
					text: i.routerOptions.discEn
				})
			)
			console.log('arr', arr)
			return arr
		}
	},
	watch: {
		isdark(val) {
			val
				? this.$Dark.open(() => {
						localStorage.setItem('zov-theme', 'dark')
				  })
				: this.$Dark.close(() => {
						localStorage.setItem('zov-theme', '')
				  })
		}
	},
	methods: {
		setAnchorNav(list) {
			console.log(list, 'list');
			this.anchorNavList = list;
		},
		handleSelect(e) {
			this.$router.push(e.text.toLowerCase() + '-doc')
			this.menuActiveName = this.$route.path
		},
		handleNavChange(e) {
			console.log('eee', e)
			switch (e) {
				case '0':
					this.$router.push('/')
					break
				case '1':
					this.$router.push('/install')
					break
				default:
			}
		}
	},
	mounted() {
		this.isdark = localStorage.getItem('zov-theme') === 'dark'
		this.menuActiveName = this.$route.path
	}
}
</script>
<style lang="scss">
$pre: org;
.#{$pre} {
	&-layout {
		&-sider {
			// position: relative;
			&-trigger {
				// position: absolute;
			}
		}
	}
}
</style>
