const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Use body-parser middleware to parse JSON requests
app.use(bodyParser.json());

// In-memory array to store Porsche cars
let porscheCars = [
    { id: 1, model: '911 Carrera', year: 2022 },
    { id: 2, model: 'Cayenne', year: 2022 },
    { id: 3, model: 'Taycan', year: 2019 },
    { id: 4, model: 'GR3 RS', year: 2022 },
];

// Middleware to log incoming requests
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Routes

// Get all Porsche cars
app.get('/cars', (req, res) => {
    res.json(porscheCars);
});

// Get a specific Porsche car by ID
app.get('/cars/:id', (req, res) => {
    const carId = parseInt(req.params.id);
    const car = porscheCars.find((c) => c.id === carId);

    if (!car) {
        return res.status(404).json({ error: 'Car not found' });
    }

    res.json(car);
});

// Add a new Porsche car
app.post('/cars', (req, res) => {
    const newCar = req.body;
    newCar.id = porscheCars.length + 1;

    porscheCars.push(newCar);
    res.status(201).json(newCar);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
