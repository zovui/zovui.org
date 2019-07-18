<script>
import Table from './table'
const columns = [
    {
        title: '事件名',
        key: 'event'
    },
    {
        title: '回调参数',
        key: 'callbackParam'
    },
    {
        title: '说明',
        key: 'explain'
    }
]

export default {
    name: 'EventsTable',
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
