const express = require('express');
const router = express.Router();
const {Menu} = require('../models');

router.get('/:restaurantsId/menu', async (req, res, next) => {
    if (!isNaN(req.params.restaurantsId)){
        try {
            const menus = await Menu.findAll();
            res.json(menus);
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
    if (!isNaN(req.params.id)){
     try {
         const postMenu = await Menu.create(req.body);
         res.json(postMenu);
     }
     catch(e) {
         next(e.message);
     }
    }
  else{
        next(new Error("Mauvais ID : '" + req.params.id + "'"))
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