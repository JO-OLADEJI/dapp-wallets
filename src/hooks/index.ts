import { useMemo, useContext } from 'react';

// connectors
import { getHooksForWallet } from 'connectors';

// contexts
import WalletContext from 'contexts/wallet';

// constants
import { Wallet } from 'constants/index';

export const useActiveWeb3React = () => {
  const wallet = useContext(WalletContext);
  const { useIsActive, useAccount, useChainId, useProvider } = getHooksForWallet(wallet ?? Wallet.METAMASK);
  const isActive = useIsActive();
  const account = useAccount();
  const chainId = useChainId();
  const provider = useProvider();

  return useMemo(() => ({
    isActive, account, chainId, provider
  }), [isActive, account, chainId, provider]);
}
