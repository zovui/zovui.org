<template>
    <span class="document-prop"><slot /></span>
</template>

<style lang="scss">
.document-prop {
    display: inline-block;
    margin: 0 3px;
    padding: 1px 5px;
    border-radius: 3px;
    color: var(--color-text);
    border: 1px solid var(--color-border);
    background: var(--color-divider);
}
</style>

<script>
export default {
    name: 'DocumentProp'
}
</script>
