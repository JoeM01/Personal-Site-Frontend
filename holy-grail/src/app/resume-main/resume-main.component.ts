import { Component } from '@angular/core';
import { BackBtnComponent } from '../back-btn/back-btn.component';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resume-main',
  standalone: true,
  imports: [BackBtnComponent, RouterOutlet, CommonModule],
  templateUrl: './resume-main.component.html',
  styleUrl: './resume-main.component.scss'
})
export class ResumeMainComponent {
  activeSection = 'Summary';

    setActive(section: string) {
      this.activeSection = section;
      console.log(this.activeSection)
  }
}
