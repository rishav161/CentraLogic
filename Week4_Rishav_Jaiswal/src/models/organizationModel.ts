import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/pgConfig';

class Organization extends Model {
  public id!: string;
  public gstNo!: string;
  public panNo!: string;
  public legalOrganizationName!: string;
  public invoiceTemplateId!: string;
  public shortName!: string;
  public contactName!: string;
  public displayName!: string;
  public email!: string;
  public addressId!: string;
  public phone!: string;
}

Organization.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    gstNo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    panNo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    legalOrganizationName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    invoiceTemplateId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    shortName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contactName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    displayName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    addressId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Organization',
    tableName: 'organizations',
    timestamps: false,
  }
);

export default Organization;
