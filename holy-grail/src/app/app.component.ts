import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SocialsComponent } from './socials/socials.component';
import { LandingHeroComponent } from './landing-hero/landing-hero.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SocialsComponent , LandingHeroComponent, HttpClientModule, MatDialogModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'holy-grail';
}
