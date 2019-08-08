<title>自定义头像</title>

<desc>
    Avatar组件提供了default插槽，可以通过插槽自定义头像。
</desc>

<template>
    <article class="avatar-demo">
        <Avatar class="avatar" iconname="person" />
        <Avatar class="avatar">Z</Avatar>
        <Avatar class="avatar">ZOV</Avatar>
        <Avatar class="avatar custom-avatar-color">Z</Avatar>
    </article>
</template>

<style>
.avatar-demo .avatar {
    margin-right: 10px;
}

.avatar-demo .custom-avatar-color {
    color: #f56a00;
    background-color: #fde3cf;
}
</style>
