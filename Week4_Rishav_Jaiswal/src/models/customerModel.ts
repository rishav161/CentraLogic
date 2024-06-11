// customerModel.ts
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/pgConfig';
import Organization from './organizationModel';

class Customer extends Model {
  public id!: string;
  public orgId!: string;
  public MSAValidFrom!: Date;
  public MSAValidUpto!: Date;
  public LegalName!: string;
  public NDASignedOn!: Date;
  public ShortName!: string;
  public NDAValidFrom!: Date;
  public NDAValidUpto!: Date;
  public AddressId!: string;
  public DisplayName!: string;
  public IsNDASigned!: boolean;
  public IsMSASigned!: boolean;
  public MSASignedOn!: Date;
}

Customer.init({
  id: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },
  orgId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  MSAValidFrom: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  MSAValidUpto: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  LegalName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  NDASignedOn: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  ShortName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  NDAValidFrom: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  NDAValidUpto: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  AddressId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  DisplayName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  IsNDASigned: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  IsMSASigned: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  MSASignedOn: {
    type: DataTypes.DATE,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Customer',
  tableName: 'customers',
  timestamps: true,
});

// Define the association
Customer.belongsTo(Organization, { foreignKey: 'orgId' });
Organization.hasMany(Customer, { foreignKey: 'orgId', });

export default Customer;
