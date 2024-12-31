// backend/server.js
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import connectDB from './config/db.js';
import dinnerRoute from './routes/dinnerRoute.js';
import lunchRouter from './routes/lunchRoute.js';
import wineRoute from './routes/wineRoute.js';
import dessertsRoute from './routes/dessertsRoute.js';
import reservationRoute from './routes/reservationRoute.js';

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

// Database connection
connectDB();

// Routes
app.use('/api/dinners', dinnerRoute);
app.use('/api/lunch', lunchRouter);
app.use('/api/wines', wineRoute);
app.use('/api/desserts', dessertsRoute);
app.use('/api/reservation', reservationRoute);


// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
