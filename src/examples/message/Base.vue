<title>基础使用</title>

<template>
    <p>
        无配置
        <Button @click="$Message.open()">open</Button> |
        <Button looks="info" @click="$Message.info()">info</Button> |
        <Button looks="success" @click="$Message.success()">success</Button>
        | <Button looks="error" @click="$Message.error()">error</Button> |
        <Button looks="warning" @click="$Message.warning()">waring</Button>
    </p>
</template>
