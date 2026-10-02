import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  template: `
    <!-- Hero -->
    <section class="hero">
      <div class="hero__bg"></div>
      <div class="container hero__inner">
        <div class="hero__content animate-in">
          <span class="hero__badge">
            <span class="hero__badge-dot"></span>
            Открыт к стажировкам и проектам
          </span>
          <h1 class="hero__title">
            Привет! Я <span class="hero__title-accent">Иван Иванов</span>
          </h1>
          <p class="hero__subtitle">
            Студент, разработчик и участник олимпиад. Собираю здесь свои проекты,
            сертификаты, курсы и опыт — всё в одном месте.
          </p>
          <div class="hero__actions">
            <a routerLink="/projects" class="btn btn--primary btn--lg">Смотреть проекты</a>
            <a routerLink="/about" class="btn btn--secondary btn--lg">Обо мне</a>
          </div>
        </div>
        <div class="hero__visual animate-in" style="animation-delay: 0.15s">
          <div class="hero__card">
            <div class="hero__card-header">
              <div class="hero__card-dots"><span></span><span></span><span></span></div>
              <span class="hero__card-title">skills.json</span>
            </div>
            <div class="hero__card-body">
              <pre class="hero__code">{{ skillsJson }}</pre>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Быстрые разделы -->
    <section class="section section--subtle">
      <div class="container">
        <div class="text-center mx-auto" style="max-width: 640px; margin-bottom: 56px;">
          <span class="eyebrow">Что здесь есть</span>
          <h2 class="section-title">Разделы портфолио</h2>
          <p class="section-subtitle mx-auto">Все материалы структурированы — выбирай нужное.</p>
        </div>
        <div class="grid grid--3">
          @for (item of sections; track item) {
            <a class="card section-card" [routerLink]="item.link">
              <div class="section-card__icon" [style.background]="item.bg">
                <span [innerHTML]="item.icon"></span>
              </div>
              <h3 class="section-card__title">{{ item.title }}</h3>
              <p class="section-card__desc">{{ item.desc }}</p>
              <span class="section-card__link">
                Перейти
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 7h8m0 0L7 3m4 4L7 11" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
            </a>
          }
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section">
      <div class="container">
        <div class="cta">
          <div class="cta__glow"></div>
          <h2 class="cta__title">Давайте сотрудничать</h2>
          <p class="cta__subtitle">Открыт к стажировкам, кейсам и интересным проектам.</p>
          <a routerLink="/contacts" class="btn btn--primary btn--lg">Связаться</a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero { position: relative; padding: 80px 0 100px; overflow: hidden; }
    .hero__bg {
      position: absolute; top: -200px; right: -100px;
      width: 600px; height: 600px;
      background: radial-gradient(circle, rgba(37, 73, 214, 0.08), transparent 70%);
      border-radius: 50%; pointer-events: none;
    }
    .hero__inner { display: grid; grid-template-columns: 1.2fr 1fr; gap: 64px; align-items: center; position: relative; }
    .hero__badge {
      display: inline-flex; align-items: center; gap: 8px;
      padding: 6px 14px; background: var(--c-primary-50);
      border: 1px solid var(--c-primary-100); border-radius: var(--r-full);
      font-size: 13px; font-weight: 600; color: var(--c-primary-700);
      margin-bottom: 24px;
    }
    .hero__badge-dot { width: 8px; height: 8px; background: var(--c-accent-500); border-radius: 50%; animation: pulse 2s ease infinite; }
    @keyframes pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.4; } }
    .hero__title { font-family: var(--font-display); font-size: clamp(36px, 5vw, 56px); font-weight: 800; line-height: 1.1; letter-spacing: -0.03em; margin-bottom: 24px; }
    .hero__title-accent { background: linear-gradient(135deg, var(--c-primary-600), var(--c-accent-500)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
    .hero__subtitle { font-size: 18px; color: var(--text-muted); line-height: 1.7; max-width: 520px; margin-bottom: 32px; }
    .hero__actions { display: flex; gap: 16px; flex-wrap: wrap; }

    .hero__card { background: #fff; border: 1px solid var(--border); border-radius: var(--r-lg); box-shadow: var(--sh-lg); overflow: hidden; }
    .hero__card-header { display: flex; align-items: center; gap: 12px; padding: 14px 20px; border-bottom: 1px solid var(--border-subtle); background: var(--bg-subtle); }
    .hero__card-dots { display: flex; gap: 6px; }
    .hero__card-dots span { width: 10px; height: 10px; border-radius: 50%; }
    .hero__card-dots span:nth-child(1) { background: #ff6b6b; }
    .hero__card-dots span:nth-child(2) { background: #ffc043; }
    .hero__card-dots span:nth-child(3) { background: #10a574; }
    .hero__card-title { font-size: 13px; font-weight: 600; color: var(--text-muted); margin-left: auto; }
    .hero__card-body { padding: 20px; }
    .hero__code {
      font-family: 'JetBrains Mono', 'Fira Code', monospace;
      font-size: 13px; line-height: 1.6; color: var(--n-700);
      white-space: pre;
    }

    .section-card { display: block; text-decoration: none; color: inherit; }
    .section-card__icon { width: 48px; height: 48px; border-radius: var(--r-md); display: flex; align-items: center; justify-content: center; margin-bottom: 20px; }
    .section-card__title { font-family: var(--font-display); font-size: 18px; font-weight: 700; margin-bottom: 8px; }
    .section-card__desc { font-size: 15px; color: var(--text-muted); line-height: 1.6; margin-bottom: 16px; }
    .section-card__link { display: inline-flex; align-items: center; gap: 6px; font-size: 14px; font-weight: 600; color: var(--c-primary-600); }

    .cta { position: relative; background: var(--n-950); border-radius: var(--r-xl); padding: 64px 48px; text-align: center; overflow: hidden; }
    .cta__glow { position: absolute; top: -50%; left: 50%; transform: translateX(-50%); width: 400px; height: 400px; background: radial-gradient(circle, rgba(37, 73, 214, 0.3), transparent 70%); pointer-events: none; }
    .cta__title { position: relative; font-family: var(--font-display); font-size: clamp(28px, 4vw, 40px); font-weight: 800; color: #fff; margin-bottom: 16px; }
    .cta__subtitle { position: relative; font-size: 18px; color: var(--n-300); margin-bottom: 32px; }

    @media (max-width: 900px) {
      .hero__inner { grid-template-columns: 1fr; }
      .hero__visual { display: none; }
    }
  `],
})
export class HomeComponent {
  skillsJson = `{
  "languages": ["Python", "TypeScript", "SQL"],
  "frameworks": ["Django", "Angular", "Laravel"],
  "databases": ["PostgreSQL", "SQLite"],
  "tools": ["Git", "Docker", "Figma"]
}`;

