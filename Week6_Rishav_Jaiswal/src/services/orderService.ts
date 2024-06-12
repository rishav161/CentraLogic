import Order from '../models/orderModel';

export const getAllOrders = async () => {
    return await Order.findAll();
};

export const getOrderById = async (id: number) => {
    return await Order.findByPk(id);
};

export const createOrder = async (orderData: any) => {
    return await Order.create(orderData);
};

export const updateOrder = async (id: number, orderData: any) => {
    const order = await Order.findByPk(id);
    if (order) {
        await order.update(orderData);
        return order;
    }
    return null;
};

export const deleteOrder = async (id: number) => {
    const order = await Order.findByPk(id);
    if (order) {
        await order.destroy();
        return order;
    }
    return null;
};
