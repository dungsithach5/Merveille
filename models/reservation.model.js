import mongoose from 'mongoose';

const ReservationSchema = new mongoose.Schema({
    name: { type: String, required: true },                 
    email: { type: String, required: true },          
    date: { type: String, required: true },           
    time: { type: String, required: true },
    partysize: { type: Number, required: true },                           
}, { timestamps: true });                             

const Reservation = mongoose.model('Reservations', ReservationSchema);

export default Reservation;
