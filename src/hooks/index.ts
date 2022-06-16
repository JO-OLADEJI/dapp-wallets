import { useState, useEffect } from 'react';
import { useWeb3React } from '@web3-react/core';

// connectors
import { getConnectorForWallet } from 'connectors';

// constants
import { NETWORK_CONFIG, SupportedNetworks } from 'constants/chain';
import { Wallet } from 'constants/index';

export const useEagerConnect = () => {
  const [tried, setTried] = useState(false);
  const { isActive, isActivating } = useWeb3React();

  useEffect(() => {
    console.log({ tried, isActive, isActivating });
  }, [tried, isActive, isActivating]);

  useEffect(() => {
    // try metamask first
    const metamaskConnector = getConnectorForWallet(Wallet.METAMASK);
    metamaskConnector
      .activate(NETWORK_CONFIG[SupportedNetworks.RINKEBY])
      .catch((err) => setTried(true));
  }, []);

  return tried;
}
