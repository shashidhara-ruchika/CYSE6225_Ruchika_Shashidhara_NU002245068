import express from 'express';
import { testDBConnection } from '../database';

export const healthcheckRouter = express.Router();

healthcheckRouter.get('/', async(req, res) => {
    const isDBConnected = await testDBConnection()

    if (isDBConnected) {
        res.status(200).end()
    } else {
        res.status(503).end()
    }
})
