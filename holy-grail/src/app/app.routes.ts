import { Routes } from '@angular/router';
import { LandingHeroComponent } from './landing-hero/landing-hero.component';
import { ResumeMainComponent } from './resume-main/resume-main.component';

export const routes: Routes = [
    {path: '', component: LandingHeroComponent},
    {path: 'resume', component: ResumeMainComponent},
    {path: 'landing', component: LandingHeroComponent},
];
