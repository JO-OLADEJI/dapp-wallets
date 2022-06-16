import React from 'react';
import styled from 'styled-components';

// components
import Wallets from 'components/Wallets';
import AccountInfo from 'components/AccountInfo';
import Web3Provider from 'components/Web3Provider';
import { Icon, Header, Divider } from 'components/UI';

const AppContainer = styled.div`
  text-align: center;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  width: 25rem;
  padding: 1.5rem 0.5rem;
  border-radius: 1rem;
  border: 1px solid #EAEAF5;
  box-shadow: 3px 3px 20px 3px #e5e5e5;
`;

const App = () => {
  return (
    <AppContainer>
      <Web3Provider>
        <Box>
          <Header>
            Connect
            <Icon className="fa-solid fa-wallet" />
          </Header>
          <Wallets />
          <AccountInfo />
          <Divider />
        </Box>
      </Web3Provider>
    </AppContainer>
  );
}

export default App;
