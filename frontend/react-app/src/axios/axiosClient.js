import axios from "axios";

const axiosClient = axios.create({
    baseURL: 'http://localhost/api/v1',
    headers: {cookie: 'token=19d2e6f4b13088ce2c5b99c81dbf2d5c4cc65418ce9bd2699c7a6ae5312cdfa3'}
});

export default axiosClient;