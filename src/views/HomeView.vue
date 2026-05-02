<script setup>
import { cv, getAge } from '../data/cv.js'
import photo from '../assets/photo.png'
import ContactIcon from '../components/ContactIcon.vue'

const resolve = str => str
    .replace('{{years}}', cv.yearsOfExperience)
    .replace('{{name}}', cv.name)
    .replace('{{title}}', cv.title)

const nameParts = cv.name.split(' ')
const firstName = nameParts[0] ?? 'YOUR'
const lastName = nameParts.slice(1).join(' ') || 'NAME'

const skills = cv.skills.slice(0, 3).map(s => s.category)

function scrollToResume() {
    document.getElementById('resume')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
    <div class="home">

        <!-- LEFT COLUMN -->
        <div class="col-left">
            <div class="brand">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" preserveAspectRatio="xMidYMid meet" style="width: 64px; height: 64px; transform-origin: 50% 50%; transform: scaleX(1) scaleY(1) rotate(0deg);"><path d="M248.89 245.64h-26.35c.69-5.16 3.32-14.12 13.64-14.12 6.75 0 11.97 3.82 12.71 14.12zm136.66-13.88c-.47 0-14.11-1.77-14.11 20s13.63 20 14.11 20c13 0 14.11-13.54 14.11-20 0-21.76-13.66-20-14.11-20zm-243.22 23.76a8.63 8.63 0 0 0-3.29 7.29c0 4.78 2.08 6.05 3.29 7.05 4.7 3.7 15.07 2.12 20.93.95v-16.94c-5.32-1.07-16.73-1.96-20.93 1.65zM640 232c0 87.58-80 154.39-165.36 136.43-18.37 33-70.73 70.75-132.2 41.63-41.16 96.05-177.89 92.18-213.81-5.17C8.91 428.78-50.19 266.52 53.36 205.61 18.61 126.18 76 32 167.67 32a124.24 124.24 0 0 1 98.56 48.7c20.7-21.4 49.4-34.81 81.15-34.81 42.34 0 79 23.52 98.8 58.57C539 63.78 640 132.69 640 232zm-519.55 31.8c0-11.76-11.69-15.17-17.87-17.17-5.27-2.11-13.41-3.51-13.41-8.94 0-9.46 17-6.66 25.17-2.12 0 0 1.17.71 1.64-.47.24-.7 2.36-6.58 2.59-7.29a1.13 1.13 0 0 0-.7-1.41c-12.33-7.63-40.7-8.51-40.7 12.7 0 12.46 11.49 15.44 17.88 17.17 4.72 1.58 13.17 3 13.17 8.7 0 4-3.53 7.06-9.17 7.06a31.76 31.76 0 0 1-19-6.35c-.47-.23-1.42-.71-1.65.71l-2.4 7.47c-.47.94.23 1.18.23 1.41 1.75 1.4 10.3 6.59 22.82 6.59 13.17 0 21.4-7.06 21.4-18.11zm32-42.58c-10.13 0-18.66 3.17-21.4 5.18a1 1 0 0 0-.24 1.41l2.59 7.06a1 1 0 0 0 1.18.7c.65 0 6.8-4 16.93-4 4 0 7.06.71 9.18 2.36 3.6 2.8 3.06 8.29 3.06 10.58-4.79-.3-19.11-3.44-29.41 3.76a16.92 16.92 0 0 0-7.34 14.54c0 5.9 1.51 10.4 6.59 14.35 12.24 8.16 36.28 2 38.1 1.41 1.58-.32 3.53-.66 3.53-1.88v-33.88c.04-4.61.32-21.64-22.78-21.64zM199 200.24a1.11 1.11 0 0 0-1.18-1.18H188a1.11 1.11 0 0 0-1.17 1.18v79a1.11 1.11 0 0 0 1.17 1.18h9.88a1.11 1.11 0 0 0 1.18-1.18zm55.75 28.93c-2.1-2.31-6.79-7.53-17.65-7.53-3.51 0-14.16.23-20.7 8.94-6.35 7.63-6.58 18.11-6.58 21.41 0 3.12.15 14.26 7.06 21.17 2.64 2.91 9.06 8.23 22.81 8.23 10.82 0 16.47-2.35 18.58-3.76.47-.24.71-.71.24-1.88l-2.35-6.83a1.26 1.26 0 0 0-1.41-.7c-2.59.94-6.35 2.82-15.29 2.82-17.42 0-16.85-14.74-16.94-16.7h37.17a1.23 1.23 0 0 0 1.17-.94c-.29 0 2.07-14.7-6.09-24.23zm36.69 52.69c13.17 0 21.41-7.06 21.41-18.11 0-11.76-11.7-15.17-17.88-17.17-4.14-1.66-13.41-3.38-13.41-8.94 0-3.76 3.29-6.35 8.47-6.35a38.11 38.11 0 0 1 16.7 4.23s1.18.71 1.65-.47c.23-.7 2.35-6.58 2.58-7.29a1.13 1.13 0 0 0-.7-1.41c-7.91-4.9-16.74-4.94-20.23-4.94-12 0-20.46 7.29-20.46 17.64 0 12.46 11.48 15.44 17.87 17.17 6.11 2 13.17 3.26 13.17 8.7 0 4-3.52 7.06-9.17 7.06a31.8 31.8 0 0 1-19-6.35 1 1 0 0 0-1.65.71l-2.35 7.52c-.47.94.23 1.18.23 1.41 1.72 1.4 10.33 6.59 22.79 6.59zM357.09 224c0-.71-.24-1.18-1.18-1.18h-11.76c0-.14.94-8.94 4.47-12.47 4.16-4.15 11.76-1.64 12-1.64 1.17.47 1.41 0 1.64-.47l2.83-7.77c.7-.94 0-1.17-.24-1.41-5.09-2-17.35-2.87-24.46 4.24-5.48 5.48-7 13.92-8 19.52h-8.47a1.28 1.28 0 0 0-1.17 1.18l-1.42 7.76c0 .7.24 1.17 1.18 1.17h8.23c-8.51 47.9-8.75 50.21-10.35 55.52-1.08 3.62-3.29 6.9-5.88 7.76-.09 0-3.88 1.68-9.64-.24 0 0-.94-.47-1.41.71-.24.71-2.59 6.82-2.83 7.53s0 1.41.47 1.41c5.11 2 13 1.77 17.88 0 6.28-2.28 9.72-7.89 11.53-12.94 2.75-7.71 2.81-9.79 11.76-59.74h12.23a1.29 1.29 0 0 0 1.18-1.18zm53.39 16c-.56-1.68-5.1-18.11-25.17-18.11-15.25 0-23 10-25.16 18.11-1 3-3.18 14 0 23.52.09.3 4.41 18.12 25.16 18.12 14.95 0 22.9-9.61 25.17-18.12 3.21-9.61 1.01-20.52 0-23.52zm45.4-16.7c-5-1.65-16.62-1.9-22.11 5.41v-4.47a1.11 1.11 0 0 0-1.18-1.17h-9.4a1.11 1.11 0 0 0-1.18 1.17v55.28a1.12 1.12 0 0 0 1.18 1.18h9.64a1.12 1.12 0 0 0 1.18-1.18v-27.77c0-2.91.05-11.37 4.46-15.05 4.9-4.9 12-3.36 13.41-3.06a1.57 1.57 0 0 0 1.41-.94 74 74 0 0 0 3.06-8 1.16 1.16 0 0 0-.47-1.41zm46.81 54.1l-2.12-7.29c-.47-1.18-1.41-.71-1.41-.71-4.23 1.82-10.15 1.89-11.29 1.89-4.64 0-17.17-1.13-17.17-19.76 0-6.23 1.85-19.76 16.47-19.76a34.85 34.85 0 0 1 11.52 1.65s.94.47 1.18-.71c.94-2.59 1.64-4.47 2.59-7.53.23-.94-.47-1.17-.71-1.17-11.59-3.87-22.34-2.53-27.76 0-1.59.74-16.23 6.49-16.23 27.52 0 2.9-.58 30.11 28.94 30.11a44.45 44.45 0 0 0 15.52-2.83 1.3 1.3 0 0 0 .47-1.42zm53.87-39.52c-.8-3-5.37-16.23-22.35-16.23-16 0-23.52 10.11-25.64 18.59a38.58 38.58 0 0 0-1.65 11.76c0 25.87 18.84 29.4 29.88 29.4 10.82 0 16.46-2.35 18.58-3.76.47-.24.71-.71.24-1.88l-2.36-6.83a1.26 1.26 0 0 0-1.41-.7c-2.59.94-6.35 2.82-15.29 2.82-17.42 0-16.85-14.74-16.93-16.7h37.16a1.25 1.25 0 0 0 1.18-.94c-.24-.01.94-7.07-1.41-15.54zm-23.29-6.35c-10.33 0-13 9-13.64 14.12H546c-.88-11.92-7.62-14.13-12.73-14.13z" fill="#000000" style="fill:#000000;stroke:none" stroke="none"/></svg>
                <!-- <svg class="brand-diamond" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">

                </svg> -->
                <!-- <div class="brand-name">
                    <span>{{ firstName }}</span>
                    <span>{{ lastName }}</span>
                </div> -->
            </div>

            <!-- Page dots (absolute) -->
            <!-- <div class="page-dots">
                <span class="dot dot--active"></span>
                <span class="dot"></span>
                <span class="dot"></span>
            </div> -->

            <!-- Headline block -->
            <div class="headline-block">
                <h1 class="headline">
                    <span class="line line--light">Hello,</span>
                    <span class="line line--light">I am {{ cv.name }}</span>
                    <span class="line line--bold"> {{ cv.jobTitle }} </span>
                </h1>
                <!-- <p class="tagline">design a simple life / by {{ cv.name }}</p> -->
            </div>

            <!-- Bottom nav label -->
            <div class="bottom-nav">
                <span>01 / 03</span>
                <!-- <span class="bottom-nav-sep">&nbsp;&nbsp;</span> -->
                <!-- <span>HOME &rsaquo;</span> -->
            </div>

            <!-- Scroll down arrow -->
            <div class="scroll-arrow-wrap" @click="scrollToResume">
                <span class="scroll-arrow-label">Resume</span>
                <button class="scroll-arrow" aria-label="Scroll to Resume">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M9 2v14M3 10l6 6 6-6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </div>
        </div>

        <!-- CENTER COLUMN -->
        <div class="col-center">
            <!-- White L-shaped cutout block -->
            <!-- <div class="white-block"></div> -->
            <!-- Photo -->
            <img class="photo" :src="photo" alt="Profile photo" />
        </div>

        <!-- RIGHT COLUMN -->
        <div class="col-right">

            <!-- Abstract / about section -->
            <div class="abstract-section">
                <p class="abstract-label">About Me</p>
                <p class="abstract-text">{{ resolve(cv.about) }}</p>

                <div class="info-block">
                    <p class="info-label">Contact</p>
                    <ul class="info-list">
                        <li v-for="c in cv.contacts" :key="c.type">
                            <component
                                :is="c.href ? 'a' : 'span'"
                                v-bind="c.href ? { href: c.href, target: ['linkedin','github'].includes(c.type) ? '_blank' : undefined } : {}"
                                class="contact-link"
                            >
                                <ContactIcon :type="c.type" />
                                {{ ['linkedin','github'].includes(c.type) ? c.label : c.display }}
                            </component>
                        </li>
                    </ul>
                </div>

                <div class="info-block">
                    <p class="info-label">Certifications</p>
                    <ul class="info-list">
                        <li v-for="(cert, i) in cv.certifications" :key="i">{{ cert }}</li>
                    </ul>
                </div>

                <div class="info-block">
                    <p class="info-label">Education</p>
                    <ul class="info-list">
                        <li v-for="(edu, i) in cv.education" :key="i">
                            {{ edu.degree }}<br>
                            <span class="info-sub">{{ edu.institution }} · {{ edu.period }}</span>
                        </li>
                    </ul>
                </div>

                <div class="info-block">
                    <p class="info-label">Languages</p>
                    <ul class="info-list">
                        <li v-for="(l, i) in cv.languages" :key="i">
                            {{ l.language }} — <span class="info-sub">{{ l.level }}</span>
                        </li>
                    </ul>
                </div>

                <div class="info-block">
                    <p class="info-label">Age</p>
                    <ul class="info-list">
                        <li>{{ getAge() }} years old</li>
                    </ul>
                </div>
            </div>
        </div>

    </div>
</template>

<style scoped>
/* ── Layout ─────────────────────────────── */
.home {
    display: grid;
    grid-template-columns: 35% 37% 28%;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
}

/* ── LEFT COLUMN ─────────────────────────── */
.col-left {
    background: #fff;
    color: #111;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 32px 48px 32px 48px;
}

/* Brand */
.brand {
    display: flex;
    align-items: center;
    gap: 12px;
}
.brand-diamond {
    flex-shrink: 0;
}
.brand-name {
    display: flex;
    flex-direction: column;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    line-height: 1.3;
    color: #111;
}

/* Page dots */
.page-dots {
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    gap: 8px;
}
.dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    border: 1.5px solid #ccc;
    background: transparent;
    display: block;
}
.dot--active {
    background: #111;
    border-color: #111;
}

