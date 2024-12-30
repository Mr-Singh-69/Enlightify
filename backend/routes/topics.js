const express = require('express');
const { queryGemini, queryLlama } = require('../services/aiService');

const router = express.Router();

router.post('/ask', async (req, res) => {
    const { topic, question } = req.body;

    try {
        let response;
        if (['Science', 'History', 'Geography', 'Technology', 'Hobbies'].includes(topic)) {
            response = await queryGemini(question);
        } else if (['Life Skills', 'Mathematics'].includes(topic)) {
            response = await queryLlama(question);
        } else {
            return res.status(400).json({ error: 'Invalid topic selected.' });
        }

        res.json({ answer: response });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong.' });
    }
});

module.exports = router;
