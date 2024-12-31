// backend/server.js
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import connectDB from './config/db.js';
import foodRoute from './routes/foodRoute.js';
import lunchRouter from './routes/lunchRoute.js';
import beveragesRoute from './routes/beveragesRoute.js';
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
app.use('/api/foods', foodRoute);
app.use('/api/lunch', lunchRouter);
app.use('/api/beverages', beveragesRoute);
app.use('/api/desserts', dessertsRoute);
app.use('/api/reservation', reservationRoute);


// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
