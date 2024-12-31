import LunchModel from '../models/lunch.model.js';
const lunchController = {

    getLunchById: async (req, res) => {
        try {
            const lunch = await LunchModel.find();
            res.status(200).json(lunch);
        } catch (error) {
            res.status(500).send('Error fetching appetizers');
        }
    },


    createLunch: async (req, res) => {
        const body = req.body;
        try {
            const newLunch = await LunchModel.create(body);
            res.status(201).json(newLunch );
        } catch (error) {
            res.status(500).send('Error creating appetizers');
        }
    },


    updateLunch: async (req, res) => {
        const id = req.params.id;
        const body = req.body;
        try {
            const updatedLunch  = await LunchModel.findByIdAndUpdate(id, body, { new: true });
            res.status(200).json(updatedLunch );
        } catch (error) {
            res.status(500).send('Error updating appetizers');
        }
    },


    deleteLunch: async (req, res) => {
        const id = req.params.id;
        try {
            const deletedLunch  = await LunchModel.findByIdAndDelete(id);
            res.status(200).json(deletedLunch );
        } catch (error) {
            res.status(500).send('Error deleting appetizers');
        }
    }
};

export default lunchController;
