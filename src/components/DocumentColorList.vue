<template functional>
    <div class="document-color-list"><slot /></div>
</template>

<style lang="scss">
.document-color-list {
    margin: 20px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>

<script>
export default {
    name: 'DocumentColorList'
}
</script>
