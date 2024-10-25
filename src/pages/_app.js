import { useEffect, useState } from "react";

import "@/styles/globals.css";
import { NearContext } from "@/context";

import { Wallet } from "@/wallets/near";
import { NetworkId, GuestbookNearContract } from "@/config";

const wallet = new Wallet({
  createAccessKeyFor: GuestbookNearContract,
  networkId: NetworkId,
});

export default function MyApp({ Component, pageProps }) {
  const [signedAccountId, setSignedAccountId] = useState("");

  useEffect(() => {
    wallet.startUp(setSignedAccountId);
  }, []);

  return (
    <NearContext.Provider value={{ wallet, signedAccountId }}>
      <Component {...pageProps} />
    </NearContext.Provider>
  );
}
