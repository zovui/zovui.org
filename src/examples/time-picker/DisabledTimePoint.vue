<title>禁用时间点</title>

<desc>
    禁用某些时间点是非常常见的场景，例如你想要实现只能选择白天时间的时候。
</desc>

<template>
    <article>
        <section>
            <p>可见禁用的时间点</p>
            <TimePicker
                :value="'12:12:12'"
                format="HH时mm分ss秒"
                :disabled-times="{
                    h: [1, 2],
                    m: (() => {
                        return [2, 4, 6, 8]
                    })(),
                    s: []
                }"
            />
        </section>
        <section>
            <p>隐藏禁用的时间点</p>
            <TimePicker
                :value="'12:12:12'"
                format="HH时mm分ss秒"
                :disabled-times="{
                    h: [1, 2],
                    m: (() => {
                        return [2, 4, 6, 8]
                    })(),
                    s: []
                }"
                hide-disabled-options
            />
        </section>
    </article>
</template>
