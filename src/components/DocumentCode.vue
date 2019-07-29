<template>
    <div class="document-code">
        <template v-if="highlightedCode">
            <pre class="document-code-pre"><code
                    class="hljs"
                    :class="lang"
                    v-html="highlightedCode"
                ></code></pre>
        </template>
        <template v-else>
            <pre class="document-code-pre"><code
                    class="hljs"
                    :class="lang"
                    ref="code"
                ><slot /></code>
            </pre>
        </template>
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
import highlight from 'highlight.js'

export default {
    name: 'Code',
    props: {
        lang: String,
        highlightedCode: String
    },
    mounted() {
        if (!this.highlightedCode) {
            highlight.highlightBlock(this.$refs.code)
        }
    }
}
</script>
