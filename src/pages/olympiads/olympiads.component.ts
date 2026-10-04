import { Component } from '@angular/core';

@Component({
  selector: 'app-olympiads',
  template: `
    <section class="page-hero">
      <div class="container">
        <div class="page-hero__inner animate-in">
          <span class="eyebrow">Достижения</span>
          <h1 class="page-hero__title">Олимпиады и конкурсы</h1>
          <p class="page-hero__subtitle">Участие в профильных олимпиадах и чемпионатах.</p>
        </div>
      </div>
    </section>

    <section class="section" style="padding-top: 0;">
      <div class="container">
        <div class="grid grid--2">
          @for (o of items; track o; let i = $index) {
            <div class="card item-card animate-in" [style.animation-delay]="i * 0.06 + 's'">
              <div class="item-card__image">
                @if (o.image) {
                  <img [src]="o.image" [alt]="o.title" loading="lazy" />
                } @else {
                  <div class="item-card__placeholder">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" stroke-width="1.5"/>
                      <circle cx="9" cy="10" r="2" stroke="currentColor" stroke-width="1.5"/>
                      <path d="M3 16l5-4 4 3 3-2 6 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>Нет фото</span>
                  </div>
                }
                <span class="item-card__badge" [class.item-card__badge--required]="o.required">
                  {{ o.required ? 'Обязательно' : 'Опционально' }}
                </span>
              </div>
              <div class="item-card__body">
                <div class="item-card__head">
                  <h3 class="item-card__title">{{ o.title }}</h3>
                  <span class="item-card__year">{{ o.year }}</span>
                </div>
                <p class="item-card__desc">{{ o.desc }}</p>
                <div class="item-card__links">
                  @if (o.site) { <a [href]="o.site" target="_blank" rel="noopener">Сайт →</a> }
                  @if (o.form) { <a [href]="o.form" target="_blank" rel="noopener">Форма →</a> }
                  @if (o.github) { <a [href]="o.github" target="_blank" rel="noopener">GitHub →</a> }
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
  `],
})
export class OlympiadsComponent {
  items = [
    {
      title: 'ArtMasters',
      desc: 'Компетенция и этапы участия, скриншоты теста и портфолио в репозитории.',
      required: true, year: '2026',
      image: 'images/olympiads/artmasters.jpg',
      site: 'https://artmasters.ru/',
      form: 'https://forms.gle/uMnafPJsZdsZuUjdA',
    },
    {
      title: 'ИТ-Планета',
      desc: 'Проект, сертификаты и описание решения.',
      required: true, year: '2026',
      image: 'images/olympiads/planet.jpg',
      site: 'https://it-planet.org/',
      form: 'https://forms.gle/Hb6gnmi25okyWFjeA',
    },
    {
      title: 'Траектория будущего',
      desc: 'Тест по Траектории будущего ',
      required: true, year: '2026',
      image: 'images/olympiads/TRAEKTORIYA.jpg',
      site: 'https://tbolimpiada.ru/#nomination',
      form: 'https://forms.gle/nLFypXKFjdRU2t5d9',
    },
  ];
}