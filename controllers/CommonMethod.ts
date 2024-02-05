import { errorLogger } from "../services/LoggerService"

export const handleMethodNotAllowed = async(req: any, res: any) => {
    errorLogger.error(`Method Not Allowed: ${req.method}`)
    res.status(405).end()
    return res
}