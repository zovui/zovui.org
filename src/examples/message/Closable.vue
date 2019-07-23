<title>不可关闭的消息</title>

<template>
    <p>
        <Button looks="info" @click="$Message.info()">可关闭</Button> |
        <Button looks="success" @click="$Message.success({ closable: false })"
            >不可关闭</Button
        >
    </p>
</template>
