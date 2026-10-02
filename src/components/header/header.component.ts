import { Component, signal, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header class="header" [class.header--scrolled]="scrolled()">
      <div class="container header__inner">
        <a routerLink="/" class="header__logo" aria-label="Главная">
          <span class="header__logo-mark">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <rect width="28" height="28" rx="8" fill="#2549d6" />
              <path d="M8 20V8l6 8 6-8v12" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </span>
          <span class="header__logo-text">Иван Иванов</span>
        </a>

        <nav class="header__nav" [class.header__nav--open]="menuOpen()">
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }" (click)="closeMenu()">Главная</a>
          <a routerLink="/olympiads" routerLinkActive="active" (click)="closeMenu()">Олимпиады</a>
          <a routerLink="/courses" routerLinkActive="active" (click)="closeMenu()">Курсы</a>
          <a routerLink="/events" routerLinkActive="active" (click)="closeMenu()">Мероприятия</a>
          <a routerLink="/projects" routerLinkActive="active" (click)="closeMenu()">Проекты</a>
          <a routerLink="/practice" routerLinkActive="active" (click)="closeMenu()">Практика</a>
          <a routerLink="/about" routerLinkActive="active" (click)="closeMenu()">Обо мне</a>
          <a routerLink="/contacts" class="btn btn--primary header__cta--mobile" (click)="closeMenu()">Связаться</a>
        </nav>

        <div class="header__actions">
          <a routerLink="/contacts" class="btn btn--primary header__cta">Связаться</a>
          <button class="header__toggle" (click)="toggleMenu()" aria-label="Меню">
            <span [class.open]="menuOpen()"></span>
            <span [class.open]="menuOpen()"></span>
            <span [class.open]="menuOpen()"></span>
          </button>
        </div>
      </div>
    </header>
  `,
  styles: [`
    .header {
      position: sticky; top: 0; z-index: 100;
      background: rgba(255, 255, 255, 0.85);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border-bottom: 1px solid transparent;
      transition: border-color 0.3s, box-shadow 0.3s;
    }
    .header--scrolled { border-bottom-color: var(--border); box-shadow: var(--sh-sm); }
    .header__inner { display: flex; align-items: center; justify-content: space-between; height: 68px; }
    .header__logo { display: flex; align-items: center; gap: 10px; font-family: var(--font-display); font-weight: 700; font-size: 18px; letter-spacing: -0.02em; }
    .header__nav { display: flex; align-items: center; gap: 2px; }
    .header__nav a { padding: 8px 12px; border-radius: var(--r-md); font-size: 14px; font-weight: 500; color: var(--text-muted); transition: color 0.2s, background 0.2s; }
    .header__nav a:hover { color: var(--text); background: var(--n-50); }
    .header__nav a.active { color: var(--c-primary-600); background: var(--c-primary-50); }
    .header__actions { display: flex; align-items: center; gap: 12px; }
    .header__cta--mobile { display: none; }
    .header__toggle { display: none; flex-direction: column; gap: 5px; padding: 8px; }
    .header__toggle span { display: block; width: 22px; height: 2px; background: var(--text); border-radius: 2px; transition: transform 0.3s, opacity 0.3s; }
    .header__toggle span.open:nth-child(1) { transform: translateY(7px) rotate(45deg); }
    .header__toggle span.open:nth-child(2) { opacity: 0; }
    .header__toggle span.open:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

    @media (max-width: 900px) {
      .header__nav {
        position: fixed; top: 68px; left: 0; right: 0;
        flex-direction: column; align-items: stretch;
        background: #fff; padding: 16px; gap: 4px;
        border-bottom: 1px solid var(--border);
        box-shadow: var(--sh-lg);
        transform: translateY(-120%); opacity: 0; pointer-events: none;
        transition: transform 0.3s, opacity 0.3s;
      }
      .header__nav--open { transform: translateY(0); opacity: 1; pointer-events: auto; }
      .header__nav a { padding: 14px 16px; font-size: 16px; }
      .header__cta { display: none; }
      .header__cta--mobile { display: inline-flex; margin-top: 8px; }
      .header__toggle { display: flex; }
    }
  `],
})
export class HeaderComponent {
  scrolled = signal(false);
  menuOpen = signal(false);

  @HostListener('window:scroll')
  onScroll() { this.scrolled.set(window.scrollY > 8); }

  toggleMenu() { this.menuOpen.update(v => !v); }
  closeMenu() { this.menuOpen.set(false); }
}