import { CoinbaseWallet } from '@web3-react/coinbase-wallet';
import { MetaMask } from '@web3-react/metamask';
import { initializeConnector, Web3ReactHooks } from '@web3-react/core';
import { Connector } from '@web3-react/types';

// constants
import { Wallet } from 'constants/index';

const SUPPORTED_WALLETS = [
  Wallet.COINBASE,
  Wallet.METAMASK
];

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

export const getConnectorListItemForWallet = (wallet: Wallet) => {
  return {
    connector: getConnectorForWallet(wallet),
    hooks: getHooksForWallet(wallet),
  }
}

interface ConnectorListItems {
  connector: Connector;
  hooks: Web3ReactHooks;
}

export const createOrderedConnectors = (walletOverride?: Wallet) => {
  const connectors: ConnectorListItems[] = [];
  if (walletOverride) {
    connectors.push(getConnectorListItemForWallet(walletOverride));
  }

  SUPPORTED_WALLETS.filter((wallet) => wallet !== walletOverride).forEach((wallet) => {
    connectors.push(getConnectorListItemForWallet(wallet))
  });
  // connectors.push({ connector: network, hooks: networkHooks });

  const web3ReactConnectors: [Connector, Web3ReactHooks][] = connectors.map(({ connector, hooks }) => [
    connector,
    hooks,
  ]);

  return web3ReactConnectors;
}
