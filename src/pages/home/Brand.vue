<template>
    <BrandCanvas>
        <BrandSymbol symbol="L" color="red" left="15px" top="0" />
        <BrandSymbol symbol="O" color="orange" left="80px" top="0px" />
        <BrandSymbol symbol="C" color="blue" left="145px" top="0px" />
        <BrandSymbol symbol="O" color="green" left="210px" top="0px" />
    </BrandCanvas>
</template>

<style lang="scss" scoped>
.brand-canvas {
    cursor: pointer;
    &:hover {
        .brand-symbol {
            &:nth-of-type(1) {
                transform: translate3d(50px, -8px, 0) rotate(90deg) scale(0.9);
            }
            &:nth-of-type(2) {
                transform: translate3d(30px, 25px, 0);
            }
            &:nth-of-type(3) {
                transform: translate3d(-82px, 14.5px, 0) rotate(180deg)
                    scale(0.9);
            }
            &:nth-of-type(4) {
                transform: translate3d(-100px, -12.5px, 0) scale(0.9);
            }
        }
    }
}
</style>

<script>
import BrandCanvas from './BrandCanvas'
import BrandSymbol from './BrandSymbol'

export default {
    name: 'Brand',
    components: {
        BrandCanvas,
        BrandSymbol
    }
}
</script>
