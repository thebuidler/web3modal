import type { ConfigCtrlState, ThemeCtrlState } from '@web3modal/core'
import { ClientCtrl, ConfigCtrl, OptionsCtrl, ThemeCtrl } from '@web3modal/core'
import type { EthereumClient } from '@web3modal/ethereum'
import React, { memo, useCallback, useEffect } from 'react'
import { Modal } from './Modal'

/**
 * Props
 */
export type Web3ModalProps = Omit<
  ConfigCtrlState,
  'enableStandaloneMode' | 'standaloneChains' | 'walletConnectVersion'
> &
  ThemeCtrlState & {
    ethereumClient?: EthereumClient
  }

/**
 * Component
 */
function CreateWeb3Modal({ ethereumClient, ...config }: Web3ModalProps) {
  const onConfigure = useCallback(async () => {
    ThemeCtrl.setThemeConfig(config)
    if (ethereumClient) {
      ClientCtrl.setEthereumClient(ethereumClient)
    }
    ConfigCtrl.setConfig({ ...config, walletConnectVersion: ethereumClient?.walletConnectVersion })
    await import('@thebuidler/web3modal-ui-mod')
    OptionsCtrl.setIsUiLoaded(true)
  }, [ethereumClient, config])

  useEffect(() => {
    onConfigure()
  }, [onConfigure])

  return <Modal />
}

export const Web3Modal = memo(CreateWeb3Modal)
