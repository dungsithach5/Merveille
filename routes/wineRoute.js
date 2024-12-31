import express from 'express';
const router = express.Router();

import wineController from '../controllers/wine.controller.js';

router.route("/")
    .post(wineController.createWines)
    .get(wineController.getWineById);

router.route("/:id")
    .patch(wineController.updateWines)
    .delete(wineController.deleteWines);

export default router;
