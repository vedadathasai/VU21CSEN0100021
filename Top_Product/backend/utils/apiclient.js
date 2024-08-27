// q1/backend/utils/apiClient.js
const axios = require('axios');

const apiClient = axios.create({
  baseURL: 'http://20.244.56.144/test', // Base URL of the external API
});

module.exports = apiClient;
