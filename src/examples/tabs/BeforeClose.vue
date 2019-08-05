<title>可关闭和beforeClose钩子</title>

<desc>
    <p>beforeClose需要返回值。</p>
    <p>若返回值为Promise,需要返回已经resolved的Promise，并且在resolved时传入true或false来指定是否关闭。</p>
    <p>若返回值为boolean类型，则通过true | false来选择是否可关闭。</p>
</desc>

<template>
    <div>
        <p>返回boolean值</p>
        <Tabs type="card" :before-close="beforeClose">
            <TabPane label="Tab1" id="1" closable>Content of tab 1</TabPane>
            <TabPane label="Tab 2" id="2" closable>Content of tab 2</TabPane>
            <TabPane label="Tab 3" id="3" closable>Content of tab 3</TabPane>
        </Tabs>
        <p>返回Promise值</p>
        <Tabs type="card" :before-close="beforeCloseByPromise">
            <TabPane label="Tab1" id="1" closable>Content of tab 1</TabPane>
            <TabPane label="Tab 2" id="2" closable>Content of tab 2</TabPane>
            <TabPane label="Tab 3" id="3" closable>Content of tab 3</TabPane>
        </Tabs>
    </div>
</template>

<script>
export default {
    methods: {
        beforeClose(id) {
            return window.confirm('是否要关闭Tab: ' + id)
        },
        beforeCloseByPromise(id) {
            return new Promise(resolve => {
                setTimeout(function() {
                    resolve(window.confirm('是否要关闭Tab: ' + id))
                }, 3000)
            })
        }
    }
}
</script>
