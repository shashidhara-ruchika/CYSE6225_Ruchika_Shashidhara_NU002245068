import express from 'express';
import { testDBConnection } from './database';
import { healthcheckRouter } from './routes/healthcheck';

const app = express()
app.use(express.json())

testDBConnection()

app.use('/healthz', healthcheckRouter)

const PORT = process.env.port || 3000;
app.listen(3000, () => console.log(`Server stared on port: ${PORT}`))



