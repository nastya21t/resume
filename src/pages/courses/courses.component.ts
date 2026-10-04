import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  template: `
    <section class="page-hero">
      <div class="container">
        <div class="page-hero__inner animate-in">
          <span class="eyebrow">Обучение</span>
          <h1 class="page-hero__title">Курсы от вендоров</h1>
          <p class="page-hero__subtitle">Сертификаты от Сбера, VK, Яндекса и других платформ.</p>
        </div>
      </div>
    </section>

    <section class="section" style="padding-top: 0;">
      <div class="container">
        <h2 class="section-title" style="font-size: 24px; margin-bottom: 24px;">Обязательный минимум</h2>
        <div class="grid grid--3" style="margin-bottom: 56px;">
          @for (c of required; track c) {
            <div class="card item-card">
              <div class="item-card__image">
                @if (c.image) {
                  <img [src]="c.image" [alt]="c.title" loading="lazy" />
                } @else {
                  <div class="item-card__placeholder"><span>Нет фото</span></div>
                }
              </div>
              <div class="item-card__body">
                <div class="course__vendor">{{ c.vendor }}</div>
                <h3 class="item-card__title">{{ c.title }}</h3>
                <p class="item-card__desc">{{ c.desc }}</p>
                <a [href]="c.link" target="_blank" rel="noopener" class="item-card__link">Перейти к курсу →</a>
              </div>
            </div>
          }
        </div>

        <div class="grid grid--3">
          @for (c of optional; track c) {
            <div class="card item-card">
              <div class="item-card__image">
                @if (c.image) {
                  <img [src]="c.image" [alt]="c.title" loading="lazy" />
                } @else {
                  <div class="item-card__placeholder"><span>Нет фото</span></div>
                }
              </div>
              <div class="item-card__body">
                <div class="course__vendor course__vendor--alt">{{ c.vendor }}</div>
                <h3 class="item-card__title">{{ c.title }}</h3>
                <p class="item-card__desc">{{ c.desc }}</p>
                @if (c.link) { <a [href]="c.link" target="_blank" rel="noopener" class="item-card__link">Перейти →</a> }
              </div>
            </div>
          }
        </div>

        <div class="course__form-block">
          <p><strong>Форма для сертификатов:</strong> <a href="https://forms.gle/mYgbu4djxwdC8okp9" target="_blank" rel="noopener">forms.gle/mYgbu4djxwdC8okp9</a></p>
          <p><strong>Проверка:</strong> <a href="https://clck.ru/3RgsJc" target="_blank" rel="noopener">clck.ru/3RgsJc</a></p>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .page-hero { padding: 80px 0 48px; background: linear-gradient(180deg, var(--c-primary-50), transparent); }
    .page-hero__inner { max-width: 680px; }
    .page-hero__title { font-family: var(--font-display); font-size: clamp(32px, 5vw, 48px); font-weight: 800; line-height: 1.15; letter-spacing: -0.03em; margin-bottom: 20px; }
    .page-hero__subtitle { font-size: 18px; color: var(--text-muted); line-height: 1.7; }
    .course__vendor { font-size: 12px; font-weight: 700; color: var(--c-primary-600); text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 8px; }
    .course__vendor--alt { color: var(--c-accent-600); }
    .course__form-block { margin-top: 56px; padding: 24px; background: var(--bg-subtle); border: 1px solid var(--border); border-radius: var(--r-lg); }
    .course__form-block p { font-size: 15px; margin-bottom: 8px; }
    .course__form-block a { color: var(--c-primary-600); font-weight: 600; }
  `],
})
export class CoursesComponent {
  required = [
    { vendor: 'VK', title: 'VK Education', desc: 'Один из курсов платформы VK Education.', link: 'https://education.vk.company/students', image: 'images/courses/vk.png' },
    { vendor: 'Сбер', title: 'Сбер Университет', desc: 'Курс от Сбер Университета.', link: 'https://sberuniversity.ru/', image: 'images/courses/sber.jpg' },
  ];
}