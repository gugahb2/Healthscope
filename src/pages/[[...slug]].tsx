import React, { useState, useEffect } from 'react'
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import Error from 'next/error'
import { useRouter } from 'next/router'

import { getStaticPageProps } from '../scripts/utils'
import { IPageProps } from '../interfaces/base'
import LoadPage from '../shared-components/LoadPage'
import Spinner from '../shared-components/Spinner'

const Home = (props: IPageProps) => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (process.env.currentEnv !== 'nextjs') return

    const startLoading = () => {setLoading(true)}
    const endLoading = () => {setLoading(false)}

    router.events.on('routeChangeStart', startLoading)
    router.events.on('routeChangeComplete', endLoading)
  }, [router])

  if (router && router.isFallback) {
    return null
  }

  return props.status === 200 ? (
    <>
      <LoadPage {...props} />
      {loading && <Spinner/>}
    </>
  ) : (
    <Error statusCode={props.status} />
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { slug: undefined } }],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) =>
  getStaticPageProps(context)

export default Home
