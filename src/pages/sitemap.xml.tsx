import { GetServerSideProps } from 'next'

import { getFeed } from '../common/utils'

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  if (res && req) {
    res.setHeader('Content-Type', 'text/xml')
    res.write(await getFeed(req))
    res.end()
  }

  return {
    props: {},
  }
}

const Sitemap = () => {}

export default Sitemap
