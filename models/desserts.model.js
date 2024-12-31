import mongoose from 'mongoose';

const DessertsSchema = new mongoose.Schema({
    img: { type: String, required: true },
    sub_img: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    sub_description: { type: String, required: true },
    price: { type: String, required: true },
},{timestamps: true});

const dessert = mongoose.model('Desserts', DessertsSchema);

export default dessert;
