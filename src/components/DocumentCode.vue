<template>
    <div class="document-code">
        <pre class="document-code-pre"><code
            class="hljs"
            v-html="highlightedCode"
        ></code></pre>
    </div>
</template>

<style lang="scss" scoped>
.document-code {
    overflow: auto;
    .document-code-pre {
        width: 100%;
        height: 100%;
        margin: 0;
    }
    .hljs {
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        padding: 15px;
    }
}
</style>

<script>
export default {
    name: 'Code',
    props: {
        highlightedCode: String
    }
}
</script>
