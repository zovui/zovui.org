<template>
    <ComponentDemo component-name="Breadcrumb" desc="面包屑" :apiList="api">

    </ComponentDemo>
</template>

<script>
import { ComponentDemo, ComponentExample } from '@/components/component-demo'

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
	    ComponentDemo
    },
	data() {
		return {
			routes: ['首页', '一级导航', '二级导航', '三级导航', '四级导航'],
            api
		}
	},
	methods: {
		handleClick(index) {
			this.routes.splice(index, 1)
		}
	}
}
</script>

<style lang="scss" scoped>
.container {
	width: 1000px;
	margin: 0 auto;
}
.section {
	box-sizing: border-box;
	margin: 20px 0;
	border: 1px solid #f5f5f5;
	padding: 20px 30px;
	box-shadow: 0 0 5px 0 #7f7f7f;
}
.props {
	margin: 20px 0;
}
.mg-10 {
	margin-bottom: 10px;
}
</style>
