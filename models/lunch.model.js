import mongoose from 'mongoose';

const LunchSchema = new mongoose.Schema({
    img: { type: String, required: true },
    sub_img: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    sub_description: { type: String, required: true },
    price: { type: String, required: true },
},{timestamps: true});

const lunch = mongoose.model('Lunch', LunchSchema);

export default lunch;
