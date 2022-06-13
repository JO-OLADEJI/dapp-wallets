import { CoinbaseWallet } from '@web3-react/coinbase-wallet';
import type { Actions, Web3ReactStateUpdate } from '@web3-react/coinbase-wallet/node_modules/@web3-react/types/dist/index';
// import type { Actions, Web3ReactStateUpdate } from '@web3-react/types';

const coinbaseWeb3ReactActions: Actions = {
  startActivation: () => {
    return () => {
      console.log('Starting Activation . . .');
    }
  },
  update: (stateUpdate: Web3ReactStateUpdate) => {
    console.log('Updatting State . . .', stateUpdate);
  },
  // resetState: () => {
  //   console.log('Resetting State . . .');
  // },
  reportError
};

interface coinbaseWeb3ReactOptionsProps {
  appName: string
  url: string
};

const coinbaseWeb3ReactOptions: coinbaseWeb3ReactOptionsProps = {
  appName: 'dapp-wallets',
  url: 'http://localhost:3000/'
}

export const coinbaseWallet = new CoinbaseWallet(
  coinbaseWeb3ReactActions,
  coinbaseWeb3ReactOptions
);
