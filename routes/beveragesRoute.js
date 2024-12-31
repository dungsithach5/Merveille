import express from 'express';
const router = express.Router();

import beveragesController from '../controllers/beverages.controller.js';

router.route("/")
    .post(beveragesController.createBeverages)
    .get(beveragesController.getBeveragesById);

router.route("/:id")
    .patch(beveragesController.updateBeverages)
    .delete(beveragesController.deleteBeverages);

export default router;
