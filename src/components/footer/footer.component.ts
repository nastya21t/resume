import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  template: `
    <footer class="footer">
      <div class="container">
        <div class="footer__top">
          <div class="footer__brand">
            <a routerLink="/" class="footer__logo">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <rect width="28" height="28" rx="8" fill="#2549d6" />
                <path d="M8 20V8l6 8 6-8v12" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <span>Иван Иванов</span>
            </a>
            <p class="footer__tagline">Портфолио студента и разработчика. Проекты, курсы, олимпиады — всё в одном месте.</p>
          </div>

          <div class="footer__links">
            <div class="footer__col">
              <h4>Разделы</h4>
              <a routerLink="/olympiads">Олимпиады</a>
              <a routerLink="/courses">Курсы</a>
              <a routerLink="/events">Мероприятия</a>
              <a routerLink="/projects">Проекты</a>
            </div>
            <div class="footer__col">
              <h4>Обо мне</h4>
              <a routerLink="/about">Обо мне</a>
              <a routerLink="/practice">Практика</a>
              <a routerLink="/contacts">Контакты</a>
              <a href="assets/docs/resume.pdf" target="_blank" rel="noopener">Резюме (PDF)</a>
            </div>
            <div class="footer__col">
              <h4>Ссылки</h4>
              <a href="https://github.com/твой-логин" target="_blank" rel="noopener">GitHub</a>
              <a href="https://t.me/username" target="_blank" rel="noopener">Telegram</a>
              <a href="mailto:ivan@example.com">Email</a>
            </div>
          </div>
        </div>

        <div class="footer__bottom">
          <p>&copy; 2026 Иван Иванов. Все права защищены.</p>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer { background: var(--n-950); color: var(--n-300); padding: 64px 0 32px; }
    .footer__top { display: flex; justify-content: space-between; gap: 48px; padding-bottom: 48px; border-bottom: 1px solid rgba(255,255,255,0.08); }
    .footer__brand { max-width: 320px; }
    .footer__logo { display: flex; align-items: center; gap: 10px; font-family: var(--font-display); font-weight: 700; font-size: 18px; color: #fff; margin-bottom: 16px; }
    .footer__tagline { font-size: 15px; line-height: 1.6; color: var(--n-400); }
    .footer__links { display: flex; gap: 64px; }
    .footer__col h4 { color: #fff; font-size: 14px; font-weight: 600; margin-bottom: 16px; }
    .footer__col a { display: block; padding: 6px 0; font-size: 15px; color: var(--n-400); transition: color 0.2s; }
    .footer__col a:hover { color: #fff; }
    .footer__bottom { padding-top: 32px; font-size: 14px; text-align: center; }
    @media (max-width: 768px) {
      .footer__top { flex-direction: column; gap: 32px; }
      .footer__links { flex-wrap: wrap; gap: 32px; }
    }
  `],
})
export class FooterComponent {}