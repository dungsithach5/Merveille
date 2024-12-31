import mongoose from 'mongoose';

const WineSchema = new mongoose.Schema({
    img: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
},{timestamps: true});

const wine = mongoose.model('Wine', WineSchema);

export default wine;
