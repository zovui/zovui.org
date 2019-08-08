<title>基本使用</title>

<template>
    <article class="grid-demo">
        <Row>
            <Col span="2" v-for="item in 12" :key="item">{{ item }}</Col>
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
