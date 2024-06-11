import { DataTypes, Model, Association } from 'sequelize';
import sequelize from '../dbService/dbConfig';
import bcrypt from 'bcrypt';
import Shift from './shiftModel';

class Employee extends Model {
  public id!: string;
  public name!: string;
  public email!: string;
  public password!: string;
  public assignedShiftHours!: number;
  public role!: 'SuperAdmin' | 'Manager' | 'Employee';

  // Associations
  public Shifts?: Shift[];

  public static associations: {
    Shifts: Association<Employee, Shift>;
  };
}

Employee.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: DataTypes.STRING,
  email: {
    type: DataTypes.STRING,
    unique: true,
  },
  password: DataTypes.STRING,
  assignedShiftHours: DataTypes.INTEGER,
  role: DataTypes.ENUM('SuperAdmin', 'Manager', 'Employee'),
}, {
  sequelize,
  modelName: 'Employee',
  hooks: {
    beforeCreate: async (employee: Employee) => {
      employee.password = await bcrypt.hash(employee.password, 10);
    },
  },
});

Employee.hasMany(Shift, { foreignKey: 'employeeId', as: 'Shifts' });
Shift.belongsTo(Employee, { foreignKey: 'employeeId' });

export default Employee;