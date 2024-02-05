import express from 'express';
import { syncPostgresDBConnection, testPostgresDBConnection } from './databases/PostgresDBConnection';
import { healthcheckRouter } from './routes/HealthcheckRoute';
import { errorLogger, infoLogger } from './services/LoggerService'

const app = express()
app.use(express.json())

testPostgresDBConnection()
    .then(() => {
        syncPostgresDBConnection()
    })
    .catch((error) => {
        errorLogger.error('Error occured: ', error)
    })

app.use('/healthz', healthcheckRouter)

const PORT = process.env.port || 8080;
app.listen(PORT, () => 
    infoLogger.info(`Server stared on port: ${PORT}`)
)



