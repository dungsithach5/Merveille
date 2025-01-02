import express from 'express';
import Reservation from '../models/reservation.model.js'
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

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const reservation = await Reservation.findById(id);
        res.json(reservation);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
});

export default router;
