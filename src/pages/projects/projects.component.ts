import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  template: `
    <section class="page-hero">
      <div class="container">
        <div class="page-hero__inner animate-in">
          <span class="eyebrow">Портфолио</span>
          <h1 class="page-hero__title">Мои проекты</h1>
          <p class="page-hero__subtitle">Курсовые, кейсы, редизайн и учебные проекты.</p>
        </div>
      </div>
    </section>

    <section class="section" style="padding-top: 0;">
      <div class="container">
        <div class="grid grid--2">
          @for (p of projects; track p; let i = $index) {
            <div class="card item-card animate-in" [style.animation-delay]="i * 0.06 + 's'">
              <div class="item-card__image">
                @if (p.image) {
                  <img [src]="p.image" [alt]="p.title" loading="lazy" />
                } @else {
                  <div class="item-card__placeholder"><span>Нет фото</span></div>
                }
                <span class="item-card__badge" [style.background]="p.bg" [style.color]="p.color">{{ p.tag }}</span>
              </div>
              <div class="item-card__body">
                <div class="item-card__head">
                  <h3 class="item-card__title">{{ p.title }}</h3>
                  <span class="item-card__year">{{ p.year }}</span>
                </div>
                <p class="item-card__desc">{{ p.desc }}</p>
                <div class="project__stack">
                  @for (t of p.stack; track t) {
                    <span class="project__chip">{{ t }}</span>
                  }
                </div>
                <div class="item-card__links">
                  @if (p.repo) { <a [href]="p.repo" target="_blank" rel="noopener">GitHub →</a> }
                  @if (p.demo) { <a [href]="p.demo" target="_blank" rel="noopener">Демо →</a> }
                </div>
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
    .project__stack { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 20px; }
    .project__chip { font-size: 12px; padding: 3px 10px; background: var(--n-100); color: var(--n-700); border-radius: var(--r-full); font-weight: 500; }
  `],
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Курсовая «Документооборот»',
      desc: 'Веб-приложение для учёта документов: авторизация, роли, отчёты, диаграммы.',
      tag: 'Курсовая', year: '2026',
      stack: ['Django'],
      image: 'images/projects/dok.png',
      bg: 'var(--c-primary-50)', color: 'var(--c-primary-700)',
    },
    {
      title: 'Курсовая (индивидуальная)',
      desc: 'Индивидуальный проект: сайт с админ-панелью, регистрацией, триггерами.',
      tag: 'Курсовая', year: '2026',
      stack: ['Laravel', 'MySQL'],
      repo: 'https://github.com/nastya21totot-a11y/restaurant', demo: '',
      image: 'images/projects/ind.jpg',
      bg: 'var(--c-primary-50)', color: 'var(--c-primary-700)',
    },
  ];
}