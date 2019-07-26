<title>自定义文案</title>

<desc>可根据需求配置自定义文案的样式以及展示文字</desc>

<template>
    <div>
        <Progress :percent="80"></Progress>
        <Progress :percent="80" :format="format"></Progress>
    </div>
</template>

<script>
export default {
    data() {
        return {
            format: (h, data) => {
                return h(
                    'span',
                    {
                        style: {
                            color: '#ce0808'
                        }
                    },
                    data.percent + '℃'
                )
            },
            percent: 10
        }
    }
}
</script>
