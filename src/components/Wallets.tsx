import React from 'react';
import { Connector } from '@web3-react/types';
import styled from 'styled-components';

// components
import { Icon, Text } from './UI';
import WalletMenu from './WalletMenu';

// connectors
import { getConnectorForWallet } from 'connectors';

// hooks
import { useEagerConnect } from 'hooks';

// constants
import { Wallet } from 'constants/index';

// assets
import coinbaseWalletIcon from '../assets/coinbase-wallet-logo.png';
import metamaskIcon from 'assets/metamask.png';

const Wrapper = styled.div`
  padding: .8rem;
  margin: 1rem auto;
`;

const Wallets = () => {
  useEagerConnect();

  const tryActivation = async (connector: Connector) => {
    try {
      await connector.activate();
    }
    catch(error) {
      console.error(error)
    }
  }

  const activateCoinbaseWallet = async () => {
    try {
      await tryActivation(getConnectorForWallet(Wallet.COINBASE));
    }
    catch (error) {
      console.error(error);
    }
  }

  const activateMetamask = async () => {
    try {
      await tryActivation(getConnectorForWallet(Wallet.METAMASK));
    }
    catch (error) {
      console.error(error);
    }
  }

  return (
    <Wrapper>
      <WalletMenu
        wallet={Wallet.COINBASE}
        onClick={activateCoinbaseWallet}
      >
        <Icon
          src={coinbaseWalletIcon}
          alt="coinbase wallet"
        />
        <Text>Coinbase Wallet</Text>
      </WalletMenu>
      <WalletMenu
        wallet={Wallet.METAMASK}
        onClick={activateMetamask}
      >
        <Icon
          src={metamaskIcon}
          alt="metamask"
        />
        <Text>Metamask</Text>
      </WalletMenu>
    </Wrapper>
  );
}

export default Wallets;
