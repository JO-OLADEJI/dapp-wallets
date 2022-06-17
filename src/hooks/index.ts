import { useState, useEffect } from 'react';
import { ProviderRpcError } from '@web3-react/types';

// connectors
import { getConnectorForWallet } from 'connectors';

// constants
import { Wallet } from 'constants/index';

export const useEagerConnect = () => {
  const [tried, setTried] = useState(false);
  const [triedCoinbase, setTriedCoinbase] = useState(false);
  const isCoinbaseWallet: boolean = (window.ethereum as any).providers[0].isCoinbaseWallet;

  // console.log((window.ethereum as any).providers);

  useEffect(() => {
    // try coinbase first
    if (isCoinbaseWallet) {
      // try coinbase
      const coninbaseWallet = getConnectorForWallet(Wallet.COINBASE);
      coninbaseWallet
        .activate()
        .catch((err: ProviderRpcError) => {
          if (!(err.code === undefined || err.code === 4001)) {
            setTriedCoinbase(true);
          }
        });
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!tried && triedCoinbase) {
      const metamaskConnector = getConnectorForWallet(Wallet.METAMASK);
      metamaskConnector
        .activate()
        .catch((err) => setTried(true));
    }
  }, [triedCoinbase]) // eslint-disable-line react-hooks/exhaustive-deps

  return tried;
}
