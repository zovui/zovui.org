<template>
    <div class="document-code">
        <pre
            class="document-code-pre"
        ><code class="hljs" :class="lang" v-html="highlightedCode"></code></pre>
    </div>
</template>

<style lang="scss" scoped>
.document-code {
    overflow: auto;
    .document-code-pre {
        margin: 0;
    }
    .hljs {
        padding: 15px;
    }
}
</style>

<script>
export default {
    name: 'Code',
    props: {
        lang: String,
        highlightedCode: String
    }
}
</script>
