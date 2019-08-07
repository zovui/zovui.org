<title>按钮组合</title>

<desc>
    将多个Button放入ButtonGroup内，可实现按钮组合的效果。
</desc>

<template>
    <div>
        <p>按钮组合横向排列</p>
        <br />
        <p>
            <ButtonGroup>
                <Button>default</Button>
                <Button looks="primary">primary</Button>
                <Button looks="dashed">dashed</Button>
                <Button looks="info">info</Button>
            </ButtonGroup>
        </p>
        <br />
        <p>
            <ButtonGroup shape="circle">
                <Button>default</Button>
                <Button looks="primary">primary</Button>
                <Button looks="dashed">dashed</Button>
                <Button looks="info">info</Button>
            </ButtonGroup>
        </p>
        <br />
        <p>按钮组合纵向排列</p>
        <br />
        <p>
            <ButtonGroup shape="circle" :vertical="true">
                <Button>default</Button>
                <Button looks="primary">primary</Button>
                <Button looks="dashed">dashed</Button>
                <Button looks="info">info</Button>
            </ButtonGroup>
        </p>
    </div>
</template>
