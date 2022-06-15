import React from 'react';
import styled from 'styled-components';
import Wallets from 'components/Wallets';
import AccountInfo from 'components/AccountInfo';

const Wrapper = styled.div`
  text-align: center;
`;

function App() {
  return (
    <Wrapper>
      <h1>Connect dApp Wallet</h1>
      <Wallets />
      <AccountInfo />
    </Wrapper>
  );
}

export default App;
