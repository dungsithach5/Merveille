import express from 'express';
import Food from '../models/food.model.js'
const router = express.Router();

import foodController from '../controllers/food.controller.js';

router.route("/")
    .post(foodController.createFood)
    .get(foodController.getfoodById);

router.route("/:id")
    .patch(foodController.updatefood)
    .delete(foodController.deletefood);

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const food = await Food.findById(id);
        res.json(food);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
});

export default router;
