import { Injectable } from '@angular/core';
import { http, createConfig } from '@wagmi/core'
import { mainnet, sepolia } from '@wagmi/core/chains'
import { connect } from '@wagmi/core'
import { injected } from '@wagmi/connectors'
import { signMessage } from '@wagmi/core'

@Injectable({
  providedIn: 'root'
})
export class WagmiService {

  constructor() { }

  private config = createConfig({
    chains: [mainnet, sepolia],
    multiInjectedProviderDiscovery: true,
    transports: {
      [mainnet.id]: http(),
      [sepolia.id]: http(),
    },
  })

  async connectWallet(){
    await connect(this.config, { connector: injected() })
  }

  async signMessage(){
    await signMessage(this.config, { message: 'hello world' })
  }

}
