import React from 'react';

// connectors
import { Wallet } from 'constants/index';

const WalletContext = React.createContext<Wallet | undefined>('' as Wallet);

export default WalletContext;
