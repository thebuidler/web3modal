import { Web3Modal } from '@thebuidler/web3modal-ui-mod'
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { configureChains, createClient, WagmiConfig } from 'wagmi'
import {
  arbitrum,
  avalanche,
  bsc,
  evmos,
  fantom,
  gnosis,
  iotex,
  mainnet,
  metis,
  optimism,
  polygon,
  zkSync
} from 'wagmi/chains'
import WagmiWeb3ModalWidget from '../components/WagmiWeb3ModalWidget'
import { getProjectId, getTheme } from '../utilities/EnvUtil'

// Configure wagmi and web3modal
const projectId = getProjectId()
const chains = [
  mainnet,
  avalanche,
  gnosis,
  arbitrum,
  polygon,
  bsc,
  fantom,
  zkSync,
  optimism,
  evmos,
  iotex,
  metis
]
const { provider } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiClient = createClient({
  autoConnect: true,
  connectors: w3mConnectors({ version: 2, projectId, chains }),
  provider
})
const ethereumClient = new EthereumClient(wagmiClient, chains)

// Example
export default function v2ExtendedPage() {
  return (
    <>
      <WagmiConfig client={wagmiClient}>
        <WagmiWeb3ModalWidget />
      </WagmiConfig>

      <Web3Modal ethereumClient={ethereumClient} projectId={projectId} themeMode={getTheme()} />
    </>
  )
}
