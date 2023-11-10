const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const port = 3000;

app.get('/nasa-data', async (req, res) => {
    try{
        const response = await axios.get(
            `https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}` 
        );
        const data = response.data;
        res.json(data);
    } catch (error){
        res.status(500).json({error: 'Could not fetch NASA data.'});
    }
});

app.listen(port, () => {
    console.log('server is running on http://localhost:${port}');
});