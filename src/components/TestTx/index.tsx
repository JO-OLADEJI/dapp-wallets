import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";

// components
import NetworkTag from "components/NetworkTag";
import { Button, Input, Header, Icon } from "components/UI";

// hooks
import useSwitchNetwork from "hooks/useSwitchNetwork";

// constants
import { SupportedNetworks } from "constants/chain";

const NetworkTagWrapper = styled.div`
  margin-bottom: 0.8rem;
`;

export const PreferredNetworkContext = React.createContext<SupportedNetworks>(
  SupportedNetworks.RINKEBY
);

const TestTx = () => {
  const [preferredTxNetwork, setPreferredTxNetwork] =
    useState<SupportedNetworks>(SupportedNetworks.RINKEBY);
  const [amount, setAmount] = useState<string>('');
  const [receiverAddress, setReceiverAddress] = useState<string>("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [hasRequestedTx, setHasRequestedTx] = useState(false);
  const [isTxPrepared, setIsTxPrepared] = useState(false);
  const { isActive, provider, chainId, account } = useWeb3React();
  const switchPreferredNetwork = useSwitchNetwork();

  const Networks = [
    SupportedNetworks.RINKEBY,
    SupportedNetworks.FUJI,
    SupportedNetworks.BSC_TESTNET,
  ];

  useEffect(() => {
    setIsButtonDisabled(
      !isActive || Number(amount) === 0 || receiverAddress.length !== 42
    );
  }, [isActive, amount, receiverAddress]);

  useEffect(() => {
    // sign transaction here
    const signTransaction = async () => {
      setHasRequestedTx(false);
      const transaction = {
        chainId: preferredTxNetwork,
        from: account,
        to: receiverAddress,
        value: ethers.utils.parseEther(amount ?? '0'),
      };
      const signer = provider?.getSigner(account);
      const tx = await signer?.sendTransaction(transaction);
      await tx?.wait();
      alert(tx?.hash);
    }

    if (isActive && hasRequestedTx && isTxPrepared && preferredTxNetwork === chainId) {
      signTransaction();
    }
  }, [
    preferredTxNetwork,
    account,
    receiverAddress,
    amount,
    hasRequestedTx,
    isTxPrepared,
    chainId,
    provider,
    isActive
  ]);

  const handleReceiverAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    const ethAddressPattern = /^0?x?[a-fA-F0-9]*$/;
    const { value } = e.target;
    ethAddressPattern.test(value) && setReceiverAddress(value);
  };

  const prepareTransaction = async () => {
    setHasRequestedTx(true);
    try {
      if (isActive && preferredTxNetwork !== chainId) {
        const switched = await (switchPreferredNetwork(preferredTxNetwork) as Promise<boolean>);
        setIsTxPrepared(switched);
      }
      else if (isActive && preferredTxNetwork === chainId) {
        setIsTxPrepared(true);
      }
    } catch (error) {
      console.error(error);
      setHasRequestedTx(false);
    }
  };

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
        style={{ width: "94%" }}
      />
      <Input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="input amount"
        style={{ width: "16.8rem" }}
      />
      <Button disabled={isButtonDisabled} onClick={prepareTransaction}>
        Transfer
      </Button>
    </PreferredNetworkContext.Provider>
  );
};

export default TestTx;
