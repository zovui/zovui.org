<template>
    <section>
        <DocumentAnchor :id="anchor.id">
            <h3>{{ title }}</h3>
        </DocumentAnchor>
        <Table v-if="columns" :columns="columns" :data="data" />
        <component v-else :is="TypeTableMap[this.type]" :data="data" />
    </section>
</template>

<script>
import Table from './table'
import DocumentAnchorCollector from './DocumentAnchorCollector'
import DocumentAnchor from './DocumentAnchor'
import shortId from 'shortid'
import PropsTable from './PropsTable'
import MethodsTable from './MethodsTable'
import SlotsTable from './SlotsTable'
import EventsTable from './EventsTable'

const TypeTableMap = {
    props: PropsTable.name,
    methods: MethodsTable.name,
    slots: SlotsTable.name,
    events: EventsTable.name
}

export default {
    name: 'ComponentApi',
    mixins: [DocumentAnchorCollector],
    props: {
        title: {
            required: true,
            type: String
        },
        columns: {
            type: Array,
            validator(columns) {
                return columns.every(col => {
                    return typeof col === 'object' && col.title && col.key
                })
            }
        },
        type: {
            type: String,
            validator(type) {
                return Object.keys(TypeTableMap).indexOf(type) !== -1
            }
        },
        data: {
            required: true,
            type: Array,
            validator(data) {
                return data.every(row => {
                    return typeof row === 'object'
                })
            }
        }
    },
    components: {
        Table,
        DocumentAnchor,
        PropsTable,
        SlotsTable,
        MethodsTable,
        EventsTable
    },
    data() {
        return {
            TypeTableMap,
            anchor: {
                id: shortId.generate(),
                title: this.title
            }
        }
    }
}
</script>
