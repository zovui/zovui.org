<template>
    <section>
        <ComponentAnchor :id="title">
            <h3 :id="title">{{ title }}</h3>
        </ComponentAnchor>
        <Table :columns="columns" :data="data" />
    </section>
</template>

<script>
import Table from '../table';
import ComponentAnchor from './component-anchor';
export default {
    name: "component-api",
    props: {
        title: {
            required: true,
            type: String
        },
        columns: {
            required: true,
            type: Array,
            validator(columns) {
                return columns.every((col) => {
                    return (
                        typeof col === 'object' &&
                        col.title &&
                        col.key
                    )
                })
            }
        },
        data: {
            required: true,
            type: Array,
            validator(data) {
                return data.every((row) => {
                    return typeof row === 'object'
                })
            }
        }
    },
    inject: {
        Demo: {
            default: null
        }
    },
    components: {
        Table,
        ComponentAnchor
    },
    created() {
        this.Demo.addApiAnchor({
            title: this.title,
            href: '#' + this.title
        })
    }
}
</script>
