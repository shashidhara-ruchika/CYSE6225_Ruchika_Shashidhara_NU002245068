import express from 'express';
import { performPostgresDBHealthcheck } from '../services/HealthcheckService';
import { setHealthcheckHeaders } from '../middlewares/HealthcheckMiddleware'
import { validateNoBody, validateNoQueryParams } from '../middlewares/CommonMiddleware'
import { handleMethodNotAllowed } from '../services/CommonMethod';

export const healthcheckRouter = express.Router();

healthcheckRouter.head('/', setHealthcheckHeaders, handleMethodNotAllowed)

healthcheckRouter.get('/', setHealthcheckHeaders, validateNoBody, validateNoQueryParams, performPostgresDBHealthcheck)

healthcheckRouter.post('/', setHealthcheckHeaders, handleMethodNotAllowed)
healthcheckRouter.put('/', setHealthcheckHeaders, handleMethodNotAllowed)
healthcheckRouter.delete('/', setHealthcheckHeaders, handleMethodNotAllowed)
healthcheckRouter.patch('/', setHealthcheckHeaders, handleMethodNotAllowed)
healthcheckRouter.options('/', setHealthcheckHeaders, handleMethodNotAllowed)

