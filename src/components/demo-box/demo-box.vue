<template>
	<div class="example" :id="titleId" ref="example" style="height:auto;">
		<Row>
			<Col span="12" class="example-col">
				<div class="example-demo" ref="demo">
					<div class="anchor example-title">
						<h3>{{ title }}</h3>
						<a :href="'#' + titleId">#</a>
					</div>
					<div class="example-popper-box">
						<a :href="onlineHref" target="_blank">
							<ToolTip
								class="example-link-tip"
								title="在线演示"
								placement="bottom"
							>
								<Icon iconname="code-working" />
							</ToolTip>
						</a>
					</div>
					<div class="example-desc">{{ desc }}</div>
					<div class="example-case">
						<slot name="demo"></slot>
					</div>
				</div>
			</Col>
			<Col span="12" class="example-col">
				<div class="example-code" ref="code">
					<div v-highlight>
						<pre
							class="bg"
						><code class="xml" v-text="demoCode"></code></pre>
					</div>
				</div>
			</Col>
		</Row>
		<div class="show-all-code" v-if="showIconTip" @click="showAllCode">
			<Icon iconname="arrow-down" />
		</div>
	</div>
</template>

<script>
const prefix = 'zov-demo-box'
export default {
	name: prefix,
	props: {
		title: String,
		titleId: String,
		desc: String,
		onlineHref: String,
		demoCode: String
	},
	data() {
		return {
			showIconTip: true,
			demoHeight: 'auto',
			codeHeight: 'auto'
		}
	},
	mounted() {
		this.demoHeight = this.$refs.demo.offsetHeight
		this.codeHeight = this.$refs.code.offsetHeight
		this.$refs.example.style.height = `${parseInt(this.demoHeight)}px`
		this.showIconTip = parseInt(this.demoHeight) - parseInt(this.codeHeight) < 5
	},
	methods: {
		showAllCode() {
			this.$refs.example.style.height = `${parseInt(this.codeHeight)}px`
			this.showIconTip = false
		}
	}
}
</script>

<style lang="scss" scoped>
.example {
	position: relative;
	border: 1px solid #ddd;
	border-radius: 5px;
	margin-bottom: 20px;
	padding-bottom: 14px;
	overflow: hidden;
	.example-col {
		// position: absolute;
		// top: 0;
		// bottom: 0;
		.example-demo {
			padding: 15px 15px 10px 15px;

			.example-title {
				font-weight: bold;
				margin-bottom: 10px;
				// font-size: 12px;
				a {
					font-size: 16px;
				}
			}
			.example-popper-box {
				float: right;
				.example-link-tip {
					font-size: 20px;
					.zov-tooltip-body {
						width: auto;
						.zov-tooltip-title {
							margin: 0;
						}
					}
				}
			}
			.example-desc {
				padding: 5px 0 10px 10px;
			}
			.example-case {
				border-top: 1px solid #ddd;
				padding: 17px 0;
			}
		}
		.example-code {
			border-left: 1px solid #ddd;
			// padding-bottom: 14px;
			height: 100%;
		}
	}

	.show-all-code {
		position: absolute;
		bottom: 0;
		width: 100%;
		text-align: center;
		background: linear-gradient(
			rgba(255, 255, 255, 0.3),
			rgba(255, 255, 255, 1)
		);
	}
}
</style>
