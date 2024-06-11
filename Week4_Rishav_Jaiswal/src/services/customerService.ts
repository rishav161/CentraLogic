import Customer from '../models/customerModel';

export const createCustomer = async (data: any) => {
  return await Customer.create(data);
};

export const getCustomers = async () => {
  return await Customer.findAll();
};

export const getCustomerById = async (id: string) => {
  return await Customer.findByPk(id);
};

export const updateCustomer = async (id: string, data: any) => {
  await Customer.update(data, { where: { id } });
  return await Customer.findByPk(id);
};

export const deleteCustomer = async (id: string) => {
  await Customer.destroy({ where: { id } });
};
