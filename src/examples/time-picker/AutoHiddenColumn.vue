<title>自动隐藏列</title>

<desc>
    12小时制下，选择的器的列数将会依赖format的项数，自动实现列数隐藏。<br />
    采用12时制度后 format 默认设置为 hh:mm:ss a ，调用者应当遵循12时制format规则
    如：h:m:s a 或者 h:m:s A等。<br/>
    注意：此参数优先级低于format。
</desc>

<template>
    <article>
        <TimePicker v-model="t5" format="H时m分" :steps="[2, 10, 15]" />
        <TimePicker v-model="t6" format="H时s秒" :steps="[2, 10, 15]" />
    </article>
</template>

<script>
export default {
    data() {
        return {
            t5: '10:12:35',
            t6: '10:12:36'
        }
    }
}
</script>
