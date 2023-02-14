import dotenv from 'dotenv';

dotenv.config();
let allowed_host = process.env.ALLOWED_HOST;

export const whitelist = [
    `http://${allowed_host}`,
    `https://${allowed_host}`,
    'https://172.16.0.5',
    'http://172.16.0.5'
];