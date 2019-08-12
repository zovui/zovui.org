<template>
    <ul class="document-list">
        <slot />
    </ul>
</template>

<style lang="scss">
.document-list {
    margin: 20px 0;
    padding-left: 25px;
    list-style-type: disc !important;
}
</style>

<script>
export default {
    name: 'DocumentList'
}
</script>
