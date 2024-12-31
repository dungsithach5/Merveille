import mongoose from 'mongoose';

const ReservationSchema = new mongoose.Schema({
    name: { type: String, required: true },           
    branch: { type: String, required: true },         
    email: { type: String, required: true },          
    phoneNumber: { type: Number, required: true },   
    adult: { type: Number, required: true },    
    children: { type: Number, required: true }, 
    date: { type: String, required: true },           
    time: { type: String, required: true },           
    note: { type: String }                           
}, { timestamps: true });                             

const Reservation = mongoose.model('Reservations', ReservationSchema);

export default Reservation;
