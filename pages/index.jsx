import React, { useState } from "react";

import {
  useAccount,
  useConnect,
  useDisconnect,
  useEnsName,
  useProvider,
  useSigner,
} from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";

import { useRouter } from "next/router";
import { Framework } from "@superfluid-finance/sdk-core";
import { ethers } from "ethers";

// import { supabase } from "../utils/supabse";

function Index() {
  const { address, isConnected } = useAccount();
  const { data: signer } = useSigner();
  const provider = useProvider({ chainId: 137 });
  const router = useRouter();

  const generateLink = async () => {
    console.log({ InjectedConnector });
    console.log("Generating Huddle01 Link ....");
    console.log({ provider });
    // const web3Provider = new ethers.providers.Web3Provider(provider);
    // console.log({ web3Provider });
    const sf = await Framework.create({
      chainId: 5, //your chainId here
      provider: provider,
    });

    const web3ModalSigner = sf.createSigner({
      provider,
      signer,
    });
    
    router.push(`/room/${address}`);
  };

  return (
    <div className="w-screen">
      <div className="flex container mx-auto flex items-center">
        <div className=" w-full flex items-center justify-center">
          <div className="pl-[30px] mt-[100px] w-[400px]">
            <div className="text-center">
              <span className="text-[35px]">Start with TokenTalk!</span>
              <p>Decentralised consultation with money streaming</p>
            </div>
            <div className="mt-[25px]">
              <div className="">
                <div className="mt-[15px]">
                  <p className="pb-[10px]">Token Per Minute</p>
                  <select
                    id="token"
                    className="w-full px-[10px] py-[7px] border"
                  >
                    <option value="dat">10</option>
                  </select>
                </div>

                <div className="mt-[15px]">
                  <p className="pb-[10px]">Select Token</p>
                  <select
                    id="token"
                    className="w-full px-[10px] py-[7px] border"
                  >
                    <option value="daix">Daix</option>
                  </select>
                </div>
              </div>

              {/* <div className="mt-[15px] border rounded-lg px-[20px] py-[10px] space-x-[10px] flex">
              <input type="checkbox" />
              <p>I want Consultation</p>
            </div> */}

              <div className="mt-[30px]">
                <button
                  onClick={() => generateLink()}
                  className="px-[20px] py-[10px] rounded-lg bg-[#7DB9B6] text-white w-full"
                >
                  Start Instant Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
