import { IncomingMessage } from 'http'

declare global {
  interface Window {
    dataLayer: any
  }
}

export const getFeed = async (req: IncomingMessage) => {
  if (req) {
    const CONTENTDELIVERY = process.env.CONTENTDELIVERY || ''

    const headers = new Headers()

    headers.append('baseurl', req.headers?.host || '')

    const data = await fetch(CONTENTDELIVERY + req.url, {
      method: 'get',
      headers,
    })

    const textData = data.text()

    if (textData) {
      return textData
    }
  }

  return ''
}