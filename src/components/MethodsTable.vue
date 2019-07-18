<script>
import Table from './table'
const columns = [
    {
        title: '方法名',
        key: 'name'
    },
    {
        title: '返回值',
        key: 'returnValue'
    },
    {
        title: '说明',
        key: 'explain'
    }
]

export default {
    name: 'MethodsTable',
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
