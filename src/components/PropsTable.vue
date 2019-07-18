<script>
import Table from './table'
const columns = [
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
]

export default {
    name: 'PropsTable',
    functional: true,
    props: {
        data: {
            type: Array,
            default: () => []
        },
        defaultValue: {
            type: String,
            default: '-'
        }
    },
    render(h, ctx) {
        return <Table columns={columns} data={ctx.props.data} />
    }
}
</script>
