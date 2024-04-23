import { Component } from '@angular/core';
import { WagmiService } from '../wagmi.service';

@Component({
  selector: 'header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private wagmiService: WagmiService) {}

  connectWallet(){
    this.wagmiService.connectWallet()
  }

  signMessage(){
    this.wagmiService.signMessage()
  }
}
