<script setup>
import HomeView from './views/HomeView.vue'
import ResumeView from './views/ResumeView.vue'
import ContactView from './views/ContactView.vue'
</script>

<template>
    <div class="scroll-wrap">
        <section class="snap-page" id="home"><HomeView /></section>
        <section class="snap-page" id="resume"><ResumeView /></section>
        <section class="snap-page" id="contact"><ContactView /></section>
    </div>
</template>

<style>
*, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html, body {
    width: 100%;
    height: 100%;
    height: 100dvh;
    overflow: hidden;
}

.scroll-wrap {
    height: 100vh;
    height: 100dvh;
    overflow-y: scroll;
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;
}

.snap-page {
    height: 100vh;
    height: 100dvh;
    width: 100vw;
    scroll-snap-align: start;
    scroll-snap-stop: always;
    overflow: hidden;
}

@media (max-width: 768px) {
    .snap-page {
        height: auto;
        min-height: 100vh;
        min-height: 100dvh;
        overflow-y: auto;
    }
}
</style>
