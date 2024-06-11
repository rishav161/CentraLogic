import { DataTypes, Model } from 'sequelize';
import sequelize from '../dbService/dbConfig';
import Employee from './employeModel';

class Claim extends Model {
  public id!: string;
  public key!: string;
  public value!: string;
  public employeeId!: string;
}

Claim.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  key: DataTypes.STRING,
  value: DataTypes.STRING,
  employeeId: {
    type: DataTypes.UUID,
    references: {
      model: Employee,
      key: 'id',
    },
  },
}, {
  sequelize,
  modelName: 'Claim',
});

Employee.hasMany(Claim, { foreignKey: 'employeeId' });
Claim.belongsTo(Employee, { foreignKey: 'employeeId' });

export default Claim;