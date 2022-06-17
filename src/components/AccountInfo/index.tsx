import React from 'react';
import styled from 'styled-components';
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
  const { account, chainId } = useWeb3React();

  return (
    <Wrapper>
      <Text>ChainId: {chainId}</Text>
      <Text>Account: {account ? shortenAddress(account) : null}</Text>
    </Wrapper>
  );
}

export default AccountInfo;
