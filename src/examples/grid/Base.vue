<title>基本使用</title>

<template>
    <Row>
        <Col span="2" v-for="item in 12" :key="item">{{ item }}</Col>
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
