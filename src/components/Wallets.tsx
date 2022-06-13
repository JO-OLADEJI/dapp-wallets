import React from 'react';
import { Icon, Text } from './UI';
import WalletMenu from './WalletMenu';

// connectors
import { connectors } from '../connectors';

// constants
import { NETWORK_CONFIG, SupportedNetworks } from '../constants/chain'

// assets
import coinbaseWalletLogo from '../assets/coinbase-wallet-logo.png';

const Wallets = () => {
  const activateCoinbaseWallet = async () => {
    try {
      await connectors.coinbaseWallet.activate(NETWORK_CONFIG[SupportedNetworks.FUJI]);
    }
    catch(error) {
      console.error(error)
    }
  }

  return (
    <WalletMenu onClick={activateCoinbaseWallet}>
      <Icon
        src={coinbaseWalletLogo}
        alt="coinbase wallet"
      />
      <Text>Coinbase Wallet</Text>
    </WalletMenu>
  );
}

export default Wallets;
