<template>
    <Row>
        <Col span="20">
            <article class="component-example-container">
                <h1 class="component-name">{{ componentName }}</h1>
                <section class="component-example-section">
                    <ComponentAnchor id="GS">
                        <h2 class="component-example-section-header">概述</h2>
                    </ComponentAnchor>
                    <p>
                        <slot name="desc">{{ desc }}</slot>
                    </p>
                </section>
                <section class="component-example-section">
                    <ComponentAnchor id="examples">
                        <h2 class="component-example-section-header">
                            代码示例
                        </h2>
                    </ComponentAnchor>
                    <slot />
                </section>
                <section class="component-example-section">
                    <ComponentAnchor id="API">
                        <h2 class="component-example-section-header">API</h2>
                    </ComponentAnchor>
                    <ComponentApi
                        v-for="api of apiList"
                        :key="api.title"
                        :title="api.title"
                        :type="api.type"
                        :columns="api.columns"
                        :data="api.data"
                    />
                </section>
            </article>
        </Col>
        <Col span="4">
            <Affix>
                <Anchor show-ink>
                    <AnchorLink
                        v-for="anchor in anchorList"
                        :key="anchor.href"
                        :href="anchor.href"
                        :title="anchor.title"
                    >
                        <AnchorLink
                            v-if="anchor.children"
                            v-for="child in anchor.children"
                            :key="child.href"
                            :href="child.href"
                            :title="child.title"
                        />
                    </AnchorLink>
                </Anchor>
            </Affix>
        </Col>
    </Row>
</template>
<style lang="scss">
.component-example-container {
    padding: 0 30px;
}
.component-name {
    font-weight: 400;
    margin-bottom: 30px;
}
.component-example-section {
    margin: 20px 0;
    &-header {
        margin: 10px 0;
    }
}
</style>
<script>
import ComponentApi from './ComponentApi'
import ComponentAnchor from './ComponentAnchor'

export default {
    name: 'ComponentExampleContainer',
    props: {
        // 组件名
        componentName: {
            required: true,
            type: String
        },
        // 组件概述
        desc: String,
        // 组件API接口
        apiList: Array
    },
    components: {
        ComponentApi,
        ComponentAnchor
    },
    provide() {
        return {
            ComponentExample: {
                addExampleAnchor: anchor => {
                    this.anchorList[1].children.push(anchor)
                },
                addApiAnchor: anchor => {
                    this.anchorList[2].children.push(anchor)
                }
            }
        }
    },
    data() {
        return {
            anchorList: [
                {
                    title: '概述',
                    href: '#GS'
                },
                {
                    title: '代码示例',
                    href: '#examples',
                    children: []
                },
                {
                    title: 'API',
                    href: '#API',
                    children: []
                }
            ]
        }
    }
}
</script>
