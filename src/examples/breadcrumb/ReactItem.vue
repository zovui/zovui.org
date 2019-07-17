<title>
    面包屑导航项数变化
</title>

<desc>
    点击时删除点击项
</desc>

<template>
    <div>
        <Breadcrumb>
            <BreadcrumbItem
                v-for="(route, index) in routes"
                :key="index"
                @on-click="handleClick(index)"
            >{{ route }}</BreadcrumbItem
            >
        </Breadcrumb>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                routes: ['首页', '一级导航', '二级导航', '三级导航', '四级导航']
            }
        },
        methods: {
            handleClick(index) {
                this.routes.splice(index, 1)
            }
        }
    }
</script>
