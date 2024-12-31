import foodModel from '../models/food.model.js';
const foodController = {

    getfoodById: async (req, res) => {
        try {
            const foods = await foodModel.find();
            res.status(200).json(foods);
        } catch (error) {
            res.status(500).send('Error fetching foods');
        }
    },


    createFood: async (req, res) => {
        const body = req.body;
        try {
            const newFood = await foodModel.create(body);
            res.status(201).json(newFood);
        } catch (error) {
            res.status(500).send('Error creating foods');
        }
    },


    updatefood: async (req, res) => {
        const id = req.params.id;
        const body = req.body;
        try {
            const updatedFood = await foodModel.findByIdAndUpdate(id, body, { new: true });
            res.status(200).json(updatedFood);
        } catch (error) {
            res.status(500).send('Error updating foods');
        }
    },


    deletefood: async (req, res) => {
        const id = req.params.id;
        try {
            const deletedFood = await foodModel.findByIdAndDelete(id);
            res.status(200).json(deletedFood);
        } catch (error) {
            res.status(500).send('Error deleting foods');
        }
    }
};

export default foodController;
