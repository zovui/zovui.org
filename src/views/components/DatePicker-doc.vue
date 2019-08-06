<template>
    <ComponentExampleContainer
        component-name="DatePicker 日期选择器"
        desc="选择或输入日期，支持年、月、日期等类型，支持选择范围。"
        :apiList="api"
    >
        <ComponentExample
            v-for="example of examples"
            :example="example"
            :key="example.__title"
        />
        <template #after-api>
            <DocumentSection title="补充说明">
                组件对数据的处理分为parse和format两部分
                <DocumentSection title="parse">
                    <DocumentParagraph>
                        v-model接收的值为date类型，date格式应该遵循js原生格式，也就是说能被
                        Date 对象验证通过的字符串。
                    </DocumentParagraph>
                    <DocumentParagraph>
                        例如：
                    </DocumentParagraph>
                    <DocumentParagraph>
                        new Date('2019.12.11')<br />
                        new Date('2019/12/11')<br />
                        new Date('2019-12-11')
                    </DocumentParagraph>
                    <DocumentParagraph>
                        因此组件接受默认值得数据格式应该如下：
                    </DocumentParagraph>
                    <DocumentParagraph>
                        '2019-11'<br />
                        '2019'<br />
                        '19'<br />
                        '2019-2-03'<br />
                        ['2011-05-06', '2012-06-09']<br />
                        ......
                    </DocumentParagraph>
                </DocumentSection>
                <DocumentSection title="format">
                    <DocumentParagraph>
                        组件可以通过设置format字段自由组合date字符串，作为组件的输出。
                    </DocumentParagraph>
                    <DocumentParagraph>
                        例如
                    </DocumentParagraph>
                    <DocumentParagraph>
                        YYYY年MM月DD日，2019年12月20日<br />
                        YYYY=MM=DD，2019=12=20
                    </DocumentParagraph>
                    <DocumentParagraph>
                        开发者也可以通过on-change事件的回调中对dayjs对象进行format
                    </DocumentParagraph>
                    <ComponentApi
                        :title="formatApi.title"
                        :columns="formatApi.columns"
                        :data="formatApi.data"
                    />
                </DocumentSection>
            </DocumentSection>
        </template>
    </ComponentExampleContainer>
</template>

<script>
import {
    ComponentExampleContainer,
    ComponentExample,
    DocumentSection,
    DocumentParagraph,
    ComponentApi
} from '@/components'
import Single from '@/examples/datepicker/Single.vue?demo'

const api = [
    {
        title: 'DatePicker props',
        type: 'props',
        data: [
            {
                prop: 'value',
                type: 'string',
                required: 'true',
                default: '-',
                values: '-',
                explain: '对应的值，支持v-model'
            },
            {
                prop: 'type',
                type: 'string',
                required: 'false',
                default: 'date',
                values: ['date', 'datetime', 'year', 'month', 'week'].join(
                    ' | '
                ),
                explain: '组件类型'
            },
            {
                prop: 'format',
                type: 'Date',
                required: 'false',
                default: 'date',
                values: '-',
                explain: '可以根据下面表格对照组合format后的日期string'
            },
            {
                prop: 'multiple',
                type: 'boolean',
                required: 'false',
                default: 'false',
                values: '-',
                explain: '多选，仅在 date、week、month、year 下可用'
            },
            {
                prop: 'no-arrow',
                type: 'boolean',
                required: 'false',
                default: 'true',
                values: '-',
                explain: 'drop容器的尖角'
            },
            {
                prop: 'placeholder',
                type: 'string',
                required: 'false',
                default: "''",
                values: '-',
                explain: '占位文案'
            },
            {
                prop: 'autofocus',
                type: 'boolean',
                required: 'false',
                default: 'false',
                values: '-',
                explain: '自动获取焦点'
            },
            {
                prop: 'disabled',
                type: 'boolean',
                required: 'false',
                default: 'false',
                values: '-',
                explain: '是否禁用'
            },
            {
                prop: 'disabled-date',
                type: 'Function',
                required: 'false',
                default: '() => false',
                values: '-',
                explain:
                    "限制禁用日期；@date 每一天、每一年今天、每一月今天、每一周今天。返回表达式的结果作为组件内部的判断依据；date为一个dayjs对象。 eg: (date) => { // 小于今天的偶数日 date.format('DD') % 2 === 0 && date.isBefore(new Date()) }"
            },
            {
                prop: 'disabled-times',
                type: 'object',
                required: 'false',
                default: ' {h: [], m: [], s: []}',
                values: '-',
                explain: '限制禁用时间'
            },
            {
                prop: 'hide-disabled-options',
                type: 'boolean',
                required: 'false',
                default: 'false',
                values: '-',
                explain: '隐藏限制项'
            },
            {
                prop: 'use12HourSystem',
                type: 'boolean',
                required: 'false',
                default: 'false',
                values: '-',
                explain:
                    '采用12时制；采用12时制度后 format 默认设置为 YYYY-MM-DD hh:mm:ss a ，调用者应当遵循12时制format规则 \n' +
                    '如：YYYY-MM-DD h:m:s a 或者 YYYY-MM-DD h:m:s A等。 \n' +
                    '注意：此参数优先级低于format。'
            }
        ]
    },
    {
        title: 'DatePicker events',
        type: 'events',
        data: [
            {
                event: 'on-open-change',
                callbackParam: 'Boolean',
                explain: '组件drop呼出、收起的回调'
            },
            {
                event: 'on-change',
                callbackParam:
                    '单选【当前所选项的item】，多选【已选所有项的items】',
                explain: '组件值发生变化后的回调'
            }
        ]
    }
]