  sections = [
    {
      title: 'Олимпиады',
      desc: 'ArtMasters, ИТ-Планета, Траектория будущего, Большие вызовы.',
      link: '/olympiads',
      bg: 'var(--c-primary-50)',
      icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M8 21h8m-4-3v3M7 4h10v5a5 5 0 01-10 0V4z" stroke="#2549d6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M17 5h3v2a3 3 0 01-3 3M7 5H4v2a3 3 0 003 3" stroke="#2549d6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    },
    {
      title: 'Курсы',
      desc: 'VK Education, Яндекс Лицей, Сбер, Stepik, Yandex Cloud, 1С.',
      link: '/courses',
      bg: 'var(--c-accent-50)',
      icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 3l10 5-10 5L2 8l10-5z" stroke="#10a574" stroke-width="2" stroke-linejoin="round"/><path d="M6 10v5c0 2 3 4 6 4s6-2 6-4v-5" stroke="#10a574" stroke-width="2" stroke-linecap="round"/></svg>',
    },
    {
      title: 'Мероприятия',
      desc: 'AI Dev Day, Я 💛 Фронтенд, IT Purple Conf, GoCloud, экскурсии.',
      link: '/events',
      bg: '#f3e8ff',
      icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="16" rx="2" stroke="#7c3aed" stroke-width="2"/><path d="M3 10h18M8 3v4M16 3v4" stroke="#7c3aed" stroke-width="2" stroke-linecap="round"/></svg>',
    },
    {
      title: 'Проекты',
      desc: 'Курсовые, кейсы VK, редизайн и СКУД «Цифровые решения».',
      link: '/projects',
      bg: 'var(--c-warning-50)',
      icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M3 7l4-4h10l4 4v10l-4 4H7l-4-4V7z" stroke="#e08e00" stroke-width="2" stroke-linejoin="round"/><path d="M8 12h8M8 16h5" stroke="#e08e00" stroke-width="2" stroke-linecap="round"/></svg>',
    },
    {
      title: 'Практика',
      desc: 'Стажировки, документы, задания от «Цифровых решений».',
      link: '/practice',
      bg: 'var(--c-primary-50)',
      icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="3" y="7" width="18" height="13" rx="2" stroke="#2549d6" stroke-width="2"/><path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" stroke="#2549d6" stroke-width="2"/></svg>',
    },
    {
      title: 'Обо мне',
      desc: 'Общественная деятельность, соцсети, контакты, резюме.',
      link: '/about',
      bg: 'var(--c-accent-50)',
      icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="4" stroke="#10a574" stroke-width="2"/><path d="M4 21c0-4 4-7 8-7s8 3 8 7" stroke="#10a574" stroke-width="2" stroke-linecap="round"/></svg>',
    },
  ];
}