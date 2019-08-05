<title>懒加载</title>

<desc>
    <p>给TabPane指定lazy, 是否懒加载。</p>
    <p>给TabPane指定lazy为true，在tabs渲染时，只有当activeId等于TabPane.id时才会被挂载，当切换至别的tab时，其内容会被销毁。</p>
    <p>给TabPane指定lazy为false，在tabs渲染时，预渲染其内容。</p>
</desc>

<template>
    <Tabs>
        <TabPane label="static" id="1" :lazy="false">
            <StaticTestComponent />
        </TabPane>
        <TabPane label="static" id="2" :lazy="false">
            <StaticTestComponent />
        </TabPane>
        <TabPane label="lazy" id="3">
            <LazyTestComponent />
        </TabPane>
    </Tabs>
</template>

<script>
export default {
    components: {
        StaticTestComponent: {
            data() {
                return {
                    timeout: 0,
                    slotLabel: 'label'
                }
            },
            mounted() {
                setInterval(() => {
                    this.timeout++
                }, 1000)
                this.$Message.info('static component is mounted!')
            },
            destroyed() {
                this.$Message.info('static component is destroyed!')
            },
            render(h) {
                return h(
                    'p',
                    "I'm static component! " + 'timeout: ' + this.timeout
                )
            }
        },
        LazyTestComponent: {
            mounted() {
                this.$Message.info('lazy component is mounted!')
            },
            destroyed() {
                this.$Message.info('lazy component is destroyed!')
            },
            render(h) {
                return h('p', "I'm lazy component!")
            }
        }
    }
}
</script>
