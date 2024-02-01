import { postgresDB } from '../config/PostgresDBConnection'
import { errorLogger, infoLogger } from './Logger'

export const testDBConnection = async () => {
    try {
      await postgresDB.authenticate()
      infoLogger.info('Connection to database is successful')
      return true;
    } catch (error) {
      errorLogger.error('Unable to connect to the database, Error:', error)
      return false;
    }
}

export const performPostgresDBHealthcheck = async(req: any, res: any) => {

  const isDBConnected = await testDBConnection()

  if (isDBConnected) {
      res.status(200).end()
  } else {
      res.status(503).end()
  }
  return res
}