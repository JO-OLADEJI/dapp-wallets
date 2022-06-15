import React from 'react';
import { Connector } from '@web3-react/types';
import styled from 'styled-components';

// components
import { Icon, Text } from './UI';
import WalletMenu from './WalletMenu';

// connectors
import { getConnectorForWallet, Wallet } from 'connectors'

// constants
import { NETWORK_CONFIG, SupportedNetworks } from '../constants/chain'

// assets
import coinbaseWalletIcon from '../assets/coinbase-wallet-logo.png';
import metamaskIcon from 'assets/metamask.png';

const Wrapper = styled.div`
  padding: .8rem;
  margin: 1rem auto;
`;

const Wallets = () => {
  const tryActivation = async (connector: Connector) => {
    try {
      await connector.activate(NETWORK_CONFIG[SupportedNetworks.RINKEBY]);
    }
    catch(error) {
      console.error(error)
    }
  }

  const activateCoinbaseWallet = async () => {
    await tryActivation(getConnectorForWallet(Wallet.COINBASE));
  }

  const activateMetamask = async () => {
    await tryActivation(getConnectorForWallet(Wallet.METAMASK));
  }

  return (
    <Wrapper>
      <WalletMenu onClick={activateCoinbaseWallet}>
        <Icon
          src={coinbaseWalletIcon}
          alt="coinbase wallet"
        />
        <Text>Coinbase Wallet</Text>
      </WalletMenu>
      <WalletMenu onClick={activateMetamask}>
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
