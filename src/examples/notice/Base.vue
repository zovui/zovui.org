<title>基础使用</title>

<template>
    <p>
        无配置
        <Button @click="$Notice.open()">open</Button> |
        <Button looks="info" @click="$Notice.info()">info</Button> |
        <Button looks="success" @click="$Notice.success()">success</Button>
        | <Button looks="error" @click="$Notice.error()">error</Button> |
        <Button looks="warning" @click="$Notice.warning()">waring</Button>
    </p>
</template>
