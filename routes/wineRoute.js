import express from 'express';
import Wine from '../models/wine.model.js'
const router = express.Router();

import wineController from '../controllers/wine.controller.js';

router.route("/")
    .post(wineController.createWines)
    .get(wineController.getWineById);

router.route("/:id")
    .patch(wineController.updateWines)
    .delete(wineController.deleteWines);

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const wine = await Wine.findById(id);
        res.json(wine);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
});

export default router;
