import { testPostgresDBConnection } from '../databases/PostgresDBConnection';


export const performPostgresDBHealthcheck = async (req: any, res: any) => {

  const isDBConnected = await testPostgresDBConnection();

  if (isDBConnected) {
    res.status(200).end();
  } else {
    res.status(503).end();
  }
  return res;
};
