<template>
    <section>
        <ComponentAnchor :id="title">
            <h3>{{ title }}</h3>
        </ComponentAnchor>
        <Table v-if="columns" :columns="columns" :data="data" />
        <component v-else :is="TypeTableMap[this.type]" :data="data" />
    </section>
</template>

<script>
import Table from './table'
import ComponentAnchor from './ComponentAnchor'
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
        ComponentAnchor,
        PropsTable,
        SlotsTable,
        MethodsTable,
        EventsTable
    },
    inject: {
        ComponentExample: {
            default: null
        }
    },
    data() {
        return {
            TypeTableMap,
            anchorId: shortId.generate(),
            anchorTitle: this.title
        }
    },
    created() {
        this.ComponentExample.addApiAnchor({
            title: this.anchorTitle,
            href: `#${this.anchorId}`
        })
    }
}
</script>
