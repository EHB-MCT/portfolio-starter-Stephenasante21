const Car = require('../models/carModel');

exports.getAllCars = async (req, res) => {
    const cars = await Car.getAll();
    res.json(cars);
};

exports.getCarById = async (req, res) => {
    const carId = parseInt(req.params.id);
    const car = await Car.getById(carId);
    if (!car) {
        return res.status(404).json({ error: 'Car not found' });
    }
    res.json(car);
};

exports.addCar = async (req, res) => {
    const newCar = req.body;
    const car = await Car.add(newCar);
    res.status(201).json(car);
};