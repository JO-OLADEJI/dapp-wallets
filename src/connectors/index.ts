import { CoinbaseWallet } from '@web3-react/coinbase-wallet';
import { MetaMask } from '@web3-react/metamask';
import { initializeConnector } from '@web3-react/core';
import { Connector } from '@web3-react/types';

// constants
import { Wallet } from 'constants/index';

export const [coinbaseWallet, coinbaseWalletHooks] = initializeConnector<CoinbaseWallet>(
  (actions) => new CoinbaseWallet({
    actions,
    options: {
      url: 'https://speedy-nodes-nyc.moralis.io/72e1c2ac3d68553b29a6b9ed/eth/rinkeby',
      appName: 'dapp-wallets'
    }
  })
);

export const [metamask, metamaskHooks] = initializeConnector<MetaMask>(
  (actions) => new MetaMask({ actions })
);

export const getConnectorForWallet = (wallet: Wallet) => {
  switch (wallet) {
    case Wallet.COINBASE:
      return coinbaseWallet;
    case Wallet.METAMASK:
      return metamask;
  }
}

export const getWalletForConnector = (connector: Connector): Wallet => {
  switch (connector) {
    case metamask:
      return Wallet.METAMASK;
    case coinbaseWallet:
      return Wallet.COINBASE;
    default:
      throw Error('unsupported connector');
  }
}

export const getHooksForWallet = (wallet: Wallet) => {
  switch (wallet) {
    case Wallet.METAMASK:
      return metamaskHooks;
    case Wallet.COINBASE:
      return coinbaseWalletHooks;
  }
}
