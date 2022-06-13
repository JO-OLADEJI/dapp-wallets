import React from 'react';
// import styled from 'styled-components';
import { Icon, Text } from './UI';
import WalletMenu from './WalletMenu';

// assets
import coinbaseWalletLogo from '../assets/coinbase-wallet-logo.png';

const Wallets = () => {
  return (
    <WalletMenu>
      <Icon
        src={coinbaseWalletLogo}
        alt="coinbase wallet"
      />
      <Text>Coinbase Wallet</Text>
    </WalletMenu>
  );
}

export default Wallets;
