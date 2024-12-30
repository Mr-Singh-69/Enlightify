const axios = require('axios');

const GEMINI_API_URL = 'https://gemini-api.example.com/query';
const LLAMA_API_URL = 'https://llama-api.example.com/query';

const queryGemini = async (question) => {
    const response = await axios.post(GEMINI_API_URL, { question });
    return response.data.answer;
};

const queryLlama = async (question) => {
    const response = await axios.post(LLAMA_API_URL, { question });
    return response.data.answer;
};

module.exports = { queryGemini, queryLlama };
