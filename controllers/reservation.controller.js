import reservationModel from '../models/reservation.model.js';
const resevationController = {

    getReservationById: async (req, res) => {
        try {
            const reservations = await reservationModel.find();
            res.status(200).json(reservations);
        } catch (error) {
            res.status(500).send('Error fetching Reservation');
        }
    },


    createReservation: async (req, res) => {
        const body = req.body;
        try {
            const newReservation = await reservationModel.create(body);
            res.status(201).json(newReservation);
        } catch (error) {
            res.status(500).send('Error creating Reservation');
        }
    },


    updateReservation: async (req, res) => {
        const id = req.params.id;
        const body = req.body;
        try {
            const updatedReservation = await reservationModel.findByIdAndUpdate(id, body, { new: true });
            res.status(200).json(updatedReservation);
        } catch (error) {
            res.status(500).send('Error updating Reservation');
        }
    },


    deleteReservation: async (req, res) => {
        const id = req.params.id;
        try {
            const deletedReservation = await reservationModel.findByIdAndDelete(id);
            res.status(200).json(deletedReservation);
        } catch (error) {
            res.status(500).send('Error deleting Reservation');
        }
    }
};

export default resevationController;
