<script setup>
import { cv, getAge } from '../data/cv.js'
import ContactIcon from '../components/ContactIcon.vue'

const resolve = str => str
    .replace('{{years}}', cv.yearsOfExperience)
    .replace('{{name}}', cv.name)
    .replace('{{title}}', cv.title)

function scrollToContact() {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
}

function downloadPdf() {
    const resumeEl = document.getElementById('resume')
    const iframe = document.createElement('iframe')
    iframe.style.cssText = 'position:fixed;top:0;left:0;width:0;height:0;border:none;'
    document.body.appendChild(iframe)

    const doc = iframe.contentDocument
    doc.open()
    doc.write(`<!DOCTYPE html><html><head>
        <style>
            * { box-sizing: border-box; margin: 0; padding: 0; }
            body { width: 100%; }
        </style>
        ${[...document.styleSheets].map(s => {
            try { return `<style>${[...s.cssRules].map(r => r.cssText).join('\n')}</style>` }
            catch { return s.href ? `<link rel="stylesheet" href="${s.href}">` : '' }
        }).join('')}
        <style>
            /* override scroll constraints for print */
            body, html { height: auto !important; overflow: visible !important; }
            .resume { height: auto !important; overflow: visible !important; min-height: 100vh; }
            .sidebar { height: auto !important; overflow: visible !important; }
            .sidebar-inner { min-height: unset !important; }
            .content { height: auto !important; overflow: visible !important; }
            .snap-page { height: auto !important; overflow: visible !important; }
        </style>
    </head><body>${resumeEl.innerHTML}</body></html>`)
    doc.close()

    iframe.onload = () => {
        iframe.contentWindow.print()
        setTimeout(() => document.body.removeChild(iframe), 1000)
    }
}
</script>

<template>
    <div class="resume">

        <!-- LEFT sidebar -->
        <aside class="sidebar">
            <div class="sidebar-inner">

                <div class="sidebar-name">
                    <img src="../assets/photo.png" class="sidebar-photo" alt="Profile photo" />
                    <h1>{{ cv.name }}</h1>
                    <p class="sidebar-title">{{ cv.title }}</p>
                </div>

                <div class="sidebar-section">
                    <h3 class="sidebar-label">Contact</h3>
                    <ul class="contact-list">
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

                <div class="sidebar-section">
                    <h3 class="sidebar-label">Certifications</h3>
                    <ul class="cert-list">
                        <li v-for="(cert, i) in cv.certifications" :key="i">{{ cert }}</li>
                    </ul>
                </div>

                <div class="sidebar-section">
                    <h3 class="sidebar-label">Languages</h3>
                    <ul class="lang-list">
                        <li v-for="(l, i) in cv.languages" :key="i">
                            <span class="lang-name">{{ l.language }}</span>
                            <span class="lang-level">{{ l.level }}</span>
                        </li>
                    </ul>
                </div>

                <div class="sidebar-section">
                    <h3 class="sidebar-label">Age</h3>
                    <p class="lang-name">{{ getAge() }} <span class="lang-level">years old</span></p>
                </div>

                <div class="sidebar-section">
                    <h3 class="sidebar-label">Education</h3>
                    <div v-for="(edu, i) in cv.education" :key="i" class="edu-item">
                        <p class="edu-degree">{{ edu.degree }}</p>
                        <p class="edu-inst">{{ edu.institution }}</p>
                        <p class="edu-period">{{ edu.period }}</p>
                    </div>
                </div>

                <div class="sidebar-footer">
                    <button class="download-btn" @click="downloadPdf">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                        Download PDF
                    </button>
                    <span class="page-label">02 / 03</span>
                </div>

            </div>
        </aside>

        <!-- MAIN content -->
        <main class="content">

            <section class="section">
                <h2 class="section-title">Summary</h2>
                <p class="summary-text">{{ resolve(cv.summary) }}</p>
            </section>

            <section class="section">
                <h2 class="section-title">Experience</h2>
                <div class="exp-list">
                    <div v-for="(job, i) in cv.experience" :key="i" class="exp-item">
                        <div class="exp-header">
                            <div>
                                <h3 class="exp-role">{{ job.role }}</h3>
                                <component
                                    :is="job.link ? 'a' : 'p'"
                                    v-bind="job.link ? { href: job.link, target: '_blank' } : {}"
                                    class="exp-company"
                                >{{ job.company }}<svg v-if="job.link" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-left:4px;opacity:0.5"><path d="M7 17L17 7M7 7h10v10"/></svg></component>
                            </div>
                            <span class="exp-period">{{ job.period }}</span>
                        </div>
                        <ul class="exp-bullets">
                            <li v-for="(b, j) in job.bullets" :key="j">{{ b }}</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section class="section">
                <h2 class="section-title">Technical Skills</h2>
                <div class="skills-grid">
                    <div v-for="(group, i) in cv.skills" :key="i" class="skill-group">
                        <h4 class="skill-category">{{ group.category }}</h4>
                        <div class="skill-tags">
                            <span v-for="(item, j) in group.items" :key="j" class="tag">{{ item }}</span>
                        </div>
                    </div>
                </div>
            </section>

        </main>

        <!-- Scroll to Contact arrow -->
        <div class="scroll-arrow-wrap" @click="scrollToContact">
            <span class="scroll-arrow-label">Contact</span>
            <button class="scroll-arrow" aria-label="Scroll to Contact">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M9 2v14M3 10l6 6 6-6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </div>

    </div>
