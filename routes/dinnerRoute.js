import express from 'express';
import Dinner from '../models/dinner.model.js'
const router = express.Router();

import dinnerController from '../controllers/dinner.controller.js';

router.route("/")
    .post(dinnerController.createDinner)
    .get(dinnerController.getDinnerById);

router.route("/:id")
    .patch(dinnerController.updateDinner)
    .delete(dinnerController.deleteDinner);

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const dinner = await Dinner.findById(id);
        res.json(dinner);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
});

export default router;
