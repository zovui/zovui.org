<title>步骤状态</title>

<desc>
    可以控制步骤条或者步骤的状态，让用户更容易感知到当前节点事件发生的事情。
</desc>

<template>
    <article>
        <Steps :current="current" :status="currentState">
            <Step title="已完成" content="这里是该步骤的描述信息"></Step>
            <Step title="进行中" content="这里是该步骤的描述信息"></Step>
            <Step title="待进行" content="这里是该步骤的描述信息"></Step>
            <Step title="待进行" content="这里是该步骤的描述信息"></Step>
        </Steps>
        <Button type="primary" @click="next">Next step</Button>
        <RadioGroup v-model="currentState">
            <Radio v-for="state of status" :label="state" :key="state" />
        </RadioGroup>
    </article>
</template>

<script>
export default {
    data() {
        return {
            status: ['wait', 'process', 'finish', 'error'],
            currentState: 'process',
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
