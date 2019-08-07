<title>延时</title>

<desc>
    延时可以让提示框在指定事件后弹出或收起。
</desc>

<template>
    <article>
        <ToolTip
            title="提示"
            text="这是通过click等待1秒后弹出，等待1s收起的tooltip"
            trigger="click"
            enter-delay="1000"
            leave-delay="1000"
        >
            <Button>click 延时1s后呼出</Button>
        </ToolTip>
        <ToolTip
            title="提示"
            text="这是等待1秒后呼出的tooltip"
            placement="top"
            enter-delay="1000"
        >
            <Button>hover 延时1s后呼出</Button>
        </ToolTip>
        <ToolTip
            title="提示"
            text="这是等待1秒后收起的tooltip"
            leave-delay="1000"
        >
            <Button>hover 延时1s后收起</Button>
        </ToolTip>
    </article>
</template>
