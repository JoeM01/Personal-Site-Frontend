import { Component } from '@angular/core';
import { MetamaskService } from '../metamask.service';

@Component({
  selector: 'header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private metamaskService: MetamaskService) {}

  connectMetaMask(): void {
    this.metamaskService.connectAccount();

  }
}
