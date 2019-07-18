<title>列排序</title>

<desc>
    可根据Col组件的pull、push属性，对列进行布局上的排序
</desc>

<template>
	<Row>
		<Col span="18" push="6">col-18 | push-6</Col>
		<Col span="6" pull="18">col-6 | pull-18</Col>
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
