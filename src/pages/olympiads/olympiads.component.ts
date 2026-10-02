import { Component } from '@angular/core';

@Component({
  selector: 'app-olympiads',
  template: `
    <section class="page-hero">
      <div class="container">
        <div class="page-hero__inner animate-in">
          <span class="eyebrow">Достижения</span>
          <h1 class="page-hero__title">Олимпиады и конкурсы</h1>
          <p class="page-hero__subtitle">Участие в профильных олимпиадах и чемпионатах. Сертификаты и проекты — в репозитории портфолио.</p>
        </div>
      </div>
    </section>

    <section class="section" style="padding-top: 0;">
      <div class="container">
        <div class="grid grid--2">
          @for (o of items; track o; let i = $index) {
            <div class="card animate-in" [style.animation-delay]="i * 0.06 + 's'">
              <div class="olymp__head">
                <span class="olymp__badge" [class.olymp__badge--required]="o.required">
                  {{ o.required ? 'Обязательно' : 'Опционально' }}
                </span>
                <span class="olymp__year">{{ o.year }}</span>
              </div>
              <h3 class="olymp__title">{{ o.title }}</h3>
              <p class="olymp__desc">{{ o.desc }}</p>
              <div class="olymp__links">
                @if (o.site) { <a [href]="o.site" target="_blank" rel="noopener">Сайт →</a> }
                @if (o.form) { <a [href]="o.form" target="_blank" rel="noopener">Форма →</a> }
                @if (o.github) { <a [href]="o.github" target="_blank" rel="noopener">GitHub →</a> }
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

    .olymp__head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
    .olymp__badge { font-size: 12px; font-weight: 600; padding: 4px 10px; border-radius: var(--r-full); background: var(--n-100); color: var(--n-600); }
    .olymp__badge--required { background: var(--c-primary-50); color: var(--c-primary-700); }
    .olymp__year { font-size: 13px; color: var(--text-subtle); font-weight: 600; }
    .olymp__title { font-family: var(--font-display); font-size: 20px; font-weight: 700; margin-bottom: 10px; }
    .olymp__desc { font-size: 15px; color: var(--text-muted); line-height: 1.6; margin-bottom: 18px; }
    .olymp__links { display: flex; gap: 16px; flex-wrap: wrap; }
    .olymp__links a { font-size: 14px; font-weight: 600; color: var(--c-primary-600); }
    .olymp__links a:hover { text-decoration: underline; }
  `],
})
export class OlympiadsComponent {
  items = [
    {
      title: 'ArtMasters',
      desc: 'Компетенция и этапы участия, скриншоты теста и портфолио в репозитории.',
      required: true, year: '2026',
      site: 'https://artmasters.ru/',
      form: 'https://forms.gle/uMnafPJsZdsZuUjdA',
      github: 'https://github.com/твой-логин/resume/tree/main/assets/olympiads/artmasters',
    },
    {
      title: 'ИТ-Планета',
      desc: 'Проект, сертификаты и описание решения.',
      required: true, year: '2026',
      site: 'https://it-planet.org/',
      form: 'https://forms.gle/Hb6gnmi25okyWFjeA',
      github: 'https://github.com/твой-логин/resume/tree/main/assets/olympiads/it-planet',
    },
    {
      title: 'Траектория будущего',
      desc: 'Проект tb-future-2026: код и документация.',
      required: true, year: '2026',
      site: 'https://tbolimpiada.ru/#nomination',
      form: 'https://forms.gle/nLFypXKFjdRU2t5d9',
      github: 'https://github.com/твой-логин/tb-future-2026',
    },
    {
      title: 'Большие вызовы',
      desc: 'Участие в треке, репозиторий big-challenges-2026.',
      required: false, year: '2026',
      site: 'https://bigchallenges.ru/konkurs/#tracks',
      form: '',
      github: 'https://github.com/твой-логин/big-challenges-2026',
    },
  ];
}