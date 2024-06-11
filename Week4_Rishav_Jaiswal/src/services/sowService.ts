import SOW from '../models/sowModel';

export const createSOW = async (sowData: any): Promise<SOW> => {
  try {
    const newSOW = await SOW.create(sowData);
    return newSOW;
  } catch (error) {
    console.error('Error creating SOW:', error);
    throw error;
  }
};

export const getSOWById = async (id: string): Promise<SOW | null> => {
  return await SOW.findByPk(id);
};

export const getSOWsByCustomerId = async (customerId: string): Promise<SOW[]> => {
  return await SOW.findAll({ where: { customerId } });
};

export const updateSOW = async (id: string, updatedSOWData: any): Promise<[number, SOW[]]> => {
  const [updatedCount, updatedRows] = await SOW.update(updatedSOWData, { where: { id }, returning: true });
  return [updatedCount, updatedRows];
};

export const deleteSOW = async (id: string): Promise<number> => {
  const deletedCount = await SOW.destroy({ where: { id } });
  return deletedCount;
};