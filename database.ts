import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config()

export const db = new Sequelize(
    process.env.DATABASE_NAME, process.env.DATABASE_USER, process.env.DATABASE_PASSWORD,
    {
        host: process.env.DATABASE_HOST,
        dialect: 'postgres',
        pool: {
            max: parseInt(process.env.DATABASE_POOL_MAX, 10) || 5,
            min: parseInt(process.env.DATABASE_POOL_MIN, 10) || 0,
            acquire: parseInt(process.env.DATABASE_POOL_MAX, 30000) || 30000,
            idle: parseInt(process.env.DATABASE_POOL_MAX, 10) || 10000,
        },
    }
);

export const testDBConnection = async () => {
    try {
      await db.authenticate();
      console.log('Connection to database is successful');
      return true;
    } catch (error) {
      console.error('Unable to connect to the database:', error);
      return false;
    }
};