import { Routes } from '@angular/router';
import { LandingHeroComponent } from './landing-hero/landing-hero.component';
import { ResumeMainComponent } from './resume-main/resume-main.component';
import { WebAppMainComponent } from './web-app-main/web-app-main.component';

export const routes: Routes = [
    {path: '', component: LandingHeroComponent},
    {path: 'resume', component: ResumeMainComponent},
    {path: 'landing', component: LandingHeroComponent},
    {path: 'web-app', component: WebAppMainComponent},
];
