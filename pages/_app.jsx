import "../styles/globals.css";
import Header from "../components/Header";
import {
  getHuddleClient,
  HuddleClientProvider,
} from "@huddle01/huddle01-client";

import { WagmiConfig, createClient, chain } from "wagmi";
import { ConnectKitProvider, getDefaultClient } from "connectkit";

const alchemyId = process.env.ALCHEMY_ID;

const chains = [chain.goerli];

const client = createClient(
  getDefaultClient({
    appName: "Your App Name",
    alchemyId,
    chains,
  })
);

export default function App({ Component, pageProps }) {
  const huddleClient = getHuddleClient(
    "052d7c4930885c3e9d837eb1e1eeab370465806b3315e96dc6afd9a734bc9068"
  );

  return (
    <>
      <div className="">
        <WagmiConfig client={client}>
          <ConnectKitProvider theme="soft">
            <HuddleClientProvider value={huddleClient}>
              <Header />

              <main className=" h-screen container">
                <Component {...pageProps} />
              </main>
            </HuddleClientProvider>
          </ConnectKitProvider>
        </WagmiConfig>
      </div>
    </>
  );
}
