import { db } from '../config/PostgresDBConnection'
import { errorLogger, infoLogger } from './Logger'

export const testDBConnection = async () => {
    try {
      await db.authenticate()
      infoLogger.info('Connection to database is successful')
      return true;
    } catch (error) {
      errorLogger.error('Unable to connect to the database:', error)
      return false;
    }
};
