<template>
    <footer class="footer">
        <p class="footer-text">{{ COPYRIGHT_TEXT }}</p>
    </footer>
</template>

<script setup lang="ts">
import COPYRIGHT_TEXT from './content.ts';

defineOptions({ name: 'Footer' });
</script>

<style lang="scss" scoped>
.footer {
    height: $footer-height;
    background-color: $color-green;
    border-radius: 10px 10px 0 0;

    @include flex-center;
}

.footer-text {
    color: $color-grayishGreen;
}
</style>
