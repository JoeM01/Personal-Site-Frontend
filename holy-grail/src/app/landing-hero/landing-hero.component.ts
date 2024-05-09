import { Component } from '@angular/core';
import { ResumeMainComponent } from '../resume-main/resume-main.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-landing-hero',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, ResumeMainComponent],
  templateUrl: './landing-hero.component.html',
  styleUrl: './landing-hero.component.scss'
})
export class LandingHeroComponent {

}
