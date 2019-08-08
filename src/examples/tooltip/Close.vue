<title>关闭方式</title>

<desc>
    提示框关闭方式有三种：
    <ul>
        <li>基础：点击除tooltip和绑定元素之外的区域</li>
        <li>永远不会关闭</li>
        <li>从tooltip内部的关闭按钮关闭</li>
    </ul>
</desc>

<template>
    <article class="tooltip-demo">
        <section class="section">
            <ToolTip
                title="提示"
                text="正常呼出，将可以通过组件外部点击收起，外部获取焦点可以收起，是最常见的配合click事件的收起方式"
                trigger="click"
                placement="bottom"
                auto-popup
            >
                <Button>正常</Button>
            </ToolTip>
        </section>
        <section class="section">
            <ToolTip
                title="提示"
                text="这是一个不可关闭，不可收起的提示！"
                placement="bottom"
                never
                auto-popup
            >
                <Button>永远不会收起的</Button>
            </ToolTip>
        </section>
        <section class="section">
            <ToolTip
                title="提示"
                text="这是一个不可外部收起，但是可以内部按钮收起。也可以结合v-model实现自定义关闭。"
                placement="bottom"
                never
                closable
                auto-popup
            >
                <Button>可内部关闭的</Button>
            </ToolTip>
        </section>
    </article>
</template>

<style>
.tooltip-demo {
    text-align: center;
}
.tooltip-demo .section {
    margin-bottom: 150px;
}
</style>