</template>

<style scoped>
.resume {
    display: grid;
    grid-template-columns: 400px 1fr;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    position: relative;

    background: #fff;
}

/* ── SIDEBAR ─────────────────────────────── */
.sidebar {
    background: #111;
    color: #fff;
    overflow-y: auto;
    scrollbar-width: none;
}
.sidebar::-webkit-scrollbar { display: none; }

.sidebar-inner {
    padding: 48px 32px;
    display: flex;
    flex-direction: column;
    gap: 36px;
    min-height: 100%;
    justify-content: space-between;
}

.sidebar-footer {
    margin-top: auto;
    padding-top: 24px;
    border-top: 1px solid rgba(255,255,255,0.08);
    display: flex;
    flex-direction: column;
    gap: 14px;
}

.download-btn {
    display: flex;
    align-items: center;
    gap: 8px;
    background: transparent;
    border: 1px solid rgba(255,255,255,0.2);
    color: rgba(255,255,255,0.6);
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    padding: 8px 14px;
    cursor: pointer;
    transition: all 0.2s;
    width: 100%;
}

.download-btn:hover {
    background: rgba(255,255,255,0.08);
    color: #fff;
    border-color: rgba(255,255,255,0.5);
}

.download-btn svg {
    flex-shrink: 0;
    opacity: 0.6;
}

.page-label {
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.18em;
    color: rgba(255,255,255,0.25);
    text-transform: uppercase;
    margin: 0 0 16px;
}

.sidebar-photo {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
    object-position: center top;
    filter: grayscale(100%);
    border: 2px solid rgba(255,255,255,0.15);
    margin-bottom: 16px;
    display: block;
}

.sidebar-name h1 {
    font-size: 26px;
    font-weight: 700;
    letter-spacing: -0.02em;
    color: #fff;
    margin: 0 0 6px;
    line-height: 1.2;
}

.sidebar-title {
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.4);
    margin: 0;
}

.sidebar-label {
    font-size: 17px;
    font-weight: 700;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.3);
    margin: 0 0 14px;
    padding-bottom: 8px;
    border-bottom: 1px solid rgba(255,255,255,0.08);
}

.contact-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 9px;
}

