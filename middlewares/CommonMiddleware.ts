import { errorLogger } from "../services/Logger"

export const validateNoBody = async (req:any, res:any, next:any) => {
    if (req.get('Content-Type')) {
        errorLogger.error('Bad Request: No body should be present')
        res.status(400).end()   
        return res
    }
    next()
}

export const validateNoQueryParams = async (req:any, res:any, next:any) => {
    if (req.query && (Object.keys(req.query).length > 0 || req.url.includes('?'))) {
        errorLogger.error('Bad Request: No query params should be present')
        res.status(400).end()
        return res
    }
    next()
}