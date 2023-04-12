import { Web3Modal } from '@thebuidler/web3modal-ui-mod'
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { configureChains, createClient, WagmiConfig } from 'wagmi'
import { mainnet, polygon } from 'wagmi/chains'
import WagmiWeb3ModalWidget from '../components/WagmiWeb3ModalWidget'
import { getProjectId, getTheme } from '../utilities/EnvUtil'

// Configure wagmi and web3modal
const projectId = getProjectId()
const chains = [mainnet, polygon]
const { provider } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiClient = createClient({
  autoConnect: true,
  connectors: w3mConnectors({ version: 2, projectId, chains }),
  provider
})
const ethereumClient = new EthereumClient(wagmiClient, chains)

// Example
export default function v2BasePage() {
  return (
    <>
      <WagmiConfig client={wagmiClient}>
        <WagmiWeb3ModalWidget />
      </WagmiConfig>

      <Web3Modal
        themeMode={getTheme()}
        themeVariables={{
          '--w3m-accent-color': '#FF8700',
          '--w3m-accent-fill-color': '#000000',
          '--w3m-background-color': '#000000',
          '--w3m-background-image-url': '/images/customisation/background.png',
          '--w3m-logo-image-url': '/images/customisation/logo.png',
          '--w3m-background-border-radius': '0px',
          '--w3m-container-border-radius': '0px',
          '--w3m-wallet-icon-border-radius': '0px',
          '--w3m-input-border-radius': '0px',
          '--w3m-button-border-radius': '0px',
          '--w3m-secondary-button-border-radius': '0px',
          '--w3m-notification-border-radius': '0px',
          '--w3m-icon-button-border-radius': '0px',
          '--w3m-button-hover-highlight-border-radius': '0px',
          '--w3m-font-family': 'monospace'
        }}
        ethereumClient={ethereumClient}
        projectId={projectId}
        walletImages={{
          oreid: '/images/wallet_oreid.svg'
        }}
        mobileWallets={[
          {
            id: 'oreid',
            name: 'OREID',
            links: {
              native: '',
              universal: 'https://www.oreid.io/'
            }
          }
        ]}
        desktopWallets={[
          {
            id: 'oreid',
            name: 'OREID',
            links: {
              native: '',
              universal: 'https://www.oreid.io/'
            }
          }
        ]}
      />
    </>
  )
}
