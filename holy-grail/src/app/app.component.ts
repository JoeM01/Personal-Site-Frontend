import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component'
import { SocialsComponent } from './socials/socials.component';
import { LandingHeroComponent } from './landing-hero/landing-hero.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SocialsComponent , LandingHeroComponent, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'holy-grail';
}
