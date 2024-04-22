import { Injectable } from '@angular/core';
import { MetaMaskSDK } from '@metamask/sdk';

@Injectable({
  providedIn: 'root'
})
export class MetamaskService {
  private MMSDK: any;
  public ethereum: any;

  constructor() {
    this.MMSDK = new MetaMaskSDK({
      dappMetadata: {
        name: 'Example JavaScript Dapp',
        url: window.location.href
      },
      infuraAPIKey: "027ce896de99442592fb41d4713cab59"
    });

    this.ethereum = this.MMSDK.getProvider();
  }

  async connectAccount(): Promise<void> {
    try {
      const accounts = await this.ethereum.request({ method: 'eth_requestAccounts' });
      console.log('Connected accounts:', accounts);
    } catch (error) {
      console.error('Error connecting to MetaMask:', error);
    }
  }
}
