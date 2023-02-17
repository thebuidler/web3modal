/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable curly */

// -- types ------------------------------------------------------- //
export interface EvmWindow {
  ethereum?: any
  spotEthWallet?: any
  coinbaseWalletExtension?: any
}

export interface InjectedPreset {
  name: string
  icon: string
  url: string
  isMobile?: boolean
  isDesktop?: boolean
  isInjected?: boolean
}

export const enum InjectedId {
  metaMask = 'metaMask',
  trust = 'trust',
  phantom = 'phantom',
  brave = 'brave',
  spotEthWallet = 'spotEthWallet',
  exodus = 'exodus',
  tokenPocket = 'tokenPocket',
  frame = 'frame',
  tally = 'tally',
  coinbaseWallet = 'coinbaseWallet',
  core = 'core',
  bitkeep = 'bitkeep',
  mathWallet = 'mathWallet',
  opera = 'opera',
  tokenary = 'tokenary',
  '1inch' = '1inch',
  kuCoinWallet = 'kuCoinWallet',
  ledger = 'ledger',
  rainbow = 'rainbow'
}

// -- presets ------------------------------------------------------ //
export const EthereumPresets = {
  injectedPreset: {
    [InjectedId.metaMask]: {
      name: 'MetaMask',
      icon: '619537c0-2ff3-4c78-9ed8-a05e7567f300',
      url: 'https://metamask.io',
      isMobile: true,
      isInjected: true
    },
    [InjectedId.trust]: {
      name: 'Trust',
      icon: '0528ee7e-16d1-4089-21e3-bbfb41933100',
      url: 'https://trustwallet.com',
      isMobile: true,
      isInjected: true
    },
    [InjectedId.spotEthWallet]: {
      name: 'Spot',
      icon: '1bf33a89-b049-4a1c-d1f6-4dd7419ee400',
      url: 'https://www.spot-wallet.com',
      isMobile: true,
      isInjected: true
    },
    [InjectedId.phantom]: {
      name: 'Phantom',
      icon: '62471a22-33cb-4e65-5b54-c3d9ea24b900',
      url: 'https://phantom.app',
      isInjected: true
    },
    [InjectedId.core]: {
      name: 'Core',
      icon: '35f9c46e-cc57-4aa7-315d-e6ccb2a1d600',
      url: 'https://core.app',
      isMobile: true,
      isInjected: true
    },
    [InjectedId.bitkeep]: {
      name: 'BitKeep',
      icon: '3f7075d0-4ab7-4db5-404d-3e4c05e6fe00',
      url: 'https://bitkeep.com',
      isMobile: true,
      isInjected: true
    },
    [InjectedId.tokenPocket]: {
      name: 'TokenPocket',
      icon: 'f3119826-4ef5-4d31-4789-d4ae5c18e400',
      url: 'https://www.tokenpocket.pro',
      isMobile: true,
      isInjected: true
    },
    [InjectedId.mathWallet]: {
      name: 'MathWallet',
      icon: '26a8f588-3231-4411-60ce-5bb6b805a700',
      url: 'https://mathwallet.org',
      isMobile: true,
      isInjected: true
    },
    [InjectedId.exodus]: {
      name: 'Exodus',
      icon: '4c16cad4-cac9-4643-6726-c696efaf5200',
      url: 'https://www.exodus.com',
      isMobile: true,
      isDesktop: true,
      isInjected: true
    },
    [InjectedId.kuCoinWallet]: {
      name: 'KuCoin Wallet',
      icon: '1e47340b-8fd7-4ad6-17e7-b2bd651fae00',
      url: 'https://kuwallet.com',
      isMobile: true,
      isInjected: true
    },
    [InjectedId.ledger]: {
      name: 'Ledger',
      icon: 'a7f416de-aa03-4c5e-3280-ab49269aef00',
      url: 'https://www.ledger.com',
      isDesktop: true
    },
    [InjectedId.brave]: {
      name: 'Brave',
      icon: '125e828e-9936-4451-a8f2-949c119b7400',
      url: 'https://brave.com/wallet',
      isInjected: true
    },
    [InjectedId.frame]: {
      name: 'Frame',
      icon: 'cd492418-ea85-4ef1-aeed-1c9e20b58900',
      url: 'https://frame.sh',
      isInjected: true
    },
    [InjectedId.tally]: {
      name: 'Tally',
      icon: '98d2620c-9fc8-4a1c-31bc-78d59d00a300',
      url: 'https://tallyho.org',
      isInjected: true
    },
    [InjectedId.coinbaseWallet]: {
      name: 'Coinbase',
      icon: 'f8068a7f-83d7-4190-1f94-78154a12c600',
      url: 'https://www.coinbase.com/wallet',
      isInjected: true
    },
    [InjectedId.opera]: {
      name: 'Opera',
      icon: '877fa1a4-304d-4d45-ca8e-f76d1a556f00',
      url: 'https://www.opera.com/crypto',
      isInjected: true
    },
    [InjectedId.tokenary]: {
      name: 'Tokenary',
      icon: '5e481041-dc3c-4a81-373a-76bbde91b800',
      url: 'https://tokenary.io',
      isDesktop: true,
      isInjected: true
    },
    [InjectedId['1inch']]: {
      name: '1inch Wallet',
      icon: 'dce1ee99-403f-44a9-9f94-20de30616500',
      url: 'https://1inch.io/wallet',
      isMobile: true
    },
    [InjectedId.rainbow]: {
      name: 'Rainbow',
      icon: '6089655c-cb7e-414b-f742-01fdc154be00',
      url: 'https://rainbow.me/extension',
      isMobile: true
    }
  } as Record<string, InjectedPreset | undefined>,

  getInjectedId(id: string) {
    if (id.toUpperCase() !== 'INJECTED' && id.length) {
      return id
    }

    const { ethereum, spotEthWallet, coinbaseWalletExtension }: EvmWindow = window

    if (!ethereum) return InjectedId.metaMask
    if (ethereum.isTrust || ethereum.isTrustWallet) return InjectedId.trust
    if (ethereum.isPhantom) return InjectedId.phantom
    if (ethereum.isBraveWallet) return InjectedId.brave
    if (spotEthWallet) return InjectedId.spotEthWallet
    if (ethereum.isExodus) return InjectedId.exodus
    if (ethereum.isTokenPocket) return InjectedId.tokenPocket
    if (ethereum.isFrame) return InjectedId.frame
    if (ethereum.isTally) return InjectedId.tally
    if (coinbaseWalletExtension) return InjectedId.coinbaseWallet
    if (ethereum.isAvalanche) return InjectedId.core
    if (ethereum.isBitKeep) return InjectedId.bitkeep
    if (ethereum.isMathWallet) return InjectedId.mathWallet
    if (ethereum.isOpera) return InjectedId.opera
    if (ethereum.isTokenary) return InjectedId.tokenary
    if (ethereum.isOneInchIOSWallet || ethereum.isOneInchAndroidWallet) return InjectedId['1inch']
    if (ethereum.isKuCoinWallet) return InjectedId.kuCoinWallet
    if (ethereum.isMetaMask) return InjectedId.metaMask
    if (ethereum.isRainbow) return InjectedId.rainbow

    return 'injected'
  },

  getInjectedName(name: string) {
    if (name.length && name.toUpperCase() !== 'INJECTED') {
      return name
    }
    const id = EthereumPresets.getInjectedId('')

    return EthereumPresets.injectedPreset[id]?.name ?? 'Injected'
  }
}
