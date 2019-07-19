<title>控制tooltip的展现</title>

<desc>
    设置不同的tooltipVisible，可以让tooltip根据不同的展示规则去展现
</desc>

<template>
    <article>
        <section>
            <p>
                当tooltipVisible = 'default'时，拖拽或者hover
                handle时会显示tooltip
            </p>
            <Slider tooltipVisible="default" />
        </section>
        <section>
            <p>当tooltipVisible = 'hidden'时，总是隐藏tooltip</p>
            <Slider tooltipVisible="hidden" />
        </section>
        <section>
            <p>当tooltipVisible = 'always'时，总是显示tooltip</p>
            <Slider tooltipVisible="always" />
        </section>
    </article>
</template>
