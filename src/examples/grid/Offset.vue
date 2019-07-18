<title>左右偏移</title>

<desc>
    设置Col组件的offset属性，可使列偏移固定宽度
</desc>

<template>
    <div>
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
    </div>
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
