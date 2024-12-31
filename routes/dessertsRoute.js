import express from 'express';
import Desserts from '../models/desserts.model.js'
const router = express.Router();

import dessertsController from '../controllers/desserts.controller.js';

router.route("/")
    .post(dessertsController.createDesserts)
    .get(dessertsController.getDessertsById);

router.route("/:id")
    .patch(dessertsController.updateDesserts)
    .delete(dessertsController.deleteDesserts);

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const dessert = await Desserts.findById(id);
        res.json(dessert);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
});

export default router;
