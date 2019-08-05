<title>触发事件</title>

<desc>
    可以自定义触发事件，支持单个事件和多个事件触发。
</desc>

<template>
    <article>
        <section>
            <p>单事件</p>
            <ToolTip
                title="提示"
                text="这是通过hover触发弹出的tooltip，也是默认，----这是延长测试文字文字文字文字---"
                placement="top"
            >
                <Button>hover</Button>
            </ToolTip>
            <ToolTip
                title="提示"
                text="这是通过click触发弹出的tooltip，----这是延长测试文字文字文字文字---"
                placement="top"
                trigger="click"
                closable
            >
                <Button>click</Button>
            </ToolTip>
            <ToolTip
                title="提示"
                text="这是通过focus触发弹出的tooltip，----这里放置一些输入提示文字，在输入的时候---"
                placement="top"
                trigger="focus"
            >
                <Input placeholder="focus" />
            </ToolTip>
        </section>
        <section>
            <p>多事件</p>
            <ToolTip
                title="提示"
                text="常用语输入框提示"
                placement="top"
                :trigger="['hover', 'focus']"
            >
                <Input placeholder="['hover', 'focus']" />
            </ToolTip>
            <ToolTip
                title="提示"
                text="常用语输入框提示"
                placement="top"
                :trigger="['hover']"
            >
                <Input placeholder="['hover']" />
            </ToolTip>
            <ToolTip
                title="提示"
                text="常用语输入框提示"
                placement="top"
                :trigger="['hover', 'click']"
            >
                <Input placeholder="['hover', 'click']" />
            </ToolTip>
        </section>
    </article>
</template>
