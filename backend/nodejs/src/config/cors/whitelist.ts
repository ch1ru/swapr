import dotenv from 'dotenv';

dotenv.config();
let allowed_host = process.env.ALLOWED_HOST;

export const whitelist = [
    `http://${allowed_host}`,
    `https://${allowed_host}`
];