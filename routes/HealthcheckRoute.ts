import express from 'express';
import { testDBConnection } from '../services/HealthcheckService';
import { setHealthcheckHeaders } from '../middlewares/HealthcheckMiddleware'
import { validateNoBody, validateNoQueryParams } from '../middlewares/CommonMiddleware'
import { handleMethodNotAllowed } from '../services/CommonMethod';

export const healthcheckRouter = express.Router();

healthcheckRouter.get('/', setHealthcheckHeaders, validateNoBody, validateNoQueryParams, async(req, res) => {

    const isDBConnected = await testDBConnection()

    if (isDBConnected) {
        res.status(200).end()
    } else {
        res.status(503).end()
    }
})

healthcheckRouter.post('/', setHealthcheckHeaders, handleMethodNotAllowed)
healthcheckRouter.put('/', setHealthcheckHeaders, handleMethodNotAllowed)
healthcheckRouter.delete('/', setHealthcheckHeaders, handleMethodNotAllowed)
healthcheckRouter.patch('/', setHealthcheckHeaders, handleMethodNotAllowed)

