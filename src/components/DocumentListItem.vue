<template>
    <li class="document-list-item"><slot /></li>
</template>

<style lang="scss">
.document-list-item {
    margin: 10px 0;
    list-style-type: disc !important;
}
</style>

<script>
export default {
    name: 'DocumentListItem'
}
</script>
