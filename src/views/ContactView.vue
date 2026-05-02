<script setup>
import { cv } from '../data/cv.js'
import ContactIcon from '../components/ContactIcon.vue'
</script>

<template>
    <div class="contact">

        <!-- LEFT — dark, big heading -->
        <div class="col-left">
            <div class="left-inner">

                <div class="heading-block">
                    <h1>
                        <span class="line light">Let's</span>
                        <span class="line light">Work</span>
                        <span class="line bold">Together.</span>
                    </h1>
                    <p class="sub">Have a project in mind or just want to connect?<br>Feel free to reach out.</p>
                </div>

                <div class="contact-cards">
                    <component
                        v-for="c in cv.contacts"
                        :key="c.type"
                        :is="c.href ? 'a' : 'div'"
                        v-bind="c.href ? { href: c.href, target: ['linkedin','github'].includes(c.type) ? '_blank' : undefined } : {}"
                        :class="['card', !c.href ? 'no-link' : '']"
                    >
                        <div class="card-icon">
                            <ContactIcon :type="c.type" style="width:20px;height:20px" />
                        </div>
                        <div>
                            <p class="card-label">{{ c.label }}</p>
                            <p class="card-value">{{ c.display }}</p>
                        </div>
                        <svg v-if="c.href" class="card-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M7 17L17 7M7 7h10v10"/>
                        </svg>
                    </component>
                </div>

                <div class="page-label">03 / 03</div>

            </div>
        </div>

        <!-- RIGHT — white, quote + name -->
        <div class="col-right">
            <div class="right-inner">
                <div class="quote-block">
                    <span class="quote-mark">"</span>
                    <p class="quote-text">Great code is not written, it's refined — through collaboration, curiosity, and care.</p>
                </div>

                <div class="name-block">
                    <p class="name-big">{{ cv.name }}</p>
                    <p class="name-title">{{ cv.title }}</p>
                </div>

                <div class="availability">
                    <span :class="cv.availableForWork ? 'dot-green' : 'dot-gray'"></span>
                    {{ cv.availableForWork ? 'Available for new opportunities' : 'Currently employed, not looking — but always glad to connect!' }}
                </div>
            </div>

            <span class="vertical-text">{{ cv.name.toUpperCase() }} · {{ cv.title.toUpperCase() }}</span>
        </div>

    </div>
</template>

<style scoped>
.contact {
    display: grid;
    grid-template-columns: 55% 45%;
    height: 100vh;
    width: 100vw;
    overflow: hidden;

}

/* ── LEFT ────────────────────────────────── */
.col-left {
    background: #111;
    color: #fff;
    overflow-y: auto;
    scrollbar-width: none;
    display: flex;
    align-items: center;
}
.col-left::-webkit-scrollbar { display: none; }

.left-inner {
    padding: 52px 64px;
    display: flex;
    flex-direction: column;
    gap: 40px;
    width: 100%;
    height: 100%;
    justify-content: space-between;
}

.page-label {
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.18em;
    color: rgba(255,255,255,0.25);
    text-transform: uppercase;
}

.heading-block {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

h1 {
    display: flex;
    flex-direction: column;
    line-height: 1.05;
    margin: 0;
}

.line {
    display: block;
    font-size: clamp(42px, 5vw, 68px);
    letter-spacing: -0.02em;
}
.line.light { font-weight: 300; }
.line.bold  { font-weight: 800; }

.sub {
    font-size: 13px;
    line-height: 1.7;
    color: rgba(255,255,255,0.4);
    margin: 0;
}

/* Cards */
.contact-cards {
    display: flex;
    flex-direction: column;
    gap: 6px;
}

.card {
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 20px 22px;
    border-radius: 4px;
    background: rgba(255,255,255,0.04);
    text-decoration: none;
    color: #fff;
    transition: background 0.2s;
    cursor: pointer;
    border: 1px solid rgba(255,255,255,0.06);
}

.card:hover:not(.no-link) {
    background: rgba(255,255,255,0.09);
    border-color: rgba(255,255,255,0.12);
}

.card-icon {
    width: 46px;
    height: 46px;
    border-radius: 10px;
    background: rgba(255,255,255,0.08);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    color: rgba(255,255,255,0.7);
}

.card > div:nth-child(2) {
    flex: 1;
    min-width: 0;
}

.card-label {
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.3);
    margin: 0 0 4px;
}

.card-value {
    font-size: 15px;
    color: rgba(255,255,255,0.85);
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.card-arrow {
    color: rgba(255,255,255,0.25);
    flex-shrink: 0;
    transition: color 0.2s, transform 0.2s;
    width: 18px;
    height: 18px;
}

.card:hover .card-arrow {
    color: rgba(255,255,255,0.7);
    transform: translate(2px, -2px);
}

/* ── RIGHT ───────────────────────────────── */
.col-right {
    background: #fff;
    color: #111;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.right-inner {
    padding: 52px 56px;
    display: flex;
    flex-direction: column;
    gap: 48px;
    width: 100%;
}

.quote-block {
    position: relative;
    padding-left: 20px;
    border-left: 2px solid #111;
}

.quote-mark {
    font-size: 64px;
    line-height: 0;
    position: absolute;
    top: 32px;
    left: -8px;
    color: #111;
    font-family: Georgia, serif;
    opacity: 0.08;
}

.quote-text {
    font-size: 20px;
    font-weight: 300;
    line-height: 1.7;
    letter-spacing: -0.01em;
    color: #111;
    margin: 0;
    font-style: italic;
}

.name-block {
    display: flex;
    flex-direction: column;
    gap: 6px;
}

.name-big {
    font-size: 34px;
    font-weight: 700;
    letter-spacing: -0.02em;
    margin: 0;
    color: #111;
}

.name-title {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #aaa;
    margin: 0;
}

.availability {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 15px;
    font-weight: 500;
    color: #444;
    letter-spacing: 0.02em;
}

.dot-green {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #22c55e;
    flex-shrink: 0;
    box-shadow: 0 0 0 3px rgba(34,197,94,0.2);
    animation: pulse 2s infinite;
}

.dot-gray {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #f97316;
    flex-shrink: 0;
    box-shadow: 0 0 0 3px rgba(249,115,22,0.2);
}

@keyframes pulse {
    0%, 100% { box-shadow: 0 0 0 3px rgba(34,197,94,0.2); }
    50%       { box-shadow: 0 0 0 6px rgba(34,197,94,0.08); }
}

.vertical-text {
    position: absolute;
    right: -80px;
    top: 50%;
    transform: translateY(-50%) rotate(90deg);
    font-size: 9px;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    opacity: 0.1;
    white-space: nowrap;
    pointer-events: none;
}
</style>
