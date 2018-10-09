const Menu = require('../models/Menu');
const express = require('express');
const router = express.Router();
const { getRestaurant } = require('../models/Restaurants');

router.get('/', async (req, res, next) => {
    try {
        res.json(await Menu.getMenus());
    }
    catch (e) {
        next(e);
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const menu = await Menu.getMenu(req.params.id);
        res.json(menu);
    }
    catch (e) {
        next(e);
    }
});

router.post('/', async (req, res, next) => {
    try {
        await Menu.postMenu(
            req.body.name,
            req.body.restaurantId,
        );
        res.sendStatus(201);
    }
    catch (e) {
        next(e);
    }
});

router.put('/:id', async (req, res, next) => {
    try {
        const restaurant = await getRestaurant(req.body.restaurantId);
        if (restaurant !== undefined) {
            await Menu.putMenu(
                req.body.name,
                req.body.restaurantId,
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
        await Menu.deleteMenu(req.params.id);
        res.sendStatus(202);
    }
    catch (e) {
        next(e);
    }
});

module.exports = router;