import dessertModel from '../models/desserts.model.js';
const dessertsController = {

    getDessertsById: async (req, res) => {
        try {
            const desserts = await dessertModel.find();
            res.status(200).json(desserts);
        } catch (error) {
            res.status(500).send('Error fetching desserts');
        }
    },


    createDesserts: async (req, res) => {
        const body = req.body;
        try {
            const newDessert = await dessertModel.create(body);
            res.status(201).json(newDessert);
        } catch (error) {
            res.status(500).send('Error creating desserts');
        }
    },


    updateDesserts: async (req, res) => {
        const id = req.params.id;
        const body = req.body;
        try {
            const updatedDessert = await dessertModel.findByIdAndUpdate(id, body, { new: true });
            res.status(200).json(updatedDessert);
        } catch (error) {
            res.status(500).send('Error updating desserts');
        }
    },


    deleteDesserts: async (req, res) => {
        const id = req.params.id;
        try {
            const deletedDessert = await dessertModel.findByIdAndDelete(id);
            res.status(200).json(deletedDessert);
        } catch (error) {
            res.status(500).send('Error deleting desserts');
        }
    }
};

export default dessertsController;
