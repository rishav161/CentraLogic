import express, { Request, Response } from 'express';

// Routes
import organizationRoutes from './routes/organizationRoutes';
import customerRoutes from './routes/customerRoutes';
import sowRoutes from './routes/sowRoutes';
import paymentRoutes from './routes/paymentRoutes'; // Importing paymentRoutes
import paymentPlanLineItemRoutes from './routes/planItemRoutes';

const app = express();
const port = 3000;

app.use(express.json());

// Organization
app.use('/api/organizations', organizationRoutes);

// Customer
app.use('/api/customers', customerRoutes);

// SOW
app.use('/api/sows', sowRoutes);

// Payment
app.use('/api/payments', paymentRoutes);

// SOW Payment Plan Line Items
app.use('/api/sow-payment-plan-line-items', paymentPlanLineItemRoutes);

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});

export default app;
