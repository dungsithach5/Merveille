import express from 'express';
import Lunch from '../models/lunch.model.js'
const router = express.Router();

import LunchController from '../controllers/lunch.controller.js';

router.route("/")
    .post(LunchController.createLunch)
    .get(LunchController.getLunchById);

router.route("/:id")
    .patch(LunchController.updateLunch)
    .delete(LunchController.deleteLunch);

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const appertizers = await Lunch.findById(id);
        res.json(appertizers);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
});
export default router;
