<title>增强的密码框</title>

<desc>
    原生的密码框在不同浏览器上存在交互差异性，为了统一交互，增强了密码框的功能
</desc>

<template>
    <Input v-model="password" type="password" clearable eye />
</template>

<script>
export default {
    data() {
        return {
            password: ''
        }
    }
}
</script>
