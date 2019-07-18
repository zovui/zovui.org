<title>响应式布局</title>

<desc>
    在Col组件上设置xs、sm、md、lg，可在不同尺寸的屏幕上展现不同的宽度
</desc>

<template>
	<Row>
		<Col :xs="2" :sm="4" :md="6" :lg="8">Col--1</Col>
		<Col :xs="20" :sm="16" :md="12" :lg="8">Col--2</Col>
		<Col :xs="2" :sm="4" :md="6" :lg="8">Col--3</Col>
	</Row>
</template>

<style lang="scss" scoped>
.zov-col {
	padding: 30px 0;
	background: #2aa198;
	&:nth-of-type(2n) {
		background: #1cd779;
	}
}
</style>
