import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  border: 2px solid grey;
  border-radius: 1rem;
  padding: .5rem;
  display: flex;
  justify-items: flex-start;
  align-items: center;
  cursor: pointer;
  width: 20rem;
  margin: 1rem auto;
`

interface WalletMenuProps {
  children: React.ReactNode
}

const WalletMenu = ({ children }: WalletMenuProps) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
}

export default WalletMenu;
