import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  template: `
    <section class="page-hero">
      <div class="container">
        <div class="page-hero__inner animate-in">
          <span class="eyebrow">Портфолио</span>
          <h1 class="page-hero__title">Мои проекты</h1>
          <p class="page-hero__subtitle">
            Курсовые, кейсы, редизайн и учебные проекты. У каждого — репозиторий, стек и описание.
          </p>
        </div>
      </div>
    </section>

    <section class="section" style="padding-top: 0;">
      <div class="container">
        <div class="grid grid--2">
          @for (p of projects; track p; let i = $index) {
            <div class="card project animate-in" [style.animation-delay]="i * 0.06 + 's'">
              <div class="project__head">
                <span class="project__tag" [style.background]="p.bg" [style.color]="p.color">{{ p.tag }}</span>
                <span class="project__year">{{ p.year }}</span>
              </div>
              <h3 class="project__title">{{ p.title }}</h3>
              <p class="project__desc">{{ p.desc }}</p>
              <div class="project__stack">
                @for (t of p.stack; track t) {
                  <span class="project__chip">{{ t }}</span>
                }
              </div>
              <div class="project__links">
                @if (p.repo) { <a [href]="p.repo" target="_blank" rel="noopener">GitHub →</a> }
                @if (p.demo) { <a [href]="p.demo" target="_blank" rel="noopener">Демо →</a> }
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .page-hero { padding: 80px 0 48px; background: linear-gradient(180deg, var(--c-primary-50), transparent); }
    .page-hero__inner { max-width: 680px; }
    .page-hero__title { font-family: var(--font-display); font-size: clamp(32px, 5vw, 48px); font-weight: 800; line-height: 1.15; letter-spacing: -0.03em; margin-bottom: 20px; }
    .page-hero__subtitle { font-size: 18px; color: var(--text-muted); line-height: 1.7; }

    .project__head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
    .project__tag { font-size: 12px; font-weight: 600; padding: 4px 10px; border-radius: var(--r-full); text-transform: uppercase; letter-spacing: 0.04em; }
    .project__year { font-size: 13px; color: var(--text-subtle); font-weight: 600; }
    .project__title { font-family: var(--font-display); font-size: 20px; font-weight: 700; margin-bottom: 10px; }
    .project__desc { font-size: 15px; color: var(--text-muted); line-height: 1.6; margin-bottom: 16px; }
    .project__stack { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 20px; }
    .project__chip { font-size: 12px; padding: 3px 10px; background: var(--n-100); color: var(--n-700); border-radius: var(--r-full); font-weight: 500; }
    .project__links { display: flex; gap: 16px; }
    .project__links a { font-size: 14px; font-weight: 600; color: var(--c-primary-600); }
    .project__links a:hover { text-decoration: underline; }
  `],
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Курсовая «Документооборот»',
      desc: 'Веб-приложение для учёта документов: авторизация, роли, отчёты, диаграммы Use Case / ER / User Flow.',
      tag: 'Курсовая',
      year: '2026',
      stack: ['Django', 'PostgreSQL', 'DBeaver'],
      repo: 'https://github.com/твой-логин/course-document-flow',
      demo: '',
      bg: 'var(--c-primary-50)', color: 'var(--c-primary-700)',
    },
    {
      title: 'Курсовая (индивидуальная)',
      desc: 'Индивидуальный проект: сайт с админ-панелью, регистрацией, триггерами и модулем анализа.',
      tag: 'Курсовая',
      year: '2026',
      stack: ['Laravel', 'MySQL', 'Figma'],
      repo: 'https://github.com/твой-логин/course-individual',
      demo: '',
      bg: 'var(--c-primary-50)', color: 'var(--c-primary-700)',
    },
    {
      title: 'Редизайн «Цифровые решения»',
      desc: 'Анализ предметной области, юзабилити-аудит, прототип в Figma, диаграммы и отчёт.',
      tag: 'Кейс',
      year: '2026',
      stack: ['Figma', 'Webflow', 'Аналитика'],
      repo: 'https://github.com/твой-логин/digital-solutions-redesign',
      demo: '',
      bg: '#f3e8ff', color: '#7c3aed',
    },
    {
      title: 'СКУД «Цифровые решения»',
      desc: 'Система контроля доступа: БД, статистика, резервное копирование, модуль анализа.',
      tag: 'Кейс',
      year: '2026',
      stack: ['PostgreSQL', 'Python', 'REST API'],
      repo: 'https://github.com/твой-логин/digital-solutions-skud',
      demo: '',
      bg: '#f3e8ff', color: '#7c3aed',
    },
    {
      title: 'VK Case',
      desc: 'Решение кейса от VK Education — от идеи до прототипа и защиты.',
      tag: 'Кейс VK',
      year: '2025',
      stack: ['TypeScript', 'Node.js'],
      repo: 'https://github.com/твой-логин/vk-case',
      demo: '',
      bg: 'var(--c-accent-50)', color: 'var(--c-accent-700)',
    },
    {
      title: 'Траектория будущего 2026',
      desc: 'Проект для олимпиады: код, документация, презентация.',
      tag: 'Олимпиада',
      year: '2026',
      stack: ['Python', 'Docs'],
      repo: 'https://github.com/твой-логин/tb-future-2026',
      demo: '',
      bg: 'var(--c-warning-50)', color: 'var(--c-warning-600)',
    },
  ];
}