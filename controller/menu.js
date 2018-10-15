const express = require('express');
const router = express.Router();
const {Menu} = require('../models');
const {Restaurant} = require('../models');

router.get('/:restaurantId/menu', async (req, res, next) => {
    if (!isNaN(req.params.restaurantId)){
        try { 
            const restaurant = await Restaurant.findById(req.params.restaurantId)
            if (restaurant != null){
                const menu = await Menu.findAll({
                    where: {restaurantId: req.params.restaurantId}});
                res.json(menu)
            }
            else {
                res.send("Error: Le restaurant n'existe pas")
            }
        }
        catch(e) {
            next(e.message);
        }
    }
    else{
        next(new Error("Mauvais ID : '" + req.params.restaurantsId + "'"))
    }
});

router.post('/menu', async (req, res, next) => {
    try {
        const postMenu = await Menu.create(req.body);
        res.json(postMenu);
    }
    catch(e) {
        next(e.message);
    }
});

router.get('/menu/:id', async (req, res, next) => {
    if (!isNaN(req.params.id)){
        try {
            const menu = await Menu.findById(req.params.id);
            res.json(menu);
        }
        catch(e) {
            next(e.message);
        }
    }
    else{
        next(new Error("Mauvais ID : '" + req.params.id + "'"))
    }
});

router.put('/menu/:id', async (req, res, next) => {
    if (!isNaN(req.params.id)){
        try {
            const updateMenu =  await Menu.update(req.body, {
             where: {id:req.params.id}
          });
          res.json(updateMenu);
        }
        catch(e) {
          next(e.message);
        }
    }
    else{
        next(new Error("Mauvais ID : '" + req.params.id + "'"))
    }
});

router.delete('/menu/:id', async (req, res, next) => {
    if (!isNaN(req.params.id)){
        try {
            const deleteMenu = await Menu.destroy({
               where: {id:req.params.id}
            });
            res.json(deleteMenu);
        }
        catch(e) {
           next(e.message);
        }
    }
    else{
        next(new Error("Mauvais ID : '" + req.params.id + "'"))
    }
});

module.exports = router;