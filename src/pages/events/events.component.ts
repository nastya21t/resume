import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  template: `
    <section class="page-hero">
      <div class="container">
        <div class="page-hero__inner animate-in">
          <span class="eyebrow">Активность</span>
          <h1 class="page-hero__title">Конференции и мероприятия</h1>
          <p class="page-hero__subtitle">Очные конференции, экскурсии и ярмарки вакансий.</p>
        </div>
      </div>
    </section>

    <section class="section" style="padding-top: 0;">
      <div class="container">
        <div class="grid grid--3">
          @for (e of events; track e; let i = $index) {
            <a class="card item-card event animate-in" [href]="e.link" target="_blank" rel="noopener" [style.animation-delay]="i * 0.05 + 's'">
              <div class="item-card__image">
                @if (e.image) {
                  <img [src]="e.image" [alt]="e.title" loading="lazy" />
                } @else {
                  <div class="item-card__placeholder"><span>Нет фото</span></div>
                }
              </div>
              <div class="item-card__body">
                <div class="item-card__year">{{ e.date }}</div>
                <h3 class="item-card__title">{{ e.title }}</h3>
                <p class="item-card__desc">{{ e.desc }}</p>
              </div>
            </a>
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
    .event { color: inherit; text-decoration: none; }
  `],
})
export class EventsComponent {
}