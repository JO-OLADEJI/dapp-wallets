import React from 'react';
import styled from 'styled-components';

// components
import Wallets from 'components/Wallets';
import AccountInfo from 'components/AccountInfo';
import Web3Provider from 'components/Web3Provider';

const Wrapper = styled.div`
  text-align: center;
`;

const App = () => {
  return (
    <Wrapper>
      <Web3Provider>
        <h1>Connect dApp Wallet</h1>
        <Wallets />
        <AccountInfo />
      </Web3Provider>
    </Wrapper>
  );
}

export default App;
