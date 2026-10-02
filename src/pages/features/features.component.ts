import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-features',
  imports: [RouterLink],
  template: `
    <!-- Hero -->
    <section class="page-hero">
      <div class="container">
        <div class="page-hero__inner animate-in">
          <span class="eyebrow">Features</span>
          <h1 class="page-hero__title">Everything your team needs to ship</h1>
          <p class="page-hero__subtitle">
            From planning to delivery, Nova covers every step of your team's workflow
            with powerful, beautifully designed tools.
          </p>
        </div>
      </div>
    </section>

    <!-- Feature blocks -->
    <section class="section">
      <div class="container">
        @for (block of featureBlocks; track block; let i = $index) {
          <div class="feature-block" [class.feature-block--reverse]="i % 2 === 1">
            <div class="feature-block__visual">
              <div class="feature-block__mock" [innerHTML]="block.visual"></div>
            </div>
            <div class="feature-block__content">
              <span class="feature-block__tag">{{ block.tag }}</span>
              <h2 class="feature-block__title">{{ block.title }}</h2>
              <p class="feature-block__desc">{{ block.desc }}</p>
              <ul class="feature-block__list">
                @for (item of block.items; track item) {
                  <li>
                    <span class="feature-block__check">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M2 7l3 3 7-7" stroke="white" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </span>
                    {{ item }}
                  </li>
                }
              </ul>
            </div>
          </div>
        }
      </div>
    </section>

    <!-- Pricing -->
    <section class="section section--subtle">
      <div class="container">
        <div class="text-center mx-auto" style="max-width: 640px; margin-bottom: 56px;">
          <span class="eyebrow">Pricing</span>
          <h2 class="section-title">Simple, transparent pricing</h2>
          <p class="section-subtitle mx-auto">Start free. Upgrade when you need more. No hidden fees.</p>
        </div>
        <div class="pricing">
          @for (plan of pricing; track plan; let i = $index) {
            <div class="pricing__card animate-in"
                 [class.pricing__card--featured]="plan.featured"
                 [style.animation-delay]="i * 0.08 + 's'">
              @if (plan.featured) {
                <div class="pricing__badge">Most popular</div>
              }
              <h3 class="pricing__name">{{ plan.name }}</h3>
              <p class="pricing__price">{{ plan.price }}</p>
              <p class="pricing__period">{{ plan.period }}</p>
              <ul class="pricing__features">
                @for (f of plan.features; track f) {
                  <li>
                    <span class="pricing__check">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6l2.5 2.5L10 3" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </span>
                    {{ f }}
                  </li>
                }
              </ul>
              <a routerLink="/contact" class="btn btn--full"
                 [class.btn--primary]="plan.featured"
                 [class.btn--secondary]="!plan.featured">
                {{ plan.cta }}
              </a>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="section">
      <div class="container">
        <div class="text-center mx-auto" style="max-width: 640px; margin-bottom: 48px;">
          <span class="eyebrow">FAQ</span>
          <h2 class="section-title">Frequently asked questions</h2>
        </div>
        <div class="faq">
          @for (item of faqs; track item; let i = $index) {
            <div class="faq__item">
              <button class="faq__question" (click)="toggle(i)">
                <span>{{ item.q }}</span>
                <span class="faq__icon" [class.faq__icon--open]="openIndex() === i">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M4 7l5 5 5-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </span>
              </button>
              <div class="faq__answer" [class.faq__answer--open]="openIndex() === i">
                <p>{{ item.a }}</p>
              </div>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section section--subtle">
      <div class="container">
        <div class="cta">
          <div class="cta__glow"></div>
          <h2 class="cta__title">Start building with Nova</h2>
          <p class="cta__subtitle">Free for up to 5 users. No credit card required.</p>
          <a routerLink="/contact" class="btn btn--primary btn--lg">Get started free</a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .page-hero {
      padding: 80px 0 64px;
      background: linear-gradient(180deg, var(--c-primary-50), transparent);
    }
    .page-hero__inner { max-width: 680px; }
    .page-hero__title {
      font-family: var(--font-display);
      font-size: clamp(32px, 5vw, 48px);
      font-weight: 800;
      line-height: 1.15;
      letter-spacing: -0.03em;
      margin-bottom: 20px;
    }
    .page-hero__subtitle {
      font-size: 18px;
      color: var(--text-muted);
      line-height: 1.7;
    }

    /* Feature blocks */
    .feature-block {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 64px;
      align-items: center;
      padding: 48px 0;
      border-bottom: 1px solid var(--border-subtle);
    }
    .feature-block:last-child { border-bottom: none; }
    .feature-block--reverse .feature-block__visual { order: 2; }
    .feature-block__tag {
      display: inline-block;
      font-size: 13px;
      font-weight: 600;
      color: var(--c-primary-600);
      text-transform: uppercase;
      letter-spacing: 0.04em;
      margin-bottom: 12px;
    }
    .feature-block__title {
      font-family: var(--font-display);
      font-size: 28px;
      font-weight: 700;
      letter-spacing: -0.02em;
      margin-bottom: 16px;
    }
    .feature-block__desc {
      font-size: 17px;
      color: var(--text-muted);
      line-height: 1.7;
      margin-bottom: 24px;
    }
    .feature-block__list {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .feature-block__list li {
      display: flex;
      align-items: center;
      gap: 12px;
      font-size: 15px;
      color: var(--text);
    }
    .feature-block__check {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background: var(--c-accent-500);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }
    .feature-block__visual {
      display: flex;
      justify-content: center;
    }
    .feature-block__mock {
      width: 100%;
      max-width: 440px;
    }

    /* Pricing */
    .pricing {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;
      max-width: 960px;
      margin: 0 auto;
    }
    .pricing__card {
      background: #fff;
      border: 1px solid var(--border);
      border-radius: var(--r-lg);
      padding: 32px;
      display: flex;
      flex-direction: column;
      position: relative;
      transition: all 0.25s ease;
    }
    .pricing__card:hover {
      border-color: var(--n-300);
      box-shadow: var(--sh-md);
    }
    .pricing__card--featured {
      border-color: var(--c-primary-500);
      border-width: 2px;
      box-shadow: var(--sh-lg);
    }
    .pricing__badge {
      position: absolute;
      top: -12px;
      left: 50%;
      transform: translateX(-50%);
      background: var(--c-primary-600);
      color: #fff;
      font-size: 12px;
      font-weight: 600;
      padding: 4px 14px;
      border-radius: var(--r-full);
      white-space: nowrap;
    }
    .pricing__name {
      font-family: var(--font-display);
      font-size: 20px;
      font-weight: 700;
      margin-bottom: 8px;
    }
    .pricing__price {
      font-family: var(--font-display);
      font-size: 40px;
      font-weight: 800;
      letter-spacing: -0.02em;
    }
    .pricing__period {
      font-size: 14px;
      color: var(--text-muted);
      margin-bottom: 24px;
    }
    .pricing__features {
      display: flex;
      flex-direction: column;
      gap: 12px;
      margin-bottom: 32px;
      flex: 1;
    }
    .pricing__features li {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 15px;
      color: var(--text);
    }
    .pricing__check {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: var(--c-accent-500);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    /* FAQ */
    .faq {
      max-width: 720px;
      margin: 0 auto;
    }
    .faq__item {
      border-bottom: 1px solid var(--border);
    }
    .faq__question {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px 0;
      font-size: 17px;
      font-weight: 600;
      text-align: left;
      color: var(--text);
    }
    .faq__icon {
      transition: transform 0.3s;
      color: var(--text-muted);
      flex-shrink: 0;
    }
    .faq__icon--open { transform: rotate(180deg); }
    .faq__answer {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.3s ease, padding 0.3s ease;
    }
    .faq__answer--open {
      max-height: 200px;
      padding-bottom: 20px;
    }
    .faq__answer p {
      font-size: 15px;
      color: var(--text-muted);
      line-height: 1.7;
    }

    .cta {
      position: relative;
      background: var(--n-950);
      border-radius: var(--r-xl);
      padding: 64px 48px;
      text-align: center;
      overflow: hidden;
    }
    .cta__glow {
      position: absolute;
      top: -50%;
      left: 50%;
      transform: translateX(-50%);
      width: 400px;
      height: 400px;
      background: radial-gradient(circle, rgba(37, 73, 214, 0.3), transparent 70%);
    }
    .cta__title {
      position: relative;
      font-family: var(--font-display);
      font-size: clamp(28px, 4vw, 40px);
      font-weight: 800;
      color: #fff;
      margin-bottom: 16px;
    }
    .cta__subtitle {
      position: relative;
      font-size: 18px;
      color: var(--n-300);
      margin-bottom: 32px;
    }

    @media (max-width: 900px) {
      .feature-block { grid-template-columns: 1fr; gap: 32px; }
      .feature-block--reverse .feature-block__visual { order: 0; }
      .pricing { grid-template-columns: 1fr; max-width: 420px; }
    }
  `],
})
export class FeaturesComponent {
  openIndex = signal<number | null>(0);

