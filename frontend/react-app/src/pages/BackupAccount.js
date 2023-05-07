import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function BackupAccount() {

    const [seedWords, setSeedWords] = useState(["apple", "cat", "dog", "pig", "pineapple", "frog", "grape", "raddish", "egg", "wet", "cup", "rot"]);

    return (
        <div class="flex items-center">
            <div className="fundingpage">
            <h1 class="text-3xl text-center">Backup phrase</h1>

            <section className="seed-words-section" class="p-4">
                
                <div class="mb-8 w-full text-center">
                    Copy these backup words and keep in a safe place
                </div>
                
                <div className="seedwords" class="gap-4 flex flex-col rounded-lg text-center">
                    {
                        seedWords.map((word, i) => {
                            return <div class="p-2" key={i}>{`${i + 1}. ${word}`}</div>
                        })
                    }
                </div>
                
            </section>
            </div>
            
            <NavLink to='/fundaccount'>
                <button className="absolute p-4 rounded-2xl bottom-0 right-0 mr-4 mb-4 text-white bg-blue-500">Next</button>
            </NavLink>
        </div>
    )
}