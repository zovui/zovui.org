<title>标签页位置</title>

<desc>
    根据tabPosition属性控制标签页位置。
</desc>

<template>
    <div>
        <RadioGroup connected v-model="tabPosition">
            <Radio
                v-for="pos of ['top', 'bottom', 'left', 'right']"
                :label="pos"
                :key="pos"
            ></Radio>
        </RadioGroup>
        <Tabs :tab-position="tabPosition">
            <TabPane v-for="i in 20" :label="'Tab' + i" :id="'' + i" :key="i"
                >Content of tab {{ i }}</TabPane
            >
        </Tabs>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tabPosition: 'top'
        }
    }
}
</script>
