<title>异步</title>

<desc>
    异步状态下会自动展示loading效果的icon。<br/>底层使用的是Spin组件可以通过spinname选择要渲染的Spin组件。
</desc>

<template>
    <article>
        <section>
            <Switcher v-model="loading" />
        </section>
        <section>
            <Tag :loading="loading" @click="loading = !loading"
                >点击我 等待</Tag
            >
            <Tag :loading="loading">loading</Tag>
            <Tag :loading="loading" spinname="dbcircle">自定义loading</Tag>

            <Tag :loading="loading" shape="circle">default</Tag>
            <Tag :loading="loading" shape="circle" looks="primary">primary</Tag>
            <Tag :loading="loading" shape="circle" looks="dashed">dashed</Tag>
            <Tag :loading="loading" shape="circle" looks="text">text</Tag>
            <Tag :loading="loading" shape="circle" looks="info">info</Tag>
            <Tag :loading="loading" shape="circle" looks="success">success</Tag>
            <Tag :loading="loading" shape="circle" looks="warning">warning</Tag>
            <Tag :loading="loading" shape="circle" looks="error">error</Tag>
        </section>
    </article>
</template>

<script>
export default {
    data() {
        return {
            loading: true
        }
    }
}
</script>
