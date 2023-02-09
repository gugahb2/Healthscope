import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'

import 'tailwindcss/tailwind.css'
import '../styles/globals.scss'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Component {...pageProps} />
      <ToastContainer position='top-right' autoClose={3000} />
    </>
  )
}

export default MyApp
