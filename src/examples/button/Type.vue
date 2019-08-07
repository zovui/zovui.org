<title>按钮类型</title>

<desc>
    <p>按钮类型有：默认按钮、主按钮、虚线按钮、文字按钮以及四种颜色按钮。</p>
    <p>通过设置looks为primary、dashed、text、info、success、warning、error创建不同样式的按钮，不设置为默认样式。</p>
</desc>

<template>
    <div>
        <p>
            <Button>default</Button>
            <Button looks="primary">primary</Button>
            <Button looks="dashed">dashed</Button>
            <Button looks="text">text</Button>
        </p>
        <p>
            <Button looks="info">info</Button>
            <Button looks="success">success</Button>
            <Button looks="warning">warning</Button>
            <Button looks="error">error</Button>
        </p>
    </div>
</template>
