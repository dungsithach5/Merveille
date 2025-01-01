import express from 'express';
const router = express.Router();

import reservationController from '../controllers/reservation.controller.js';

router.route("/")
    .post(reservationController.createReservation)
    .get(reservationController.getReservationById);

router.route("/:id")
    .patch(reservationController.updateReservation)
    .delete(reservationController.deleteReservation);

router.post('/reservation', async (req, res) => {
    try {
        const { name, email, date, time, partysize } = req.body;

        const newReservation = new Reservation({
            name,
            email,
            date,
            time,
            partysize,
        });

        await newReservation.save();

        res.status(201).json({ message: 'Reservation created successfully!' });
    } catch (error) {
        res.status(500).json({ message: 'Error saving reservation', error });
    }
});

export default router;
