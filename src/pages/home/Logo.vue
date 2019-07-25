<template>
    <div class="logo">
        <div class="logo-line-canvas">
            <div class="logo-line logo-line-orange"></div>
            <div class="logo-line logo-line-green"></div>
            <div class="logo-line logo-line-blue"></div>
        </div>
        <div class="logo-dot"></div>
    </div>
</template>

<style lang="scss" scoped>
$logo-scale: 1.5;
$logo-line-width: 142px * $logo-scale;
$logo-line-height: 32px * $logo-scale * 1.2;
$cos54: 0.59;
$sin54: 0.81;
$logo-dot-offset: -90px * $logo-scale + ($logo-line-height / 2);
$logo-cubic-bezier: cubic-bezier(0.215, 0.61, 0.355, 1);
$logo-animate-duration: 1s;

.logo {
    position: relative;
    width: $cos54 * $logo-line-width * 3;
    height: $sin54 * $logo-line-width;
    .logo-dot {
        position: absolute;
        top: 0;
        right: 0;
        border-radius: 50%;
        width: $logo-line-height;
        height: $logo-line-height;
        background: rgba(223, 73, 78, 0.9);
        transform-origin: center center;
        transform: translate3d($logo-dot-offset, 0, 0);
        animation-name: logo-dot-in;
        animation-duration: $logo-animate-duration;
        animation-delay: $logo-animate-duration - 0.2s;
        animation-fill-mode: forwards;
        visibility: hidden;
    }
    .logo-line-canvas {
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -1 * ($logo-line-height / 2);
        margin-left: -1 * ($logo-line-width / 2);
        width: $logo-line-width;
        height: $logo-line-height;
        transform-origin: center center;
        transform: rotate(54deg);
    }
    .logo-line {
        position: absolute;
        border-radius: ($logo-line-height / 2);
        width: $logo-line-height;
        height: $logo-line-height;
        animation-name: logo-line-in;
        animation-duration: $logo-animate-duration;
        animation-delay: 0.3s;
        animation-timing-function: $logo-cubic-bezier;
        animation-fill-mode: forwards;
        &-orange {
            top: 0;
            left: 0;
            background: rgba(224, 127, 61, 0.9);
            transform-origin: ($logo-line-width - ($logo-line-height / 2))
                ($logo-line-height / 2);
            transform: translateX(-1 * ($logo-line-width - $logo-line-height))
                rotate(-1 * (90deg + 15deg));
        }
        &-green {
            top: 0;
            left: 0;
            background: rgba(94, 188, 58, 0.9);
        }
        &-blue {
            top: 0;
            left: 0;
            background: rgba(80, 132, 206, 0.9);
            transform-origin: ($logo-line-width - ($logo-line-height / 2))
                ($logo-line-height / 2);
            transform: rotate(90deg - 15deg);
        }
    }
}

@keyframes logo-line-in {
    0% {
        width: $logo-line-height;
    }
    100% {
        width: $logo-line-width;
    }
}

@keyframes logo-dot-in {
    from,
    60%,
    75%,
    90%,
    to {
        animation-timing-function: $logo-cubic-bezier;
    }

    0% {
        visibility: visible;
        opacity: 0;
        transform: translate3d($logo-dot-offset, -3000px, 0);
    }

    60% {
        opacity: 1;
        transform: translate3d($logo-dot-offset, 25px, 0);
    }

    75% {
        transform: translate3d($logo-dot-offset, -10px, 0);
    }

    90% {
        transform: translate3d($logo-dot-offset, 5px, 0);
    }

    to {
        visibility: visible;
        transform: translate3d($logo-dot-offset, 0, 0);
    }
}
</style>

<script>
export default {
    name: 'Logo'
}
</script>
