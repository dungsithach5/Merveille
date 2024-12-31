import beverageModel from '../models/beverages.model.js';
const beveragesController = {

    getBeveragesById: async (req, res) => {
        try {
            const beverages = await beverageModel.find();
            res.status(200).json(beverages);
        } catch (error) {
            res.status(500).send('Error fetching beverages');
        }
    },


    createBeverages: async (req, res) => {
        const body = req.body;
        try {
            const newBeverage = await beverageModel.create(body);
            res.status(201).json(newBeverage);
        } catch (error) {
            res.status(500).send('Error creating beverages');
        }
    },


    updateBeverages: async (req, res) => {
        const id = req.params.id;
        const body = req.body;
        try {
            const updatedBeverage = await beverageModel.findByIdAndUpdate(id, body, { new: true });
            res.status(200).json(updatedBeverage);
        } catch (error) {
            res.status(500).send('Error updating beverages');
        }
    },


    deleteBeverages: async (req, res) => {
        const id = req.params.id;
        try {
            const deletedBeverage = await beverageModel.findByIdAndDelete(id);
            res.status(200).json(deletedBeverage);
        } catch (error) {
            res.status(500).send('Error deleting beverages');
        }
    }
};

export default beveragesController;
