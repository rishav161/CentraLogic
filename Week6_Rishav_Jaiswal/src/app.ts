import express from 'express';
import bookRoutes from './routes/bookRoutes';
import authorRoutes from './routes/authorRoutes';
import orderRoutes from './routes/orderRoutes';
import paymentRoutes from './routes/paymentRoutes';
import ratingRoutes from './routes/ratingRoutes';
import authRoutes from './routes/authRoutes';


// Import the associations to ensure they are applied
import './models/associations';

const app = express();
const port = 3000;

app.use(express.json());

// Routes
app.use('/api', authRoutes);
app.use('/api', bookRoutes);
app.use('/api', authorRoutes);
app.use('/api', orderRoutes);
app.use('/api', paymentRoutes);
app.use('/api', ratingRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
