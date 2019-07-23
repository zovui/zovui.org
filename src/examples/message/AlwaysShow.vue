<title>长时间停留</title>

<template>
    <p>
        <Button looks="info" @click="$Message.info()">自动消失</Button> |
        <Button looks="success" @click="$Message.success({ duration: 0 })"
            >长时间停留</Button
        >
    </p>
</template>
