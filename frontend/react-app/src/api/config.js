import axios from "axios";
import React from "react";
import SenseiClient from '@l2-technology/sensei-client';

export const nodeClient = axios.create({
    baseURL: `http://localhost/api/nodejs`,
    headers: {
        "Content-type": "application/json; charset=UTF-8",
    }
});

const senseiHost = 'http://localhost/api/sensei';
export const senseiClient = new SenseiClient({ basePath: senseiHost });