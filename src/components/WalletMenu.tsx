import React from "react";
import styled from "styled-components";

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
`;

interface WalletMenuProps {
  children: React.ReactNode;
  onClick: () => Promise<void>;
}

const WalletMenu = ({ children, onClick }: WalletMenuProps) => {
  return <Wrapper onClick={onClick}>{children}</Wrapper>;
};

export default WalletMenu;
