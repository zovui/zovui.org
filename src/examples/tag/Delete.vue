<title>可关闭</title>

<desc>
    通过on-close事件，可以实现可关闭的交互逻辑。
</desc>

<template>
    <article>
        <Tag
            v-for="(item, index) in tags"
            :key="index"
            @on-close="removeTag(index)"
        >
            {{ item.text }}
        </Tag>
    </article>
</template>

<script>
export default {
    data() {
        return {
            tags: (() => {
                let d = []
                for (let i = 0; i < 5; i++) {
                    d.push({
                        id: i,
                        text: 'item#' + (i + 1)
                    })
                }
                return d
            })()
        }
    },
    methods: {
        removeTag(index) {
            this.$delete(this.tags, index)
        }
    }
}
</script>
