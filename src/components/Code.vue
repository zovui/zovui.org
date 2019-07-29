<template>
    <div class="code">
        <pre
            class="code-pre"
        ><code class="hljs" :class="lang" v-html="highlightedCode"></code></pre>
    </div>
</template>

<style lang="scss" scoped>
.code {
    overflow: auto;
    .code-pre {
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
