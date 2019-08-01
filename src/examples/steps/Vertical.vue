<title>垂直模式</title>

<desc>
    当步骤非常多的时候，垂直模式能更好的优化页面的布局。
</desc>

<template>
    <article>
        <Steps :current="current" direction="vertical">
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
