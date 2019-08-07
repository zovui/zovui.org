<title>beforeChange钩子</title>

<desc>
    <p>beforeChange需要返回值。</p>
    <p>若返回值为Promise,需要返回已经resolved的Promise，并且在resolved时传入true或false来指定是否跳转。</p>
    <p>若返回值为boolean类型，则通过true | false来选择是否跳转。</p>
</desc>

<template>
    <div>
        <h3>返回boolean值</h3>
        <Tabs type="card" :before-change="beforeChange">
            <TabPane label="Tab1" id="1" closable>Content of tab 1</TabPane>
            <TabPane label="Tab 2" id="2" closable>Content of tab 2</TabPane>
            <TabPane label="Tab 3" id="3" closable>Content of tab 3</TabPane>
            <TabPane label="Tab 4" id="4" closable disabled
                >Content of tab 4</TabPane
            >
        </Tabs>
        <h3>返回Promise值</h3>
        <Tabs type="card" :before-change="beforeChangeByPromise">
            <TabPane label="Tab1" id="1" closable>Content of tab 1</TabPane>
            <TabPane label="Tab 2" id="2" closable>Content of tab 2</TabPane>
            <TabPane label="Tab 4" id="4" closable disabled
                >Content of tab 4</TabPane
            >
        </Tabs>
    </div>
</template>

<script>
export default {
    methods: {
        beforeChange(from, to) {
            return window.confirm(`是否要从Tab: ${from} 跳转到 Tab: ${to}`)
        },
        beforeChangeByPromise(from, to) {
            return new Promise(resolve => {
                setTimeout(function() {
                    resolve(
                        window.confirm(`是否要从Tab: ${from} 跳转到 Tab: ${to}`)
                    )
                }, 3000)
            })
        }
    }
}
</script>
