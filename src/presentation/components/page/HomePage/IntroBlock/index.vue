<template>
    <section class="section">
        <div class="content">
            <h1 class="title">
                Style<br /><span class="offset-right">in </span
                ><span class="highlight">any</span>every<br />situation
            </h1>
            <p class="subtitle">
                Discover our collection of clothing and accessories that will
                help you express
                <br />yourself in any setting and emphasize your
                <span class="highlight">unique and distinctive style</span>
            </p>
        </div>
    </section>
</template>

<script setup lang="ts">
defineOptions({ name: 'IntroBlock' });
</script>

<style lang="scss" scoped>
.section {
    background-image: url('@presentation/assets/image/mainBackground.jpeg');
    background-size: cover;
    background-position: center;

    @include container-gutter;
    @include flex-center;
    @include height100vh;
}

.content {
    display: grid;
    row-gap: 20px;
    color: $color-white;
}

.offset-right {
    margin-left: 100px;

    @include -lower(sm) {
        margin-left: 50px;
    }
}

.title {
    font-size: 100px;

    @include -lower(md) {
        font-size: 75px;
    }

    @include -lower(sm) {
        font-size: 55px;
    }
}

.subtitle {
    @include h1;

    @include -lower(sm) {
        @include h3;
    }
}

.highlight {
    color: $color-orange;
}
</style>