/* Headline */
.headline-block {
    display: flex;
    flex-direction: column;
    gap: 16px;
}
.headline {
    display: flex;
    flex-direction: column;
    gap: 0;
    line-height: 1.05;
}
.line {
    display: block;
    font-size: clamp(44px, 5.5vw, 76px);
    letter-spacing: -0.02em;
}
.line--light {
    font-weight: 300;
}
.line--bold {
    font-weight: 800;
    font-size: clamp(48px, 6vw, 82px);
}
.tagline {
    font-size: 10px;
    letter-spacing: 0.2em;
    text-transform: lowercase;
    color: #aaa;
    font-weight: 400;
}

/* Bottom nav */
.bottom-nav {
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #111;
}

/* Scroll arrow */
.scroll-arrow-wrap {
    position: absolute;
    bottom: 32px;
    right: 32px;
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    animation: bounce 2s infinite;
}

.scroll-arrow-wrap:hover {
    animation: none;
    transform: translateY(3px);
}

.scroll-arrow-label {
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #999;
    transition: color 0.2s;
}

.scroll-arrow-wrap:hover .scroll-arrow-label {
    color: #111;
}

.scroll-arrow {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    border: 1.5px solid #ddd;
    background: #fff;
    color: #111;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: border-color 0.2s;
    flex-shrink: 0;
}

