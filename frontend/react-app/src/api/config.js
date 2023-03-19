import axios from "axios";
import React from "react";

export const axiosPublic = axios.create({
    url: `http://localhost:4000`,
    headers: {
        "Content-type": "application/json; charset=UTF-8",
    }
});