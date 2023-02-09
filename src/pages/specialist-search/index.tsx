import React from 'react'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import Error from 'next/error'
import Spinner from '../../shared-components/Spinner'
import { useRouter } from 'next/router'

import { getServerSidePageProps } from '../../scripts/utils'
import { IPageProps } from '../../interfaces/base'
import LoadPage from '../../shared-components/LoadPage'

const Search = (props: IPageProps) => {
  const router = useRouter()

  if (router && router.isFallback) {
    return null
  }

  return props.status === 200 ? (
    <LoadPage {...props} />
  ) : (
    <Error statusCode={props.status} />
  )
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => getServerSidePageProps(context)

export default Search
