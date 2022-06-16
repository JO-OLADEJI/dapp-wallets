import React, { useState } from 'react';
import styled from 'styled-components';

// components
import Wallets from 'components/Wallets';
import AccountInfo from 'components/AccountInfo';
import Web3Provider from 'components/Web3Provider';

// contexts
import WalletContext from 'contexts/wallet';

// constants
import { Wallet } from 'constants/index';

const Wrapper = styled.div`
  text-align: center;
`;

const App = () => {
  const [connectedWallet, setConnectedWallet] = useState<Wallet>();

  return (
    <Wrapper>
      <WalletContext.Provider value={connectedWallet}>
        <Web3Provider>
          <h1>Connect dApp Wallet</h1>
          <Wallets
            updateWalletState={setConnectedWallet}
          />
          <AccountInfo />
        </Web3Provider>
      </WalletContext.Provider>
    </Wrapper>
  );
}

export default App;
