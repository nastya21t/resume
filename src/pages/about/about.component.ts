import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  template: `
    <section class="page-hero">
      <div class="container">
        <div class="page-hero__inner animate-in">
          <span class="eyebrow">Обо мне</span>
          <h1 class="page-hero__title">Кто я и чем занимаюсь</h1>
          <p class="page-hero__subtitle">
            Студент, разработчик, участник олимпиад и конференций. Люблю понятный код,
            красивые интерфейсы и задачи, которые заставляют думать.
          </p>
        </div>
      </div>
    </section>

    <section class="section" style="padding-top: 0;">
      <div class="container">
        <div class="grid grid--2">
          <div class="card">
            <h3 class="about__title">Навыки</h3>
            <div class="about__stack">
              @for (s of skills; track s) {
                <span class="about__chip">{{ s }}</span>
              }
            </div>
          </div>
          <div class="card">
            <h3 class="about__title">Общественная деятельность</h3>
            <ul class="about__list">
              @for (s of social; track s) {
                <li>{{ s }}</li>
              }
            </ul>
          </div>
        </div>

        <div class="card" style="margin-top: 24px;">
          <h3 class="about__title">Резюме</h3>
          <p style="color: var(--text-muted); margin-bottom: 16px;">
            Полное резюме доступно в PDF — со всеми проектами, сертификатами и опытом.
          </p>
          <a href="assets/docs/resume.pdf" target="_blank" rel="noopener" class="btn btn--primary">Открыть резюме (PDF)</a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .page-hero { padding: 80px 0 48px; background: linear-gradient(180deg, var(--c-primary-50), transparent); }
    .page-hero__inner { max-width: 680px; }
    .page-hero__title { font-family: var(--font-display); font-size: clamp(32px, 5vw, 48px); font-weight: 800; line-height: 1.15; letter-spacing: -0.03em; margin-bottom: 20px; }
    .page-hero__subtitle { font-size: 18px; color: var(--text-muted); line-height: 1.7; }

    .about__title { font-family: var(--font-display); font-size: 18px; font-weight: 700; margin-bottom: 16px; }
    .about__stack { display: flex; flex-wrap: wrap; gap: 8px; }
    .about__chip { font-size: 13px; padding: 6px 12px; background: var(--n-100); color: var(--n-700); border-radius: var(--r-full); font-weight: 500; }
    .about__list { list-style: none; padding: 0; margin: 0; }
    .about__list li { font-size: 14px; color: var(--n-700); padding: 6px 0 6px 20px; position: relative; }
    .about__list li::before { content: '•'; position: absolute; left: 0; color: var(--c-primary-500); font-weight: 700; }
  `],
})
export class AboutComponent {
  skills = ['Python', 'TypeScript', 'JavaScript', 'SQL', 'Django', 'Angular', 'Laravel', 'PostgreSQL', 'SQLite', 'Docker', 'Git', 'Figma'];
  social = [
    'Реакции в канале «Max» (скриншоты)',
    'Видео для дня открытых дверей техникума',
    'Интервью с «Ред Софт»',
    '«Семейная книга памяти» (оператор/монтаж/презентация)',
    'Онлайн-семинары по финансовой грамотности',
    'Открывая Россию заново',
  ];
}