.scroll-arrow-wrap:hover .scroll-arrow {
    border-color: #111;
}

@keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50%       { transform: translateY(6px); }
}

/* ── CENTER COLUMN ───────────────────────── */
.col-center {
    position: relative;
    overflow: hidden;
    background: #555;
}

.white-block {
    position: absolute;
    top: 0;
    left: 0;
    width: 45%;
    height: 48%;
    background: #fff;
    z-index: 2;
}

.photo {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
    filter: grayscale(100%);
}

/* ── RIGHT COLUMN ────────────────────────── */
.col-right {
    background: #111;
    color: #fff;
    display: flex;
    flex-direction: column;
    padding: 28px 32px 32px;
    position: relative;
    overflow-y: auto;
    scrollbar-width: none;
}
.col-right::-webkit-scrollbar { display: none; }

/* Top icons row */
.right-top {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 18px;
    flex-shrink: 0;
}
.icon-search,
.icon-menu {
    cursor: pointer;
    opacity: 0.7;
    transition: opacity 0.2s;
}
.icon-search:hover,
.icon-menu:hover {
    opacity: 1;
}

/* Abstract section */
.abstract-section {
    /* flex: 1; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
}

.abstract-label {
    font-size: 1.1rem;
    font-weight: 700;
    letter-spacing: 0.28em;
    color: rgba(255, 255, 255, 0.35);
    text-transform: uppercase;
}

.abstract-text {
    font-size: 1rem;
    line-height: 1.75;
    color: rgba(255, 255, 255, 0.45);
}

/* Skill rows */
.skill-list {
    display: flex;
    flex-direction: column;
    gap: 0;
}

.skill-row {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px 0;
    border-top: 1px solid rgba(255, 255, 255, 0.07);
    cursor: pointer;
    transition: background 0.2s;
    border-radius: 4px;
    padding-left: 4px;
    margin-left: -4px;
}
.skill-row:last-child {
    border-bottom: 1px solid rgba(255, 255, 255, 0.07);
}
.skill-row:hover {
    background: rgba(255, 255, 255, 0.05);
}

.skill-thumb {
    width: 28px;
    height: 28px;
    background: rgba(255, 255, 255, 0.12);
    border-radius: 4px;
    flex-shrink: 0;
}

.skill-info {
    display: flex;
    flex-direction: column;
    gap: 2px;
}

.skill-title {
    font-size: 9px;
    font-weight: 700;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.85);
}