.contact-list li {
    font-size: 13px;
    color: rgba(255,255,255,0.6);
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

.cert-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.cert-list li {
    font-size: 14px;
    color: rgba(255,255,255,0.6);
    padding-left: 12px;
    position: relative;
    line-height: 1.5;
}

.cert-list li::before {
    content: '';
    position: absolute;
    left: 0;
    top: 7px;
    width: 4px;
    height: 4px;
    background: rgba(255,255,255,0.3);
    border-radius: 50%;
}

.lang-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.lang-name {
    display: block;
    font-size: 17px;
    font-weight: 600;
    color: rgba(255,255,255,0.8);
}

.lang-level {
    font-size: 14px;
    color: rgba(255,255,255,0.35);
}

.edu-item {
    display: flex;
    flex-direction: column;
    gap: 3px;
}

.edu-degree {
    font-size: 17px;
    font-weight: 600;
    color: rgba(255,255,255,0.8);
    margin: 0;
    line-height: 1.4;
}

.edu-inst {
    font-size: 14px;
    color: rgba(255,255,255,0.45);
    margin: 0;
}

.edu-period {
    font-size: 14px;
    color: rgba(255,255,255,0.3);
    letter-spacing: 0.06em;
    margin: 0;
}

/* ── MAIN CONTENT ────────────────────────── */
.content {
    overflow-y: auto;
    padding: 48px 56px;
    display: flex;
    flex-direction: column;
    gap: 44px;
    scrollbar-width: thin;
    scrollbar-color: #ddd transparent;
}

.section-title {
    font-size: 17px;
    font-weight: 700;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: #999;
    margin: 0 0 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid #eee;
}

.summary-text {
    font-size: 17px;
    line-height: 1.85;
    color: #444;
}

/* Experience */
.exp-list {
    display: flex;
    flex-direction: column;
    gap: 32px;
}

.exp-item {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.exp-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 16px;
}

.exp-role {
    font-size: 17px;
    font-weight: 700;
    color: #111;
    margin: 0 0 3px;
    letter-spacing: -0.01em;
}

.exp-company {
    font-size: 17px;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #999;
    margin: 0;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    transition: color 0.2s;
}

a.exp-company:hover {
    color: #111;
}

.exp-period {
    font-size: 14px;
    color: #bbb;
    letter-spacing: 0.06em;
    white-space: nowrap;
    padding-top: 3px;
}

.exp-bullets {
    padding-left: 16px;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0;
}

.exp-bullets li {
    font-size: 14px;
    line-height: 1.7;
    color: #555;
}

/* Skills */
.skills-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px 32px;
}

.skill-category {
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #111;
    margin: 0 0 10px;
}

.skill-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
}

.tag {
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.06em;
    padding: 4px 10px;
    border: 1px solid #e0e0e0;
    border-radius: 2px;
    color: #444;
    background: #fafafa;
}

/* ── Scroll arrow ────────────────────────── */
.scroll-arrow-wrap {
    position: absolute;
    bottom: 32px;
    right: 32px;
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    animation: bounce 2s infinite;
    z-index: 10;
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

/* ── MOBILE ──────────────────────────────── */
@media (max-width: 768px) {
    .resume {
        grid-template-columns: 1fr;
        height: auto;
        min-height: 100vh;
        overflow: visible;
    }

    .sidebar {
        overflow-y: visible;
        width: 100%;
    }

    .sidebar-inner {
        padding: 32px 24px;
        min-height: unset;
        justify-content: flex-start;
    }

    .sidebar-footer {
        margin-top: 16px;
    }

    .content {
        padding: 32px 24px;
        overflow-y: visible;
    }

    .scroll-arrow-wrap {
        position: static;
        margin: 24px 24px 32px auto;
        animation: none;
        display: flex;
        justify-content: flex-end;
    }

    .exp-header {
        flex-direction: column;
        gap: 4px;
    }

    .exp-period {
        white-space: normal;
    }

    .skills-grid {
        grid-template-columns: 1fr;
    }
}
</style>
