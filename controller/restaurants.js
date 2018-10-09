const Restaurants = require('../models/Restaurants');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const restaurants = await Restaurants.getRestaurants();
        res.json(restaurants);
    }
    catch (e) {
        next(e);
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const restaurant = await Restaurants.getRestaurant(req.params.id);
        res.json(restaurant);
    }
    catch (e) {
        next(e);
    }
});

router.get('/:restaurantId/employees', async (req, res, next) => {
    try {
        const employees = await Restaurants.getEmployeeFromRestaurant(req.params.restaurantId);
        res.json(employees);
    }
    catch (e) {
        next(e);
    }
});

router.get('/:restaurantId/menus', async (req, res, next) => {
    try {
        const menus = await Restaurants.getMenusFromRestaurant(req.params.restaurantId);
        res.json(menus);
    }
    catch (e) {
        next(e);
    }
});

router.post('/', async (req, res, next) => {
    try {
        await Restaurants.postRestaurant(
            req.body.address,
            req.body.name,
            req.body.capacity
        );
        res.sendStatus(201);
    }
    catch (e) {
        next(e)
    }
});

router.put('/:id', async (req, res, next) => {
    try {
        await Restaurants.putRestaurant(
            req.body.address,
            req.body.name,
            req.body.capacity,
            req.params.id
        );
        res.sendStatus(200);
    }
    catch (e) {
        next(e)
    }
});

router.delete('/:id', async (req, res, next) => {
    try {
        await Restaurants.deleteRestaurant(req.params.id);
        res.sendStatus(202);
    }
    catch (e) {
        next(e);
    }
});

module.exports = router;