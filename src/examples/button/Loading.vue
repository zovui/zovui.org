<title>loading等待</title>

<desc>
    通过设置loading为true或false让按钮变更或取消为loading状态。
</desc>

<template>
    <div>
        <Button :loading="true">default</Button>
        <Button looks="primary" :loading="true">primary</Button>
        <Button looks="dashed" :loading="true">dashed</Button>
        <Button looks="text" :loading="true">text</Button>
    </div>
</template>
