import React from "react";
import "./App.css";
import { useWallet } from "@solana/wallet-adapter-react";
import { PhantomWalletName } from "@solana/wallet-adapter-wallets";

function App() {
  const { select } = useWallet();

  return (
    <div className="App">
      <button
        onClick={() => {
          select(PhantomWalletName);
        }}
      >
        Connect
      </button>
    </div>
  );
}

export default App;
