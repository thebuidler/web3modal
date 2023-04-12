import type { ConfigCtrlState, ThemeCtrlState } from '@web3modal/core'
import { ClientCtrl, ConfigCtrl, ModalCtrl, OptionsCtrl, ThemeCtrl } from '@web3modal/core'
import type { EthereumClient } from '@web3modal/ethereum'

/**
 * Types
 */
export type Web3ModalConfig = Omit<
  ConfigCtrlState,
  'enableStandaloneMode' | 'standaloneChains' | 'walletConnectVersion'
> &
  ThemeCtrlState

/**
 * Client
 */
export class Web3Modal {
  public constructor(config: Web3ModalConfig, client: EthereumClient) {
    ThemeCtrl.setThemeConfig(config)
    ClientCtrl.setEthereumClient(client)
    ConfigCtrl.setConfig({ ...config, walletConnectVersion: client.walletConnectVersion })
    this.initUi()
  }

  private async initUi() {
    if (typeof window !== 'undefined') {
      await import('@thebuidler/web3modal-ui-mod')
      const modal = document.createElement('w3m-modal')
      document.body.insertAdjacentElement('beforeend', modal)
      OptionsCtrl.setIsUiLoaded(true)
    }
  }

  public openModal = ModalCtrl.open

  public closeModal = ModalCtrl.close

  public subscribeModal = ModalCtrl.subscribe

  public setTheme = ThemeCtrl.setThemeConfig

  public setDefaultChain = OptionsCtrl.setSelectedChain
}