.skill-sub {
    font-size: 9px;
    letter-spacing: 0.1em;
    color: rgba(255, 255, 255, 0.3);
    text-transform: uppercase;
}

/* Vertical watermark */
.vertical-text {
    position: absolute;
    right: -52px;
    top: 50%;
    transform: translateY(-50%) rotate(90deg);
    font-size: 9px;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    opacity: 0.2;
    white-space: nowrap;
    color: #fff;
    pointer-events: none;
}

/* Social links */
.social-links {
    display: flex;
    gap: 16px;
    justify-content: flex-end;
    flex-shrink: 0;
}

.social-links a {
    font-size: 9px;
    font-weight: 700;
    letter-spacing: 0.18em;
    color: rgba(255, 255, 255, 0.4);
    text-decoration: none;
    text-transform: uppercase;
    transition: color 0.2s;
}
.social-links a:hover {
    color: rgba(255, 255, 255, 0.9);
}

/* Info blocks */
.info-block {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding-top: 16px;
    border-top: 1px solid rgba(255,255,255,0.07);
}

.info-label {
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.26em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.3);
    margin: 0;
}

.info-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 6px;
}

.info-list li {
    font-size: 13px;
    line-height: 1.6;
    color: rgba(255,255,255,0.6);
}

.info-sub {
    font-size: 12px;
    color: rgba(255,255,255,0.35);
}

.contact-link {
    display: flex;
    align-items: center;
    gap: 8px;
    color: rgba(255,255,255,0.6);
    text-decoration: none;
    transition: color 0.2s;
}

.contact-link:hover {
    color: #fff;
}

.contact-link svg {
    flex-shrink: 0;
    opacity: 0.5;
}
</style>