  toggle(i: number) {
    this.openIndex.update(v => v === i ? null : i);
  }

  featureBlocks = [
    {
      tag: 'Planning',
      title: 'Visual boards that adapt to your flow',
      desc: 'Kanban, list, calendar, or timeline — switch views instantly without losing context. Your board, your way.',
      items: ['Drag-and-drop task management', 'Custom views per team member', 'Sprint and roadmap planning', 'Recurring tasks and templates'],
      visual: `<div style="background:#fff;border:1px solid var(--border);border-radius:16px;box-shadow:var(--sh-lg);overflow:hidden;">
        <div style="display:flex;gap:12px;padding:16px;background:var(--bg-subtle);border-bottom:1px solid var(--border-subtle);">
          <div style="flex:1;background:#fff;border:1px solid var(--border);border-radius:8px;padding:12px;">
            <p style="font-size:12px;color:var(--text-muted);margin-bottom:8px;">To Do</p>
            <div style="background:var(--bg-subtle);border-radius:6px;padding:10px;margin-bottom:6px;font-size:13px;">Design review</div>
            <div style="background:var(--bg-subtle);border-radius:6px;padding:10px;font-size:13px;">API spec</div>
          </div>
          <div style="flex:1;background:#fff;border:1px solid var(--border);border-radius:8px;padding:12px;">
            <p style="font-size:12px;color:var(--text-muted);margin-bottom:8px;">In Progress</p>
            <div style="background:var(--c-primary-50);border-radius:6px;padding:10px;margin-bottom:6px;font-size:13px;">Onboarding flow</div>
            <div style="background:var(--c-primary-50);border-radius:6px;padding:10px;font-size:13px;">Auth service</div>
          </div>
          <div style="flex:1;background:#fff;border:1px solid var(--border);border-radius:8px;padding:12px;">
            <p style="font-size:12px;color:var(--text-muted);margin-bottom:8px;">Done</p>
            <div style="background:var(--c-accent-50);border-radius:6px;padding:10px;font-size:13px;">Landing page</div>
          </div>
        </div>
      </div>`,
    },
    {
      tag: 'Collaboration',
      title: 'Real-time collaboration built in',
      desc: 'Comments, mentions, and live cursors keep everyone on the same page. No more switching between five different tools.',
      items: ['Live cursors and presence', 'Threaded comments on tasks', '@mentions and notifications', 'Shared inbox for requests'],
      visual: `<div style="background:#fff;border:1px solid var(--border);border-radius:16px;box-shadow:var(--sh-lg);padding:24px;">
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;">
          <div style="width:36px;height:36px;border-radius:50%;background:#2549d6;color:#fff;font-size:13px;font-weight:600;display:flex;align-items:center;justify-content:center;">SC</div>
          <div>
            <p style="font-size:14px;font-weight:600;">Sarah Chen</p>
            <p style="font-size:12px;color:var(--c-accent-600);">● Active now</p>
          </div>
        </div>
        <div style="background:var(--bg-subtle);border-radius:12px;padding:16px;margin-bottom:12px;">
          <p style="font-size:14px;">Can we move the API deadline to Friday? @David</p>
        </div>
        <div style="background:var(--c-primary-50);border-radius:12px;padding:16px;margin-left:32px;">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;">
            <div style="width:28px;height:28px;border-radius:50%;background:#10a574;color:#fff;font-size:11px;font-weight:600;display:flex;align-items:center;justify-content:center;">DK</div>
            <p style="font-size:13px;font-weight:600;">David Kim</p>
          </div>
          <p style="font-size:14px;">Works for me. I'll update the board.</p>
        </div>
      </div>`,
    },
    {
      tag: 'Insights',
      title: 'AI-powered analytics that predict delivery',
      desc: 'Stop guessing when things will ship. Nova analyzes your team patterns and surfaces risks before they become blockers.',
      items: ['Velocity trends and forecasts', 'Bottleneck detection', 'Predicted delivery dates', 'Burndown and cycle time charts'],
      visual: `<div style="background:#fff;border:1px solid var(--border);border-radius:16px;box-shadow:var(--sh-lg);padding:24px;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;">
          <p style="font-size:14px;font-weight:600;">Velocity Trend</p>
          <span style="font-size:13px;font-weight:600;color:var(--c-accent-600);background:var(--c-accent-50);padding:4px 10px;border-radius:20px;">+34%</span>
        </div>
        <div style="display:flex;align-items:flex-end;gap:10px;height:160px;">
          <div style="flex:1;background:var(--c-primary-200);border-radius:6px 6px 0 0;height:40%;"></div>
          <div style="flex:1;background:var(--c-primary-300);border-radius:6px 6px 0 0;height:55%;"></div>
          <div style="flex:1;background:var(--c-primary-400);border-radius:6px 6px 0 0;height:50%;"></div>
          <div style="flex:1;background:var(--c-primary-500);border-radius:6px 6px 0 0;height:70%;"></div>
          <div style="flex:1;background:var(--c-primary-600);border-radius:6px 6px 0 0;height:85%;"></div>
          <div style="flex:1;background:var(--c-accent-500);border-radius:6px 6px 0 0;height:100%;"></div>
        </div>
        <div style="display:flex;justify-content:space-between;margin-top:12px;font-size:12px;color:var(--text-muted);">
          <span>W1</span><span>W2</span><span>W3</span><span>W4</span><span>W5</span><span>W6</span>
        </div>
      </div>`,
    },
  ];

