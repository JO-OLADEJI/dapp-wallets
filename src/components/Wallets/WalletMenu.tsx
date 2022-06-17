import React from 'react';
import styled from 'styled-components';
import { useWeb3React } from '@web3-react/core';

// components
import { Icon } from 'components/UI';

// constants
import { Wallet } from 'constants/index';

// connectors
import { getWalletForConnector } from 'connectors';

const Wrapper = styled.div`
  border: 2px solid #EAEAF5;
  border-radius: 1rem;
  padding: 0.5rem;
  display: flex;
  justify-items: flex-start;
  align-items: center;
  cursor: pointer;
  position: relative;
  margin-bottom: .8rem;

  &:hover {
    background-color: #F6F7FE;
  }
`;

const Dot = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 3px;
  background-color: #24AF61;
  position: absolute;
  top: 50%;
  right: 3rem;
  transform: translateY(-50%);
`;

const DisconnectButton = styled.div`
  padding: .3rem;
  border-radius: .6rem;
  position: absolute;
  top: 50%;
  right: .35rem;
  transform: translateY(-50%);
  border: 1px solid #EAEAF5;
  width: 2rem;
  text-align: center;
  color: #6B6D76;

  &:hover {
    color: #242525;
  }
`;

const ButtonIcon = styled(Icon)`
  font-size: .9rem;
  cursor: pointer;
  margin: 0;
`;

interface WalletMenuProps {
  children: React.ReactNode;
  onClick: () => Promise<void>;
  wallet: Wallet;
}

const WalletMenu = ({ children, onClick, wallet }: WalletMenuProps) => {
  const { connector, account } = useWeb3React();
  const currentWallet = getWalletForConnector(connector);

  const disconnectWallet = () => {
    connector.deactivate ? connector.deactivate() : connector.resetState();
  }

  return (
    <Wrapper onClick={onClick}>
      {children}
      {account && currentWallet === wallet ? <Dot /> : null}
      {account && currentWallet === wallet
        ? <DisconnectButton title="disconnect" onClick={disconnectWallet}>
            <ButtonIcon
              className="fa-solid fa-trash"
            />
          </DisconnectButton>
        : null}
    </Wrapper>
  );
};

export default WalletMenu;