const formatApi = {
    title: 'format格式',
    columns: [
        {
            title: '格式',
            key: 'format'
        },
        {
            title: '输出',
            key: 'output'
        },
        {
            title: '描述',
            key: 'desc'
        }
    ],
    data: [
        {
            format: 'YY',
            output: '18',
            desc: '两位数的年份'
        },
        {
            format: 'YYYY',
            output: '2018',
            desc: '四位数的年份'
        },
        {
            format: 'YYYY',
            output: '2018',
            desc: '四位数的年份'
        },
        {
            format: 'M',
            output: '1-12',
            desc: '月份，从 1 开始'
        },
        {
            format: 'MM',
            output: '01-12',
            desc: '月份，两位数'
        },
        {
            format: 'MMM',
            output: 'Jan-Dec',
            desc: 'Jan-Dec'
        },
        {
            format: 'MMMM',
            output: 'January-December',
            desc: '完整的月份名称'
        },
        {
            format: 'D',
            output: '1-31',
            desc: '月份里的一天'
        },
        {
            format: 'DD',
            output: '01-31',
            desc: '月份里的一天，两位数'
        },
        {
            format: 'd',
            output: '0-6',
            desc: '一周中的一天，星期天是 0'
        },
        {
            format: 'dd',
            output: 'Su-Sa',
            desc: '最简写的一周中一天的名称'
        },
        {
            format: 'ddd',
            output: 'Sun-Sat',
            desc: '简写的一周中一天的名称'
        },
        {
            format: 'dddd',
            output: 'Sunday-Saturday',
            desc: '一周中一天的名称'
        },
        {
            format: 'H',
            output: '0-23',
            desc: '小时'
        },
        {
            format: 'HH',
            output: '00-23',
            desc: '小时，两位数'
        },
        {
            format: 'h',
            output: '1-12',
            desc: '小时, 12 小时制'
        },
        {
            format: 'hh',
            output: '01-12',
            desc: 'Hours, 12 小时制, 两位数'
        },
        {
            format: 'm',
            output: '0-59',
            desc: '分钟'
        },
        {
            format: 'mm',
            output: '00-59',
            desc: '分钟，两位数'
        },
        {
            format: 's',
            output: '0-59',
            desc: '秒'
        },
        {
            format: 'ss',
            output: '00-59',
            desc: '秒 两位数'
        },
        {
            format: 'SSS',
            output: '000-999',
            desc: '毫秒 三位数'
        },
        {
            format: 'Z',
            output: '+5:00',
            desc: 'UTC 的偏移量'
        },
        {
            format: 'ZZ',
            output: '+0500',
            desc: 'UTC 的偏移量，数字前面加上 0'
        },
        {
            format: 'A',
            output: 'AM PM',
            desc: '早餐下午区分'
        },
        {
            format: 'a',
            output: 'am pm',
            desc: '早餐下午区分'
        }
    ]
}

export default {
    name: 'DatePicker-doc',
    components: {
        ComponentExampleContainer,
        ComponentExample,
        DocumentSection,
        DocumentParagraph,
        ComponentApi
    },
    data() {
        return {
            examples: [Single],
            api,
            formatApi
        }
    }
}
</script>
