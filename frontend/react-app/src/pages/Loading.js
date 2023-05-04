import React, { useEffect } from "react";
import axiosClient from "../axios/axiosClient";

export default function Loading() {

    useEffect(async () => {

        await axiosClient.post(`/nodes/start`, {
            passphrase: "sensei", 
            pubkey: '03082e433429cab04f5aac9a5b0dcbf170401c2e49a9859e79996d03839dbe65e3'
        }).then((res) => {
            
            console.log(res)
        }).catch((err) => {
            console.log("there was an error")
            console.log(err)
        })


    })

    return (
        <>
            <div class="bg-green-500">
                
            </div>
        </>
    )
}