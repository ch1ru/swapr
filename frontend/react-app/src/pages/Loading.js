import React, { useEffect } from "react";
import { senseiClient } from "../api/config";
import SenseiClient from "@l2-technology/sensei-client";
import { useContext } from "react";

export default function Loading() {

  useEffect(() => {

    async function init() {
      // initialize your sensei node
      const { pubkey, macaroon } = await senseiClient.init({
        username: 'satoshi5',
        alias: 'satoshi5',
        passphrase: 'satoshi',
        electrumUrl: 'ssl://blockstream.info:993',
        start: true
      });

      senseiClient.setMacaroon(macaroon);
      console.log(macaroon)

      //create node alice
      const { alicePubkey, aliceMacaroon } = await senseiClient.createNode({
        username: 'alice6',
        alias: 'alice6',
        passphrase: 'alice',
        start: true
      });

      // search nodes for alice
      const { nodes } = await senseiClient.getNodes({
        page: 0,
        searchTerm: alicePubkey,
        take: 1
      });

      const aliceNodeInfo = nodes[0];
      const { listenAddr, listenPort } = aliceNodeInfo;

      console.log(aliceNodeInfo)
    };

    init();

  })

  return (
    <>
      <div class="bg-green-500">

      </div>
    </>
  )
}

