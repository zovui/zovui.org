<template>
    <div class="document-color" :style="styles" :class="classes">
        <p class="document-color-name">{{ name }}</p>
        <p class="document-color-value">{{ color }}</p>
    </div>
</template>

<style lang="scss">
.document-color {
    margin-right: 20px;
    flex: 1;
    padding: 16px;
    font-size: 16px;
    transition: 0.3s height ease, 0.3s box-shadow ease;
    &:hover {
        box-shadow: 0 0 15px 0 var(--color-shadow);
    }
    &:last-child {
        margin-right: 0;
    }
    &--dark {
        .document-color-name,
        .document-color-value {
            color: var(--color-title);
        }
    }
    &-name,
    &-value {
        color: var(--color-background);
    }
    &-value {
        font-size: 14px;
        opacity: 0.7;
    }
}
</style>

<script>
export default {
    name: 'DocumentColor',
    props: {
        name: String,
        color: String,
        dark: Boolean
    },
    computed: {
        classes() {
            const classes = []
            if (this.dark) {
                classes.push('document-color--dark')
            }
            return classes
        },
        styles() {
            return {
                backgroundColor: this.color
            }
        }
    }
}
</script>
