import express from 'express';
import { testDBConnection } from './services/HealthcheckService';
import { healthcheckRouter } from './routes/HealthcheckRoute';
import { infoLogger } from './services/Logger'

const app = express()
app.use(express.json())

testDBConnection()

app.use('/healthz', healthcheckRouter)

const PORT = process.env.port || 8080;
app.listen(PORT, () => 
    infoLogger.info(`Server stared on port: ${PORT}`)
)



