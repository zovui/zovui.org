<template>
    <ComponentDemo component-name="Breadcrumb" desc="面包屑" :apiList="api">
        <ComponentExample v-for="example of examples" :example="example" :key="example.__title"/>
    </ComponentDemo>
</template>

<script>
import { ComponentDemo, ComponentExample } from '@/components/component-demo'
import { Base, Separator, ReactItem } from '@/examples/breadcrumb'

const api = [
    {
        title: 'Breadcrumb props',
        columns: [
            {
                title: '属性',
                key: 'prop'
            },
            {
                title: '类型',
                key: 'type'
            },
            {
                title: '是否必传',
                key: 'required'
            },
            {
                title: '默认值',
                key: 'default'
            },
            {
                title: '说明',
                key: 'explain'
            }
        ],
        data: [
            {
                prop: 'separator',
                type: 'string',
                required: 'false',
                default: '/',
                explain: '导航分隔符'
            },
            {
                prop: 'target',
                type: 'string',
                required: 'false',
                default: '_self',
                explain: 'a链接的target属性值'
            }
        ]
    },
    {
        title: 'Breadcrumb 事件',
        columns: [
            {
                title: '事件名',
                key: 'event'
            },
            {
                title: '回调参数',
                key: 'callbackParam'
            }
        ],
        data: [
            {
                event: 'click',
                callbackParam: 'event对象'
            }
        ]
    }
]

export default {
	name: 'Breadcrumb-doc',
    components: {
	    ComponentDemo,
        ComponentExample
    },
	data() {
		return {
		    examples: [Base, Separator, ReactItem],
            api
		}
	}
}
</script>
