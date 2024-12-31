import dinnerModel from '../models/dinner.model.js';
const dinnerController = {

    getDinnerById: async (req, res) => {
        try {
            const dinners = await dinnerModel.find();
            res.status(200).json(dinners);
        } catch (error) {
            res.status(500).send('Error fetching foods');
        }
    },


    createDinner: async (req, res) => {
        const body = req.body;
        try {
            const newDinner = await dinnerModel.create(body);
            res.status(201).json(newDinner);
        } catch (error) {
            res.status(500).send('Error creating foods');
        }
    },


    updateDinner: async (req, res) => {
        const id = req.params.id;
        const body = req.body;
        try {
            const updatedDinner = await dinnerModel.findByIdAndUpdate(id, body, { new: true });
            res.status(200).json(updatedDinner);
        } catch (error) {
            res.status(500).send('Error updating foods');
        }
    },


    deleteDinner: async (req, res) => {
        const id = req.params.id;
        try {
            const deletedDinner = await dinnerModel.findByIdAndDelete(id);
            res.status(200).json(deletedDinner);
        } catch (error) {
            res.status(500).send('Error deleting foods');
        }
    }
};

export default dinnerController;
