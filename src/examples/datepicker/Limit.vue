<title>限制</title>

<desc>
    可以限制不可选的日期，年份等。
</desc>

<template>
    <article>
        <section class="section">
            <DatePicker
                multiple
                placeholder="年"
                type="year"
                :disabled-date="
                    date => {
                        return (
                            date.format('YYYY') < new Date('2023').getFullYear()
                        )
                    }
                "
            />
        </section>
        <section class="section">
            <DatePicker
                placeholder="日"
                :disabled-date="
                    date => {
                        return (
                            date.format('DD') % 2 === 0 &&
                            date.isBefore(new Date())
                        )
                    }
                "
            />
        </section>
        <section class="section">
            <DatePicker
                placeholder="月"
                type="month"
                :disabled-date="
                    date => {
                        return date.isBefore(new Date())
                    }
                "
            />
        </section>
        <section class="section">
            <DatePicker value="2019-14" placeholder="周" type="week" />
        </section>
        <section class="section">
            <DatePicker
                multiple
                placeholder="时间,内部将 multiple 转换为单选"
                type="datetime"
                v-model="d6"
                format="YYYY-MM-DD HH:mm"
                :disabled-times="{
                    h: [1, 2],
                    m: (() => {
                        return [2, 4, 6, 8]
                    })(),
                    s: []
                }"
            />
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
            d6: ['2019-03-12 10:12:33', '2019-03-14 15:15:83']
        }
    }
}
</script>
