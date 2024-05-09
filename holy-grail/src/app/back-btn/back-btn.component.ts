import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { LandingHeroComponent } from '../landing-hero/landing-hero.component';

@Component({
  selector: 'app-back-btn',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, LandingHeroComponent],
  templateUrl: './back-btn.component.html',
  styleUrl: './back-btn.component.scss'
})
export class BackBtnComponent {

}
