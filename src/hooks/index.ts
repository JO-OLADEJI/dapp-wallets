import { useCallback } from "react";
import { ProviderRpcError } from "@web3-react/types";

// connectors
import { getConnectorForWallet } from "connectors";

// constants
import { Wallet } from "constants/index";

export const useEagerConnect = () => {
  const tryInjected = useCallback(() => {
    const metamaskConnector = getConnectorForWallet(Wallet.METAMASK);
    metamaskConnector.activate();
  }, []);

  return useCallback(() => {
    // try coinbase wallet first
    const isCoinbaseWallet: boolean = (window.ethereum as any).providers[0]
      .isCoinbaseWallet;
    if (isCoinbaseWallet) {
      const coninbaseWallet = getConnectorForWallet(Wallet.COINBASE);
      coninbaseWallet.activate().catch((err: ProviderRpcError) => {
        if (!(err.code === undefined || err.code === 4001)) {
          tryInjected();
        }
      });
    } else {
      tryInjected();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
};
