<template>
    <footer class="footer">
        <p class="footer-text">{{ COPYRIGHT_TEXT }}</p>
    </footer>
</template>

<script setup lang="ts">
import COPYRIGHT_TEXT from './content.ts';

defineOptions({ name: 'BaseFooter' });
</script>

<style lang="scss" scoped>
.footer {
    height: $footer-height;
    background-color: $color-green;
    border-radius: 15px 15px 0 0;
    z-index: var(--z-sticky);

    @include flex-center;
    @include rounded-corners;
}

.footer-text {
    color: $color-grayishGreen;
}
</style>
