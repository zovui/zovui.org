<title>步骤条大小</title>

<desc>
    步骤条还有更小尺寸可选。
</desc>

<template>
    <article>
        <section>
            <p>正常尺寸</p>
            <Steps :current="current">
                <Step title="已完成" content="这里是该步骤的描述信息"></Step>
                <Step title="进行中" content="这里是该步骤的描述信息"></Step>
                <Step title="待进行" content="这里是该步骤的描述信息"></Step>
                <Step title="待进行" content="这里是该步骤的描述信息"></Step>
            </Steps>
        </section>
        <section>
            <p>small尺寸</p>
            <Steps :current="current" size="small">
                <Step title="已完成" content="这里是该步骤的描述信息"></Step>
                <Step title="进行中" content="这里是该步骤的描述信息"></Step>
                <Step title="待进行" content="这里是该步骤的描述信息"></Step>
                <Step title="待进行" content="这里是该步骤的描述信息"></Step>
            </Steps>
        </section>
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
