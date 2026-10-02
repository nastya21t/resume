import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts',
  template: `
    <section class="page-hero">
      <div class="container">
        <div class="page-hero__inner animate-in">
          <span class="eyebrow">Контакты</span>
          <h1 class="page-hero__title">Свяжитесь со мной</h1>
          <p class="page-hero__subtitle">Открыт к стажировкам, кейсам и интересным проектам.</p>
        </div>
      </div>
    </section>

    <section class="section" style="padding-top: 0;">
      <div class="container">
        <div class="grid grid--3">
          @for (c of contacts; track c) {
            <a class="card contact" [href]="c.href" target="_blank" rel="noopener">
              <div class="contact__icon" [style.background]="c.bg">
                <span [innerHTML]="c.icon"></span>
              </div>
              <h3 class="contact__title">{{ c.title }}</h3>
              <p class="contact__value">{{ c.value }}</p>
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

    .contact { text-align: center; color: inherit; text-decoration: none; }
    .contact__icon { width: 56px; height: 56px; border-radius: var(--r-md); display: flex; align-items: center; justify-content: center; margin: 0 auto 16px; }
    .contact__title { font-family: var(--font-display); font-size: 16px; font-weight: 700; margin-bottom: 4px; }
    .contact__value { font-size: 14px; color: var(--text-muted); }
  `],
})
export class ContactsComponent {
  contacts = [
    {
      title: 'Email', value: 'ivan@example.com', href: 'mailto:ivan@example.com',
      bg: 'var(--c-primary-50)',
      icon: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="14" rx="2" stroke="#2549d6" stroke-width="2"/><path d="M3 7l9 6 9-6" stroke="#2549d6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    },
    {
      title: 'Telegram', value: '@username', href: 'https://t.me/username',
      bg: 'var(--c-accent-50)',
      icon: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M21 4L3 11l5 2 2 6 3-4 5 3 3-14z" stroke="#10a574" stroke-width="2" stroke-linejoin="round"/></svg>',
    },
    {
      title: 'GitHub', value: 'github.com/твой-логин', href: 'https://github.com/твой-логин',
      bg: '#f3e8ff',
      icon: '<svg width="26" height="26" viewBox="0 0 24 24" fill="#7c3aed"><path d="M12 .3a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1.1-.8.1-.8.1-.8 1.2.1 1.9 1.2 1.9 1.2 1.1 1.9 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 016 0C17.3 4.7 18.3 5 18.3 5c.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0012 .3z"/></svg>',
    },
  ];
}