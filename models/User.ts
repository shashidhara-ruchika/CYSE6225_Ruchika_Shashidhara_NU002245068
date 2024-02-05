import { DataTypes, Model, Sequelize } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';

import { postgresDBConnection } from '../databases/PostgresDBConnection';

interface UserAttributes {
  id: string;
  first_name: string;
  last_name: string;
  password: string;
  username: string;
  account_created: Date;
  account_updated: Date;
}

const User = postgresDBConnection.define('User', {
  id: { // read only
    type: DataTypes.UUID,
    defaultValue: () => uuidv4(),
    primaryKey: true,
    allowNull: false,
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: { // write only
    type: DataTypes.STRING,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  account_created: { // read only
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  account_updated: { // read only
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
    modelName: 'User',
    indexes: [
        {
            unique: true,
            fields: ['username']
        }
    ],
});

export default User;
