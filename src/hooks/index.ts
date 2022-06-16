import { useState, useEffect } from 'react';

// connectors
import { getConnectorForWallet } from 'connectors';

// constants
import { Wallet } from 'constants/index';

export const useEagerConnect = () => {
  const [tried, setTried] = useState(false);

  useEffect(() => {
    // try metamask first
    const metamaskConnector = getConnectorForWallet(Wallet.METAMASK);
    metamaskConnector
      .activate()
      .catch((err) => setTried(true));
  }, []);

  return tried;
}
