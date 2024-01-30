import express from 'express';
import { testDBConnection } from '../services/HealthcheckService';
import { setHealthcheckHeaders } from '../middlewares/HealthcheckMiddleware'
import { validateNoBody, validateNoQueryParams } from '../middlewares/CommonMiddleware'
import { errorLogger, infoLogger } from '../services/Logger';

export const healthcheckRouter = express.Router();

healthcheckRouter.get('/', setHealthcheckHeaders, validateNoBody, validateNoQueryParams, async(req, res) => {
    if (req.method == 'HEAD') {
        errorLogger.error(`Method Not Allowed: ${req.method}`)
        res.status(405).end()
        return res
    }

    const isDBConnected = await testDBConnection()

    if (isDBConnected) {
        res.status(200).end()
    } else {
        res.status(503).end()
    }
})


healthcheckRouter.all('/', setHealthcheckHeaders, async(req, res) => {
    if (req.method != 'GET') {
        errorLogger.error(`Method Not Allowed: ${req.method}`)
        res.status(405).end()
    }
})
