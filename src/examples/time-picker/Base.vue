<title>基础使用</title>

<desc>
    时间格式分为24小时制和12小时制，根据需求进行调整
</desc>

<template>
    <article>
        <section>
            <p>24小时制</p>
            <TimePicker
                v-model="t1"
                placeholder="HH时mm分ss秒"
                format="HH时mm分ss秒"
            />
        </section>
        <section>
            <p>12小时制</p>
            <TimePicker
                v-model="t2"
                placeholder="HH:mm:ss a"
                format="a h:mm:ss"
                use12HourSystem
            />
        </section>
    </article>
</template>

<script>
export default {
    name: 'Base',
    data() {
        return {
            t1: '10:12:30',
            t2: '15:12:34'
        }
    }
}
</script>
