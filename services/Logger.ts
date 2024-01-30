import { getLogger } from "log4js"

export const infoLogger = getLogger()
infoLogger.level = 'info'

export const errorLogger = getLogger()
errorLogger.level = 'error'

export const debugLogger = getLogger()
debugLogger.level = 'debug'