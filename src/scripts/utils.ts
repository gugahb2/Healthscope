import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetStaticProps,
  GetStaticPropsContext,
} from 'next'

const getPath = (context: GetStaticPropsContext) => {
  const params = context.params
  const slug = params?.slug

  if (slug && Array.isArray(slug)) {
    return slug.join('/')
  } else {
    return '/'
  }
}

const sanitisePath = (path: string) => {
  const locales = []

  if (!path || path === '') return ''

  if (path === '/' || path === 'index') return ''

  if (locales.includes(path)) {
    return ''
  }

  return path
}

const shouldRevalidate = (locale: string = '') => {
  if (locale.includes('authoring') || locale.includes('localhost')) {
    return true
  }

  return false
}

const getBaseUrl = (context: GetStaticPropsContext) => {
  return context?.locale || context?.defaultLocale || 'localhost'
}

export const loadGMaps = (callback: () => void) => {
  if (!process.env.NEXT_PUBLIC_GOOGLE_API_KEY) return

  const existingScript = document.getElementById('googleMaps')

  // global resolver
  if (typeof window !== 'undefined') {
    //@ts-ignore
    window.callbackInit = () => {
      callback && callback()
    }
  }

  if (!existingScript) {
    const script = document.createElement('script')
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}&libraries=places&callback=callbackInit`
    script.id = 'googleMaps'

    document.body.appendChild(script)
    callback && callback()
  } else {
    callback && callback()
  }
}

export const supportedBackgrounds = [
  'bg-dark',
  'bg-white',
  'bg-cerulean',
  'bg-teal',
  'bg-light',
]

export const SEARCH_BASE_URL = '/specialist-search?'

export const makeSearchUrl = (params: {name: string, value: string}[]) => {
  const searchParams = new URLSearchParams()

  if(params && !!params.length) {
    params.forEach((param: any) => {
      if(!param.name) return
      if(searchParams.has(param.name)) searchParams.set(param.name.toLowerCase(), param.value || '')
      else searchParams.append(param.name.toLowerCase(), param.value || '')
    })
  }
  
  return SEARCH_BASE_URL + searchParams.toString()
}

export const getStaticPageProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  // declare page props
  let pagePropsData: any

  // get path
  let path = getPath(context)

  // clear locale from path
  path = sanitisePath(path)

  // get baseUrl
  const baseUrl = getBaseUrl(context)

  const CONTENTDELIVERY = process.env.CONTENTDELIVERY
  const ACCESSKEY = process.env.ACCESSKEY

  const LIVE_DOMAINS = process.env.LIVE_DOMAINS || ''
  const site_published = LIVE_DOMAINS.split(',').includes(baseUrl) ? 'true' : 'false'

  // content delivery headers

  const contentDeliveryHeaders = new Headers()
  contentDeliveryHeaders.append('accesskey', ACCESSKEY || '')
  contentDeliveryHeaders.append('baseurl', baseUrl)
  contentDeliveryHeaders.append('urlSlug', path)
  contentDeliveryHeaders.append('SITE_PUBLISHED', site_published)

  const pageProps = await fetch(CONTENTDELIVERY, {
    method: 'get',
    headers: contentDeliveryHeaders,
  })

  if (pageProps.status === 200) {
    try {
      pagePropsData = await pageProps.json()
    } catch {
      pagePropsData = null
    }
  }

  if (pagePropsData) {
    // check redirects
    if (pagePropsData.redirectResult?.destination) {
      return {
        redirect: {
          destination: pagePropsData.redirectResult.destination,
          statusCode: pagePropsData.redirectResult.statusCode || 301,
        },
      }
    }

    return {
      props: {
        status: 200,
        ...pagePropsData,
      },
      revalidate: shouldRevalidate(context.locale) ? 1 : 86400,
    }
  }

  return {
    props: {
      status: pageProps.status || 500,
    },
    revalidate: shouldRevalidate(context.locale) ? 1 : 60,
  }
}

export const getServerSidePageProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  // declare page props
  let pagePropsData: any

  // get path
  let path = context.req.url

  // get baseUrl
  const baseUrl = getBaseUrl(context)

  const CONTENTDELIVERY = process.env.CONTENTDELIVERY
  const ACCESSKEY = process.env.ACCESSKEY
  const LIVE_DOMAINS = process.env.LIVE_DOMAINS || ''
  const site_published = LIVE_DOMAINS.split(',').includes(baseUrl) ? 'true' : 'false'

  // content delivery headers

  const contentDeliveryHeaders = new Headers()
  contentDeliveryHeaders.append('accesskey', ACCESSKEY || '')
  contentDeliveryHeaders.append('baseurl', baseUrl)
  contentDeliveryHeaders.append('urlSlug', path)
  contentDeliveryHeaders.append('SITE_PUBLISHED', site_published)

  const pageProps = await fetch(CONTENTDELIVERY, {
    method: 'get',
    headers: contentDeliveryHeaders,
  })

  if (pageProps.status === 200) {
    try {
      pagePropsData = await pageProps.json()
    } catch {
      pagePropsData = null
    }
  }

  // set caching
  context.res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )

  if (pagePropsData) {
    // check redirects
    if (pagePropsData.redirectResult?.destination) {
      return {
        redirect: {
          destination: pagePropsData.redirectResult.destination,
          statusCode: pagePropsData.redirectResult.statusCode || 301,
        },
      }
    }

    return {
      props: {
        status: 200,
        ...pagePropsData,
      },
    }
  }

  return {
    props: {
      status: pageProps.status || 500,
    },
  }
}

export const formatPhoneNumber = (phoneNumber: string) => {
  const phoneStr = phoneNumber?.match(/\d/g)?.join('') || ''

  if (phoneStr.length === 8) {
    return [phoneStr.slice(0, 4), phoneStr.slice(4, 8)].join(' ')
  } else if (phoneStr.length === 9 && phoneStr[0] === '4') {
    return ['0' + phoneStr.slice(0, 3), phoneStr.slice(3, 6), phoneStr.slice(6, 9)].join(' ')
  } else if (phoneStr.length === 9 && phoneStr[0] !== '4') {
    return ['0' + phoneStr.slice(0, 1), phoneStr.slice(1, 5), phoneStr.slice(5, 9)].join(' ')
  } else if (phoneStr.length === 10 && phoneStr[0] === '0' && phoneStr[1] !== '4') {
    return [phoneStr.slice(0, 2), phoneStr.slice(2, 6), phoneStr.slice(6, 10)].join(' ')
  } else if (phoneStr.length === 10) {
    return [phoneStr.slice(0, 4), phoneStr.slice(4, 7), phoneStr.slice(7, 10)].join(' ')
  } else return phoneNumber
}

export const isValidPhoneNumber = (phoneNumber: string, type: 'alt' | 'no-alt') => {
  if (!phoneNumber) return false
  if (/[a-z]/i.test(phoneNumber)) return false
  if (phoneNumber === '0' || phoneNumber === ' ') return false
  if (type !== 'alt' && (phoneNumber.indexOf('04') === 0 || phoneNumber.indexOf('4') === 0)) return false
  return true
}

export const setTitleCase = (str: string) => {
  const words = str.split(' ');
  const results = words.map((word) => (word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()));
  return results.join(' ');
}

export const formatAddress = (address: string) => {
  if (!address) return null
  const block = address.split(',')
  const filterBlock = block.filter((item) => item !== '' && item !== ' ' && item !== '  ')
  return filterBlock.join(',')
}