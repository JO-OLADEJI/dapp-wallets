import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { BigNumber, ethers } from 'ethers';
import { useWeb3React } from '@web3-react/core';

// components
import { Text } from 'components/UI';

// utils
import { shortenAddress } from 'utils';

const Wrapper = styled.div`
  text-align: left;
  padding-left: 1rem;
`;

const AccountInfo = () => {
  const [balance, setBalance] = useState('0');
  const { account, provider, chainId } = useWeb3React();

  useEffect(() => {
    const getBalance = async () => {
      const balance = await provider?.getBalance(account ?? ethers.constants.AddressZero);
      const fmtBalance = ethers.utils.formatEther(balance ?? BigNumber.from('0'));
      setBalance(Number(fmtBalance).toFixed(4));
    }
    getBalance();
  }, [provider, account]);

  return (
    <Wrapper>
      <Text>ChainId: {chainId}</Text>
      <Text>Account: {account ? shortenAddress(account) : null}</Text>
      <Text>Balance: {balance} ETH</Text>
    </Wrapper>
  );
}

export default AccountInfo;
