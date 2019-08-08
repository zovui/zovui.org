<title>左右偏移</title>

<desc>
    设置Col组件的offset属性，可使列偏移固定宽度
</desc>

<template>
    <article class="grid-demo">
        <Row>
            <Col span="8">col-8</Col>
            <Col span="8" offset="8">col-8 | offset-8</Col>
        </Row>
        <br />
        <Row>
            <Col span="6" offset="8">col-6 | offset-8</Col>
            <Col span="6" offset="4">col-6 | offset-4</Col>
        </Row>
        <br />
        <Row>
            <Col span="12" offset="8">col-12 | offset-8</Col>
        </Row>
    </article>
</template>

<style>
.grid-demo .zov-col {
    padding: 30px 0;
    background: #2aa198;
}

.grid-demo .zov-col:nth-of-type(2n) {
    background: #1cd779;
}
</style>
