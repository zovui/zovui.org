<title>多选</title>

<desc>可以同时选择多个日期，月份，年等</desc>

<template>
    <article class="datepicker-demo">
        <section class="section">
            日：
            <DatePicker multiple placeholder="日" v-model="d1" />
        </section>
        <section class="section">
            月：
            <DatePicker multiple placeholder="月" type="month" v-model="d2" />
        </section>
        <section class="section">
            年：
            <DatePicker multiple placeholder="年" type="year" v-model="d3" />
        </section>
        <section class="section">
            周：
            <DatePicker
                multiple
                placeholder="周"
                type="week"
                format="YY年，第W周"
                v-model="d4"
            />
        </section>
        <section>
            时：
            <DatePicker placeholder="时间 time" type="datetime" v-model="d5" />
        </section>
    </article>
</template>

<style>
.datepicker-demo .section {
    margin-bottom: 20px;
}
</style>

<script>
export default {
    data() {
        return {
            d1: ['2019-03-10', '2019-03-11'],
            d2: ['2019-01', '2019-02'],
            d3: ['2019-02', '2020'], // 从第一项可以看出有值矫正
            d4: ['2019-09'],
            d5: '2019-03-12 10:12:33'
        }
    }
}
</script>
