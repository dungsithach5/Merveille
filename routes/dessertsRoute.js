import express from 'express';
const router = express.Router();

import dessertsController from '../controllers/desserts.controller.js';

router.route("/")
    .post(dessertsController.createDesserts)
    .get(dessertsController.getDessertsById);

router.route("/:id")
    .patch(dessertsController.updateDesserts)
    .delete(dessertsController.deleteDesserts);

export default router;
