
export const setHealthcheckHeaders = async (req:any, res:any, next:any) => {
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate')
    res.setHeader('Pragma', 'no-cache')
    res.setHeader('X-Content-Type-Options', 'nosniff')
    res.removeHeader('Connection')
    res.removeHeader('Keep-Alive')
    res.removeHeader('X-Powered-By')
    next()
}
