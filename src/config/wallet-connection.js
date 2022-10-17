import React, { useMemo } from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";

const WalletConnection = ({ children }) => {
  const endpoint =
    "https://cosmopolitan-boldest-flower.solana-devnet.discover.quiknode.pro/50f802fc0966ef51b124faa220303155ad54a922/";
  const wallets = useMemo(() => [new PhantomWalletAdapter()], []);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        {children}
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default WalletConnection;
