import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { App } from './app';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { OlympiadsComponent } from './pages/olympiads/olympiads.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { EventsComponent } from './pages/events/events.component';
import { PracticeComponent } from './pages/practice/practice.component';

bootstrapApplication(App, {
  providers: [
    provideRouter(
      [
        { path: '', component: HomeComponent, title: 'Портфолио — Главная' },
        { path: 'olympiads', component: OlympiadsComponent, title: 'Олимпиады и конкурсы' },
        { path: 'courses', component: CoursesComponent, title: 'Курсы' },
        { path: 'events', component: EventsComponent, title: 'Мероприятия' },
        { path: 'projects', component: ProjectsComponent, title: 'Проекты' },
        { path: 'practice', component: PracticeComponent, title: 'Практика' },
        { path: 'about', component: AboutComponent, title: 'Обо мне' },
        { path: 'contacts', component: ContactsComponent, title: 'Контакты' },
        { path: '**', redirectTo: '' },
      ],
      withInMemoryScrolling({ scrollPositionRestoration: 'top', anchorScrolling: 'enabled' })
    ),
  ],
});