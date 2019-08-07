<title>用slot自定义label内容</title>

<desc>
    给TabPane使用slot: label自定义label内容。
</desc>

<template>
    <Tabs>
        <TabPane id="1" :lazy="false">
            <template #label>
                <Icon iconname="chatboxes"></Icon>{{ slotLabel }}
            </template>
            <ul v-for="item of items" :key="item">
                <li>{{ item }}</li>
            </ul>
            <Button @click.native="appendItem">新增</Button>
        </TabPane>
        <TabPane label="static" id="2" :lazy="false">
            <StaticTestComponent />
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
        }
    },
    data() {
        return {
            items: [],
            slotLabel: 'label'
        }
    },
    methods: {
        appendItem() {
            this.items.push('item' + this.items.length)
        }
    },
    created() {
        let count = 1
        setInterval(() => {
            this.slotLabel = 'label' + count++
        }, 1000)
    }
}
</script>
