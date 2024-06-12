import Order from '../models/orderModel'; 
import credentials from '../common/credentials';

const constants = require('gocardless-nodejs/constants');
const gocardless = require('gocardless-nodejs');

// Initialize the GoCardless client
const client = gocardless(credentials.gocardless.ACCESS_TOKEN, constants.Environments.Sandbox);

export const createPayment = async (userId: number, bookId: number, amount: number) => {
  try {
    const payment = await client.payments.create({
      amount: amount * 100, 
      currency: 'USD',
      links: {
        mandate: 'MD123...' // Replace with actual mandate ID
      },
      metadata: {
        userId: userId.toString(),
        bookId: bookId.toString()
      }
    });

    const order = await Order.create({
      userId,
      bookId,
      amount,
      paymentStatus: payment.status
    });

    return order;
  } catch (error: any) {
    throw new Error(`Payment creation failed: ${error.message}`);
  }
};
