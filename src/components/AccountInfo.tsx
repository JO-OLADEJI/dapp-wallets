import React, { useState, useEffect } from 'react';
import { BigNumber, ethers } from 'ethers';

// hooks
import { useActiveWeb3React } from 'hooks';

const AccountInfo = () => {
  const [balance, setBalance] = useState(0);
  const { account, chainId, provider } = useActiveWeb3React();

  useEffect(() => {
    const getBalance = async () => {
      const balance = await provider?.getBalance(account ?? ethers.constants.AddressZero);
      const fmtBalance = ethers.utils.formatEther(balance ?? BigNumber.from('0'));
      setBalance(Number(fmtBalance));
    }
    getBalance();
  }, [provider, account]);

  return (
    <div>
      <h1>ChainId: {chainId}</h1>
      <h1>Account: {account}</h1>
      <h1>Balance: {balance} ETH</h1>
    </div>
  );
}

export default AccountInfo;
