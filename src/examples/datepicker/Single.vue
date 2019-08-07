<title>单选</title>

<desc>
    单选可以单选日期，单选月份，单选年。
</desc>

<template>
    <article>
        <section class="section">
            日：
            <DatePicker placeholder="日" v-model="a1" format="YYYY年MM月DD日" />
        </section>
        <section class="section">
            月：
            <DatePicker placeholder="月" type="month" v-model="a2" />
        </section>
        <section class="section">
            年：
            <DatePicker placeholder="年" type="year" v-model="a3" />
        </section>
    </article>
</template>

<style lang="scss" scoped>
.section {
    margin-bottom: 20px;
}
</style>

<script>
export default {
    data() {
        return {
            a1: '2019-03-11',
            a2: '2019-02',
            a3: '2019-02'
        }
    }
}
</script>
