<script>
import Table from './table'
const columns = [
    {
        title: 'slot名',
        key: 'name'
    },
    {
        title: '说明',
        key: 'explain'
    }
]

export default {
    name: 'SlotsTable',
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
