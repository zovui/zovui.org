<template>
    <div class="background-canvas">
        <svg class="background-svg-defs" xmlns="http://www.w3.org/2000/svg">
            <symbol id="O">
                <circle
                    cx="50"
                    cy="50"
                    r="37.5"
                    stroke-width="25"
                    stroke="currentColor"
                    fill="transparent"
                ></circle>
            </symbol>
            <symbol id="L">
                <path
                    d="
                    M 0 25
                    L 0 87.5
                    A 12.5 12.5 0 0 0 12.5 100
                    L 75 100
                    A 12.5 12.5 0 0 0 75 75
                    L 25 75
                    L 25 25
                    A 12.5 12.5 0 0 0 0 25
                    Z"
                ></path>
            </symbol>
            <symbol id="C">
                <path
                    d="
                    M 85.36 14.64
                    A 50 50 0 1 0 85.36 85.36
                    A 12.5 12.5 0 0 0 67.68 67.68
                    A 25 25 0 1 1 67.68 32.32
                    A 12.5 12.5 0 0 0 85.36 14.64
                    Z"
                ></path>
            </symbol>
        </svg>
        <slot />
    </div>
</template>

<style lang="scss" scoped>
.background-canvas {
    width: 100%;
    height: 100%;
    position: relative;
}
.background-svg-defs {
    display: none;
    width: 0;
    height: 0;
}
</style>

<script>
export default {
    name: 'BackgroundCanvas'
}
</script>
