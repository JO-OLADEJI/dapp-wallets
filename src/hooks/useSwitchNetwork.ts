import { useCallback } from "react";
import { useWeb3React } from "@web3-react/core";
import { ProviderRpcError } from "@web3-react/types";

// constants
import { NETWORK_CONFIG, SupportedNetworks } from "constants/chain";
import { Wallet } from "constants/index";

// connectors
import { getConnectorForWallet } from 'connectors';

// utils
import { toHexString } from 'utils';

const useSwitchNetwork = () => {
  const { connector } = useWeb3React();
  const ethereum = connector?.provider ?? getConnectorForWallet(Wallet.METAMASK).provider; // use injected as fallback

  const addNetwork = useCallback(async (network: SupportedNetworks): Promise<boolean> => {
    if (ethereum && ethereum.request) {
      return ethereum.request({
        method: "wallet_addEthereumChain",
        params: [{
          ...NETWORK_CONFIG[network],
          chainId: toHexString(NETWORK_CONFIG[network]['chainId'])
        }]
      })
      .then(() => true)
      .catch((error: ProviderRpcError) => {
        console.error(error);
        return false;
      });
    } else {
      return false;
    }
  }, [ethereum]);

  return useCallback((network: SupportedNetworks) => {
    if (ethereum && ethereum.request) {
      return ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: toHexString(NETWORK_CONFIG[network]['chainId']) }],
      })
      .then(() => true)
      .catch((error: ProviderRpcError) => {
        if (error.code === 4902) {
          return addNetwork(network);
        } else {
          return false;
        }
      });
    } else {
      return false;
    }
  }, [addNetwork, ethereum]);
};

export default useSwitchNetwork;
