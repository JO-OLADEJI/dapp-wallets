import { useCallback, useEffect } from "react";
import { ProviderRpcError } from "@web3-react/types";

// connectors
import { getConnectorForWallet } from "connectors";

// constants
import { Wallet } from "constants/index";

export const useEagerConnect = () => {
  const triedEagerly = sessionStorage.getItem('triedEagerly');

  const tryInjected = useCallback(() => {
    const metamaskConnector = getConnectorForWallet(Wallet.METAMASK);
    metamaskConnector.activate();
  }, []);

  const tryCoinbase = useCallback(async () => {
    let isCoinbaseWallet: boolean;
    try {
      isCoinbaseWallet = (window.ethereum as any).providers[0];
    } catch (err) {
      isCoinbaseWallet = false;
    }

    // try coinbase wallet
    if (triedEagerly !== '1') {
      if (isCoinbaseWallet) {
        const coninbaseWallet = getConnectorForWallet(Wallet.COINBASE);
        coninbaseWallet.activate().catch((err: ProviderRpcError) => {
          if (!(err.code === undefined || err.code === 4001)) {
            tryInjected();
          }
        });
      }
      else {
        tryInjected();
      }
      sessionStorage.setItem('triedEagerly', '1');
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    tryCoinbase();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
};
