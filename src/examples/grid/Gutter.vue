<title>设置间隔</title>

<desc>
    可以指定Row组件的gutter属性，设置列之前的间隔
</desc>

<template>
    <article class="grid-demo">
        <Row :gutter="16">
            <Col span="6" v-for="item in 4" :key="item">
                <div style="height: 100%;background: rgba(0,0,0,0.65)">
                    {{ item }}
                </div>
            </Col>
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
