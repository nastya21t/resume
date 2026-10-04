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
          @for (p of items; track p; let i = $index) {
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
                <ul class="practice__list">
                  @for (l of p.points; track l) {
                    <li>{{ l }}</li>
                  }
                </ul>
                <div class="item-card__links">
                  @for (link of p.links; track link.href) {
                    <a [href]="link.href" target="_blank" rel="noopener">{{ link.label }} →</a>
                  }
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
    .practice__list { list-style: none; padding: 0; margin: 0 0 20px; }
    .practice__list li { font-size: 14px; color: var(--n-700); padding: 4px 0 4px 20px; position: relative; }
    .practice__list li::before { content: '✓'; position: absolute; left: 0; color: var(--c-accent-500); font-weight: 700; }
  `],
})
export class PracticeComponent {
  items = [
    {
      tag: 'Практика', year: '2026',
      title: 'Практика в судебном',
      desc: 'Работа с документами на месте практики',
      image: 'images/practice/sud.jpg',
      bg: 'var(--c-accent-50)', color: 'var(--c-accent-700)',
    },
  ];
}