  pricing = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever, up to 5 users',
      features: ['3 boards', 'Basic integrations', 'Mobile app', 'Community support'],
      cta: 'Get started',
      featured: false,
    },
    {
      name: 'Pro',
      price: '$12',
      period: 'per user / month',
      features: ['Unlimited boards', 'All integrations', 'AI insights', 'Priority support', 'Automations', 'Custom views'],
      cta: 'Start free trial',
      featured: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'contact for pricing',
      features: ['Everything in Pro', 'SSO & SAML', 'Advanced permissions', 'Dedicated manager', '99.9% SLA', 'Custom contracts'],
      cta: 'Contact sales',
      featured: false,
    },
  ];

  faqs = [
    { q: 'Is there a free plan?', a: 'Yes! Our free plan supports up to 5 users and 3 boards at no cost, forever. No credit card required.' },
    { q: 'Can I switch plans later?', a: 'Absolutely. You can upgrade or downgrade at any time. Changes take effect immediately and we prorate the difference.' },
    { q: 'Do you offer discounts for startups?', a: 'Yes, we offer 50% off Pro for eligible early-stage startups. Reach out through our contact page to learn more.' },
    { q: 'What integrations are available?', a: 'Nova integrates with Slack, GitHub, GitLab, Figma, Google Drive, and dozens more. Pro and Enterprise get access to all integrations.' },
    { q: 'How secure is my data?', a: 'We are SOC 2 Type II certified. Data is encrypted in transit and at rest, with optional SSO/SAML for Enterprise plans.' },
  ];
}
