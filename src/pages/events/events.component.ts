import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  template: `
    <section class="page-hero">
      <div class="container">
        <div class="page-hero__inner animate-in">
          <span class="eyebrow">Активность</span>
          <h1 class="page-hero__title">Конференции и мероприятия</h1>
          <p class="page-hero__subtitle">Очные конференции, экскурсии и ярмарки вакансий. Фото — в галерее ниже.</p>
        </div>
      </div>
    </section>

    <section class="section" style="padding-top: 0;">
      <div class="container">
        <div class="grid grid--3">
          @for (e of events; track e) {
            <a class="card event" [href]="e.link" target="_blank" rel="noopener">
              <div class="event__date">{{ e.date }}</div>
              <h3 class="event__title">{{ e.title }}</h3>
              <p class="event__desc">{{ e.desc }}</p>
              <span class="event__link">Подробнее →</span>
            </a>
          }
        </div>

        <h2 class="section-title" style="font-size: 24px; margin: 64px 0 24px;">Фотогалерея</h2>
        <div class="gallery">
          @for (p of photos; track p) {
            <figure class="gallery__item">
              <img [src]="p.src" [alt]="p.caption" loading="lazy" />
              <figcaption>{{ p.caption }}</figcaption>
            </figure>
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

    .event { display: block; color: inherit; text-decoration: none; }
    .event__date { font-size: 13px; font-weight: 700; color: var(--c-primary-600); margin-bottom: 10px; }
    .event__title { font-family: var(--font-display); font-size: 18px; font-weight: 700; margin-bottom: 8px; }
    .event__desc { font-size: 14px; color: var(--text-muted); line-height: 1.6; margin-bottom: 14px; }
    .event__link { font-size: 14px; font-weight: 600; color: var(--c-primary-600); }

    .gallery { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 20px; }
    .gallery__item { background: #fff; border: 1px solid var(--border); border-radius: var(--r-lg); overflow: hidden; }
    .gallery__item img { width: 100%; aspect-ratio: 4/3; object-fit: cover; display: block; background: var(--n-100); }
    .gallery__item figcaption { padding: 12px 16px; font-size: 14px; color: var(--text-muted); }
  `],
})
export class EventsComponent {
  events = [
    { title: 'AI Dev Day', desc: 'Конференция Яндекса по AI-разработке.', link: 'https://events.yandex.ru/events/ai-dev-day-03-26/', date: 'Март 2026' },
    { title: 'Я 💛 Фронтенд', desc: 'Конференция по фронтенд-разработке.', link: 'https://events.yandex.ru/events/ya-love-frontend-2026', date: '2026' },
    { title: 'Симпозиум Яндекса', desc: 'Ежегодный симпозиум.', link: 'https://yandex.ru/yaintern/whywhy', date: '2026' },
    { title: 'Московский Найти IT', desc: 'Карьерное мероприятие.', link: 'https://careerday.fut.ru/findit_msk', date: '2026' },
    { title: 'IT Purple Conf', desc: 'IT-конференция.', link: 'https://it-purple.ru/', date: '2026' },
    { title: 'GoCloud', desc: 'Конференция Cloud.ru.', link: 'https://cloud.ru/gocloud', date: '2026' },
    { title: 'Конференция 1С', desc: 'Ежегодная конференция 1С.', link: 'https://educonf.1c.ru/conf2026/', date: '2026' },
    { title: 'День открытых дверей НИУ МЭИ', desc: 'Экскурсия в университет.', link: '', date: '2026' },
    { title: 'Мастер-класс «Ред Софт»', desc: 'Мастер-класс от компании.', link: '', date: '2026' },
  ];

  photos = [
    { src: 'assets/events/ai-dev-day.jpg', caption: 'AI Dev Day' },
    { src: 'assets/events/frontend.jpg', caption: 'Я 💛 Фронтенд' },
    { src: 'assets/events/it-purple.jpg', caption: 'IT Purple Conf' },
    { src: 'assets/events/gocloud.jpg', caption: 'GoCloud' },
  ];
}