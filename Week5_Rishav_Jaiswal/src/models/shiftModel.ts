import { DataTypes, Model } from 'sequelize';
import sequelize from '../dbService/dbConfig';
import Employee from './employeModel';

class Shift extends Model {
  public id!: string;
  public employeeId!: string;
  public startTime!: Date;
  public endTime!: Date | null;
  public actualHours!: number;
}

Shift.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  employeeId: {
    type: DataTypes.UUID,
    references: {
      model: Employee,
      key: 'id',
    },
  },
  startTime: DataTypes.DATE,
  endTime: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  actualHours: {
    type: DataTypes.FLOAT,
    allowNull: false,
    defaultValue: 0,
  },
}, {
  sequelize,
  modelName: 'Shift',
});

export default Shift;