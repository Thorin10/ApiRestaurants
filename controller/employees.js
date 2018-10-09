const Employees = require('../models/Employees');
const express = require('express');
const router = express.Router();
const { getRestaurant } = require('../models/Restaurants');

router.get('/', async (req, res, next) => {
    try {
        res.json(await Employees.getEmployees());
    }
    catch (e) {
        next(e);
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const employee = await Employees.getEmployee(req.params.id);
        res.json(employee);
    }
    catch (e) {
        next(e);
    }
});

router.post('/', async (req, res, next) => {
    try {
        const restaurant = await getRestaurant(req.body.restaurantId);
        if (restaurant !== undefined) {
            await Employees.postEmployee(
                req.body.name,
                req.body.restaurantId,
                req.body.position
            );
            res.sendStatus(201);
        }
        else {
            throw new Error('Le restaurant n\'existe pas');
        }
    }
    catch (e) {
        next(e.message);
    }
});

router.put('/:id', async (req, res, next) => {
    try {
        const restaurant = await getRestaurant(req.body.restaurantId);
        if (restaurant !== undefined) {
            await Employees.putEmployee(
                req.body.name,
                req.body.restaurantId,
                req.body.position,
                req.params.id
            );
            res.sendStatus(200);
        }
        else {
            throw new Error('Le restaurant n\'existe pas');
        }
    }
    catch (e) {
        next(e.message);
    }
});

router.delete('/:id', async (req, res, next) => {
    try {
        await Employees.deleteEmployee(req.params.id);
        res.sendStatus(202);
    }
    catch (e) {
        next(e);
    }
});

module.exports = router;