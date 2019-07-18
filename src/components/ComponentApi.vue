<template>
    <section>
        <ComponentAnchor :id="title">
            <h3>{{ title }}</h3>
        </ComponentAnchor>
        <Table :columns="columns" :data="data" />
    </section>
</template>

<script>
import Table from './table';
import ComponentAnchor from './ComponentAnchor';
import shortId from 'shortid';
export default {
    name: "ComponentApi",
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
    components: {
        Table,
        ComponentAnchor
    },
    inject: {
        ComponentExample: {
            default: null
        }
    },
    data() {
        return {
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
