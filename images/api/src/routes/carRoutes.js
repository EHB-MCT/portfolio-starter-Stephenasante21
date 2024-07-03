const express = require('express');
const carController = require('../controllers/carController');
const router = express.Router();

router.get('/', carController.getAllCars);
router.get('/:id', carController.getCarById);
router.post('/', carController.addCar);

module.exports = router;