<title>配合menu组件布局</title>

<template>
	<div class="demo">
		<Layout class="container-demo">
			<Header>
				<Menu high-color mode="horizontal">
					<MenuOption name="1" />
					<MenuOption name="2" />
					<MenuSub name="3">
						<MenuGroup>
							<MenuOption name="3-1-1" />
							<MenuOption name="3-1-2" />
						</MenuGroup>
						<MenuGroup>
							<MenuOption name="3-2-1" />
							<MenuOption name="3-2-2" />
						</MenuGroup>
					</MenuSub>
				</Menu>
			</Header>
			<Layout>
				<Sider
					v-model="collapsed"
					breakpoint="sm"
					@on-collapse="collapse"
				>
					<Menu :thumbnail="collapsed">
						<MenuOption name="1" />
						<MenuOption name="2" />
						<MenuSub name="3">
							<MenuGroup>
								<MenuOption name="3-1-1" />
								<MenuOption name="3-1-2" />
							</MenuGroup>
							<MenuGroup>
								<MenuOption name="3-2-1" />
								<MenuOption name="3-2-2" />
							</MenuGroup>
						</MenuSub>
					</Menu>
				</Sider>
				<Content>
					<div class="sider-bar" @click="collapsed = !collapsed">
						<Icon
							:iconname="
								collapsed ? 'arrow-forward' : 'arrow-back'
							"
						/>
					</div>
					Content
				</Content>
			</Layout>
			<Footer>Footer</Footer>
		</Layout>
	</div>
</template>

<style lang="scss" scoped>
.demo {
	$color-primary: #2d8cf0;
	$layout-header-background: lighten($color-primary, 10%);
	$layout-content-background: lighten($color-primary, 25%);
	$layout-footer-background: $layout-header-background;
	$layout-sider-background: $color-primary;
	.zov-layout-header {
		background: $layout-header-background;
	}
	.zov-layout-content {
		background: $layout-content-background;
	}
	.zov-layout-sider {
		background: $layout-sider-background;
	}
	.zov-layout-footer {
		background: $layout-footer-background;
	}
}
.container {
	height: 400px;
	margin-top: 15px;
}
</style>

<script>
export default {
	data() {
		return {
			collapsed: false
		}
	},
	methods: {
		collapse(f) {
			console.log(f)
		}
	}
}
</script>
