import wineModel from '../models/wine.model.js';
const wineController = {

    getWineById: async (req, res) => {
        try {
            const wines = await wineModel.find();
            res.status(200).json(wines);
        } catch (error) {
            res.status(500).send('Error fetching beverages');
        }
    },


    createWines: async (req, res) => {
        const body = req.body;
        try {
            const newWine = await wineModel.create(body);
            res.status(201).json(newWine);
        } catch (error) {
            res.status(500).send('Error creating beverages');
        }
    },


    updateWines: async (req, res) => {
        const id = req.params.id;
        const body = req.body;
        try {
            const updatedWine = await wineModel.findByIdAndUpdate(id, body, { new: true });
            res.status(200).json(updatedWine);
        } catch (error) {
            res.status(500).send('Error updating beverages');
        }
    },


    deleteWines: async (req, res) => {
        const id = req.params.id;
        try {
            const deletedWine = await wineModel.findByIdAndDelete(id);
            res.status(200).json(deletedWine);
        } catch (error) {
            res.status(500).send('Error deleting beverages');
        }
    }
};

export default wineController;
