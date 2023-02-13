import axios from "axios";
import env from "react-dotenv";
import React from "react";

export const axiosPublic = axios.create({
    baseURL: env.API_ENDPOINT
});

export const axiosPrivate = axios.create({
    baseURL: env.API_ENDPOINT,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});