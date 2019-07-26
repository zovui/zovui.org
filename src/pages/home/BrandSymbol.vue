<template>
    <div class="brand-symbol" :class="classes" :style="styles">
        <svg class="brand-symbol-svg">
            <use class="brand-symbol-svg-user" :xlink:href="'#' + symbol"></use>
        </svg>
    </div>
</template>

<style lang="scss" scoped>
.brand-symbol {
    position: absolute;
    cursor: pointer;
    transition: 0.3s transform ease;
    .brand-symbol-svg {
        width: 100px;
        height: 100px;
        transform: scale(0.5);
    }
    &--orange {
        .brand-symbol-svg-user {
            fill: rgba(224, 127, 61, 0.9);
            color: rgba(224, 127, 61, 0.9);
        }
    }
    &--red {
        .brand-symbol-svg-user {
            fill: rgba(223, 73, 78, 0.9);
            color: rgba(223, 73, 78, 0.9);
        }
    }
    &--green {
        .brand-symbol-svg-user {
            fill: rgba(94, 188, 58, 0.9);
            color: rgba(94, 188, 58, 0.9);
        }
    }
    &--blue {
        .brand-symbol-svg-user {
            fill: rgba(80, 132, 206, 0.9);
            color: rgba(80, 132, 206, 0.9);
        }
    }
}
</style>

<script>
export default {
    name: 'BrandSymbol',
    props: {
        symbol: {
            type: String,
            validator(symbol) {
                return ['L', 'O', 'C'].indexOf(symbol) !== -1
            }
        },
        top: String,
        left: String,
        bottom: String,
        right: String,
        color: {
            type: String,
            validator(color) {
                return ['red', 'orange', 'blue', 'green'].indexOf(color) !== -1
            }
        }
    },
    computed: {
        classes() {
            const classes = []
            classes.push('brand-symbol--' + this.color)
            return classes
        },
        styles() {
            return {
                top: this.top,
                left: this.left,
                bottom: this.bottom,
                right: this.right
            }
        }
    }
}
</script>
