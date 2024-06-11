import { DataTypes, Model } from 'sequelize';
import sequelize from '../dbService/dbConfig';
import Employee from './employeModel';
import Shift from './shiftModel';

class Timesheet extends Model {
  public id!: string;
  public employeeId!: string;
  public shiftId!: string;
  public projectName!: string;
  public taskName!: string;
  public fromDate!: Date;
  public toDate!: Date;
}

Timesheet.init({
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
  shiftId: {
    type: DataTypes.UUID,
    references: {
      model: Shift,
      key: 'id',
    },
  },
  projectName: DataTypes.STRING,
  taskName: DataTypes.STRING,
  fromDate: DataTypes.DATE,
  toDate: DataTypes.DATE,
}, {
  sequelize,
  modelName: 'Timesheet',
});

Employee.hasMany(Timesheet, { foreignKey: 'employeeId' });
Timesheet.belongsTo(Employee, { foreignKey: 'employeeId' });
Shift.hasMany(Timesheet, { foreignKey: 'shiftId' });
Timesheet.belongsTo(Shift, { foreignKey: 'shiftId' });

export default Timesheet;