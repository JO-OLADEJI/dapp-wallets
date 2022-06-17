import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useWeb3React } from '@web3-react/core';

// components
import NetworkTag from 'components/NetworkTag';
import { Button, Input, Header, Icon } from 'components/UI';

// constants
import { SupportedNetworks } from 'constants/chain';

const NetworkTagWrapper = styled.div`
  margin-bottom: .8rem;
`;

export const PreferredNetworkContext = React.createContext<SupportedNetworks>(
  SupportedNetworks.RINKEBY
);

const TestTx = () => {
  const [preferredTxNetwork, setPreferredTxNetwork] = useState<SupportedNetworks>(
    SupportedNetworks.RINKEBY
  );
  const [amount, setAmount] = useState<number>(0);
  const [receiverAddress, setReceiverAddress] = useState<string>('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const { isActive } = useWeb3React();
  const Networks = [
    SupportedNetworks.RINKEBY,
    SupportedNetworks.FUJI,
    SupportedNetworks.BSC_TESTNET
  ];

  useEffect(() => {
    setIsButtonDisabled(!isActive || amount === 0 || receiverAddress.length !== 42);
  }, [isActive, amount, receiverAddress]);

  const handleReceiverAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    const ethAddressPattern = /^0?x?[a-fA-F0-9]*$/;
    const { value } = e.target;
    ethAddressPattern.test(value) && setReceiverAddress(value);
  }

  return (
    <PreferredNetworkContext.Provider value={preferredTxNetwork}>
      <Header>
        Transaction
        <Icon className="fa-solid fa-signature" />
      </Header>
      <NetworkTagWrapper>
        {Networks.map((network, index) => (
          <NetworkTag
            key={index}
            name={network}
            setNetwork={setPreferredTxNetwork}
          />
        ))}
      </NetworkTagWrapper>
      <Input
        type="text"
        value={receiverAddress}
        onChange={handleReceiverAddress}
        placeholder="receiver address"
        style={{ width: '94%' }}
      />
      <Input
        type="number"
        value={!!amount ? amount : ''}
        onChange={(e) => setAmount(Number(e.target.value))}
        placeholder="input amount"
        style={{ width: '16.8rem' }}
      />
      <Button
        disabled={isButtonDisabled}
        onClick={() => console.log({ isActive, amount, receiverAddress })}
      >
        Transfer
      </Button>
    </PreferredNetworkContext.Provider>
  );
}

export default TestTx;