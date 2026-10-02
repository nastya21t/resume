import { Component } from '@angular/core';

@Component({
  selector: 'app-practice',
  template: `
    <section class="page-hero">
      <div class="container">
        <div class="page-hero__inner animate-in">
          <span class="eyebrow">Опыт</span>
          <h1 class="page-hero__title">Практика и стажировки</h1>
          <p class="page-hero__subtitle">Стажировки, документы, кейсы и задания от организаций.</p>
        </div>
      </div>
    </section>

    <section class="section" style="padding-top: 0;">
      <div class="container">
        <div class="grid grid--2">
          @for (p of items; track p) {
            <div class="card">
              <div class="practice__head">
                <span class="practice__badge" [style.background]="p.bg" [style.color]="p.color">{{ p.tag }}</span>
                <span class="practice__year">{{ p.year }}</span>
              </div>
              <h3 class="practice__title">{{ p.title }}</h3>
              <p class="practice__desc">{{ p.desc }}</p>
              <ul class="practice__list">
                @for (l of p.points; track l) {
                  <li>{{ l }}</li>
                }
              </ul>
              <div class="practice__links">
                @for (link of p.links; track link.href) {
                  <a [href]="link.href" target="_blank" rel="noopener">{{ link.label }} →</a>
                }
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

    .practice__head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
    .practice__badge { font-size: 12px; font-weight: 600; padding: 4px 10px; border-radius: var(--r-full); text-transform: uppercase; letter-spacing: 0.04em; }
    .practice__year { font-size: 13px; color: var(--text-subtle); font-weight: 600; }
    .practice__title { font-family: var(--font-display); font-size: 20px; font-weight: 700; margin-bottom: 10px; }
    .practice__desc { font-size: 15px; color: var(--text-muted); line-height: 1.6; margin-bottom: 16px; }
    .practice__list { list-style: none; padding: 0; margin: 0 0 20px; }
    .practice__list li { font-size: 14px; color: var(--n-700); padding: 4px 0 4px 20px; position: relative; }
    .practice__list li::before { content: '✓'; position: absolute; left: 0; color: var(--c-accent-500); font-weight: 700; }
    .practice__links { display: flex; gap: 16px; flex-wrap: wrap; }
    .practice__links a { font-size: 14px; font-weight: 600; color: var(--c-primary-600); }
    .practice__links a:hover { text-decoration: underline; }
  `],
})
export class PracticeComponent {
  items = [
    {
      tag: 'Практика',
      year: '2026',
      title: 'Практика в «Цифровых решениях»',
      desc: 'Разработка сайта для организации: СКУД, редизайн, аналитика.',
      points: [
        'Резервное копирование БД СКУД',
        'Анализ эффективности и сбор статистики',
        'Улучшение юзабилити по книге «Не заставляйте меня думать»',
        'Маркетинговый лендинг на Webflow/Framer',
        'Соответствие 152-ФЗ, архитектурная документация',
      ],
      links: [
        { label: 'Редизайн', href: 'https://github.com/твой-логин/digital-solutions-redesign' },
        { label: 'СКУД', href: 'https://github.com/твой-логин/digital-solutions-skud' },
      ],
      bg: 'var(--c-primary-50)', color: 'var(--c-primary-700)',
    },
    {
      tag: 'Стажировка',
      year: '2026',
      title: 'Стажировки Яндекса',
      desc: 'Подача заявок и прохождение этапов отбора.',
      points: ['Скриншоты заявок', 'Тестовые задания', 'Этапы отбора'],
      links: [
        { label: 'GitHub', href: 'https://github.com/твой-логин/resume/tree/main/assets/internships/yandex' },
        { label: 'Яндекс Стажировки', href: 'https://yandex.ru/yaintern' },
      ],
      bg: 'var(--c-accent-50)', color: 'var(--c-accent-700)',
    },
    {
      tag: 'Марафон',
      year: '2026',
      title: 'Цифровой марафон Сбера',
      desc: 'Участие в марафоне, сертификаты и скриншоты.',
      points: ['Сертификат', 'Скриншоты этапов'],
      links: [
        { label: 'GitHub', href: 'https://github.com/твой-логин/resume/tree/main/assets/internships/sber-marathon' },
        { label: 'Сайт', href: 'https://www.sberbank.ru/ru/person/it-marathon' },
      ],
      bg: 'var(--c-warning-50)', color: 'var(--c-warning-600)',
    },
    {
      tag: 'Документы',
      year: '2026',
      title: 'Документы практики',
      desc: 'Договор, отчёты, резюме.',
      points: ['Резюме (PDF)', 'Договор', 'Отчёты'],
      links: [
        { label: 'Резюме', href: 'assets/docs/resume.pdf' },
        { label: 'GitHub', href: 'https://github.com/твой-логин/practice-docs' },
      ],
      bg: 'var(--n-100)', color: 'var(--n-700)',
    },
  ];
}