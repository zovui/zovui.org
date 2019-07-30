<title>基础使用</title>

<template>
    <article>
        <section>
            <p class="controller">修改窗口高度 <Input v-model="v" /></p>
            <p class="controller">修改子项高度 <Input v-model="v1" /></p>
        </section>
        <section>
            <div
                class="box"
                :style="{
                    border: '1px dashed',
                    'margin-top': 5,
                    height: v + 'px'
                }"
            >
                <LongList style="height: 100%" :data="list" :threshold="2">
                    <div
                        :style="{ height: v1 + 'px' }"
                        slot-scope="{ props }"
                        :index="props.item.id"
                        class="item"
                    >
                        <img :src="props.item.img" alt="" />
                        <div>
                            下标：{{ props.index }}内容：{{ props.item.text }}
                        </div>
                    </div>
                </LongList>
            </div>
        </section>
    </article>
</template>

<style lang="scss" scoped>
.controller {
    margin-bottom: 20px;
}
.item {
    overflow: hidden;
    padding: 15px;
    & > * {
        float: left;
    }
    & > img {
        width: 35px;
        height: 35px;
    }
    border-bottom: 1px solid #ccc;
    &::after {
        content: '';
        display: block;
        clear: both;
    }
}
</style>

<script>
export default {
    data() {
        return {
            v: 360,
            v1: 66,
            list: (() => {
                let d = []
                for (var i = 0; i < 10000; i++) {
                    d.push({
                        id: i,
                        text: 'item #' + (i + 1),
                        img:
                            'https://ss2.baidu.com/-vo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=dc7e87bdfb03738dc14a0a22831ab073/08f790529822720e698c1ae776cb0a46f21fab69.jpg'
                    })
                }
                return d
            })()
        }
    }
}
</script>
