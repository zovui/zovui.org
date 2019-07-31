<title>居中步骤内容</title>

<desc>当整体页面都为步骤相关的页面时，居中内容能提升用户体验</desc>

<template>
    <article>
        <Steps :current="current" align-center>
            <Step title="已完成" content="这里是该步骤的描述信息"></Step>
            <Step title="进行中" content="这里是该步骤的描述信息"></Step>
            <Step title="待进行" content="这里是该步骤的描述信息"></Step>
            <Step title="待进行" content="这里是该步骤的描述信息"></Step>
        </Steps>
        <Button type="primary" @click="next">Next step</Button>
    </article>
</template>

<script>
export default {
    data() {
        return {
            current: 1
        }
    },
    methods: {
        next() {
            if (this.current === 3) {
                this.current = 0
            } else {
                this.current += 1
            }
        }
    }
}
</script>
