<title>基础使用</title>

<template>
    <div class="popper-demo">
        <div
            v-for="item in [
                'left',
                'right',
                'top',
                'bottom',
                'left-top',
                'right-top',
                'left-bottom',
                'right-bottom'
            ]"
            :key="item"
            :class="['drop', 'drop-' + item]"
        >
            {{ item }}
            <Popper>
                <div style="width:256px;padding:8px 12px">
                    <h3>标题</h3>
                    文本文本文本文本文本文本文本文本
                </div>
            </Popper>
        </div>
    </div>
</template>

<style>
.popper-demo {
    position: relative;
    width: 400px;
    height: 400px;
    border: 3px dashed;
}

.popper-demo .drop {
    position: absolute;
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.35);
    padding: 7px;
}

.popper-demo .drop-left-top {
    left: 15px;
    top: 15px;
}

.popper-demo .drop-top {
    top: 15px;
    left: 50%;
}

.popper-demo .drop-right-top {
    right: 15px;
    top: 15px;
}

.popper-demo .drop-left {
    left: 15px;
    top: 50%;
}

.popper-demo .drop-right {
    right: 15px;
    top: 50%;
}

.popper-demo .drop-left-bottom {
    left: 15px;
    bottom: 15px;
}

.popper-demo .drop-bottom {
    bottom: 15px;
    left: 50%;
}

.popper-demo .drop-right-bottom {
    right: 15px;
    bottom: 15px;
}
</style>
