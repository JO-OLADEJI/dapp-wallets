import React from 'react';
import styled from 'styled-components';
import { useWeb3React } from '@web3-react/core';

// constants
import { Wallet } from 'constants/index';

// connectors
import { getWalletForConnector } from 'connectors';

const Wrapper = styled.div`
  border: 2px solid grey;
  border-radius: 1rem;
  padding: 0.5rem;
  display: flex;
  justify-items: flex-start;
  align-items: center;
  cursor: pointer;
  width: 20rem;
  margin: 1rem auto;
  position: relative;
`;

const Dot = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 3px;
  background-color: #24AF61;
  position: absolute;
  top: 50%;
  right: 1rem;
  transform: translateY(-50%);
`;

interface WalletMenuProps {
  children: React.ReactNode;
  onClick: () => Promise<void>;
  wallet: Wallet;
}

const WalletMenu = ({ children, onClick, wallet }: WalletMenuProps) => {
  const { connector } = useWeb3React();
  const currentWallet = getWalletForConnector(connector);

  return (
    <Wrapper onClick={onClick}>
      {children}
      {currentWallet === wallet ? <Dot /> : null}
    </Wrapper>
  );
};

export default WalletMenu;
