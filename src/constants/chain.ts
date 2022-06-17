import type { AddEthereumChainParameter } from '@web3-react/types';

export enum SupportedNetworks {
  RINKEBY = 4,
  FUJI = 43113,
  BSC_TESTNET = 97
}

export const NetworkMap: { [chain in SupportedNetworks]: string } = {
  [SupportedNetworks.RINKEBY]: 'Rinkeby',
  [SupportedNetworks.FUJI]: 'Fuji',
  [SupportedNetworks.BSC_TESTNET]: 'BSC-testnet'
}

export const NETWORK_CONFIG: { [chainId in SupportedNetworks]: AddEthereumChainParameter } = {
  [SupportedNetworks.RINKEBY]: {
    chainId: SupportedNetworks.RINKEBY,
    blockExplorerUrls: ['https://rinkeby.etherscan.io'],
    chainName: 'Rinkeby Test Network',
    nativeCurrency: {
      name: 'ETH',
      symbol: 'ETH',
      decimals: 18
    },
    rpcUrls: ['https://rinkeby.infura.io/v3/']
  },
  [SupportedNetworks.FUJI]: {
    chainId: SupportedNetworks.FUJI,
    blockExplorerUrls: ['https://testnet.snowtrace.io/'],
    chainName: 'Avalanche Fuji Testnet',
    nativeCurrency: {
      name: 'AVAX',
      symbol: 'AVAX',
      decimals: 18
    },
    rpcUrls: ['https://api.avax-test.network/ext/bc/C/rpc']
  },
  [SupportedNetworks.BSC_TESTNET]: {
    chainId: SupportedNetworks.BSC_TESTNET,
    blockExplorerUrls: ['https://testnet.bscscan.com'],
    chainName: 'Binance Smart Chain - Testnet',
    nativeCurrency: {
      name: 'tBNB',
      symbol: 'tBNB',
      decimals: 18
    },
    rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545/']
  }
}
