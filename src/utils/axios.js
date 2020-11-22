const axios = require('axios');
const {customError} = require("./helper");

const axiosInstance = axios.create({
    baseURL: process.env.API_URL
});

axiosInstance.interceptors.response.use(response => response.data,
    error => {
        console.log('axios')
        return Promise.reject(customError(error.response.status, error.response.data.message));
    });

module.exports = {axiosInstance}