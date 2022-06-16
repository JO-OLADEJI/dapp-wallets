import React from 'react';
import { Web3ReactProvider } from '@web3-react/core';

// connectors
import { createOrderedConnectors } from 'connectors';

interface Props {
  children: React.ReactNode
}

const Web3Provider = ({ children }: Props) => {
  const connectors = createOrderedConnectors();
  return (
    <Web3ReactProvider connectors={connectors}>
      {children}
    </Web3ReactProvider>
  );
}

export default Web3Provider;
