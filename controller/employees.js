const express = require('express');
const router = express.Router();
const {Employee} = require('../models');
const {Restaurant} = require('../models');

router.get('/:restaurantId/employees', async (req, res, next) => {
    if (!isNaN(req.params.restaurantId)){
        try {
            const restaurant = await Restaurant.findById(req.params.restaurantId)
            if (restaurant != null){
                const employees = await Employee.findAll({where: {restaurantId: req.params.restaurantId}});
                res.json(employees);
            }
            else{
                next(new Error("Aucun restaurant correspondant '" + req.params.restaurantId + "'"))
            }
        }
        catch(e) {
            next(e.message);
        }
    }
    else{
        next(new Error("Mauvais ID : '" + req.params.restaurantId + "'"))
    }
});

router.post('/employee', async (req, res, next) => {
    try {
        const postEmployee = await Employee.create(req.body);
        res.json(postEmployee);
    }
    catch(e) {
        next(e.message);
    }
})

router.get('/employee/:id', async (req, res, next) => {
    if (!isNaN(req.params.id)){
        try {
            const employee = await Employee.findById(req.params.id);
            res.json(employee);
        }
        catch(e) {
            next(e.message);
        }
    }
    else{
        next(new Error("Mauvais ID : '" + req.params.id + "'"))
    }
});

router.put('/employee/:id', async (req, res, next) => {
    if (!isNaN(req.params.id)){
        try {
            const updateEmployee = await Employee.update(req.body, {
                where: {id:req.params.id}
            });
            res.json(updateEmployee)
        }
        catch(e) {
            next(e.message);
        }
    }
    else{
        next(new Error("Mauvais ID : '" + req.params.id + "'"))
    }
});

router.delete('/employee/:id', async (req, res, next) => {
    if (!isNaN(req.params.id)){
        try {
            const deleteEmployee = await Employee.destroy({
                where: {id: req.params.id}
            });
            res.json(deleteEmployee)
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