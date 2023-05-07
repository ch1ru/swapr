import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function FundAccount() {

    
    const [bitcoinAddr, setBitcoinAddr] = useState("");

    useEffect(() => {

        const createWallet = async () => {
            
        }

        const getFundingAddr = async () => {
            const addr = "bc1qirjgirjojigjiorkjigj"
            setBitcoinAddr(addr);

            var QRCode = require('qrcode')
            var canvas = document.getElementById('canvas')

            QRCode.toCanvas(canvas, addr, function (error) {
            if (error) console.error(error)
            console.log(addr);
            })
        }

        createWallet();

        getFundingAddr();
    })

    return (
        
        <div className="flex flex-col w-full text-center">
            <h1 className="text-3xl">Fund account</h1>

            <div className="absolute flex flex-col left-1/2 text-center items-center -translate-x-1/2 mt-40">
                <h2 className="text-xl mt-4">Send bitcoin to this address</h2>

                <canvas id="canvas">

                </canvas>

                <h2>{bitcoinAddr}</h2>
            </div>

            <NavLink to='/'>
                <button className="absolute p-4 rounded-2xl bottom-0 right-0 mr-4 mb-4 text-white bg-blue-500">Next</button>
            </NavLink>
        </div>
        
    )
}