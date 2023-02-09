import Document, { Html, Head, Main, NextScript } from 'next/document'
import parse from 'html-react-parser'

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          {parse(
            '<script defer src="https://use.fortawesome.com/f2982129.js"></script><!-- Global site tag (gtag.js) - Google Analytics --><script async src="https://www.googletagmanager.com/gtag/js?id=G-6G8MDEW2T1"></script><script>window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag(\'js\', new Date());gtag(\'config\', \'G-6G8MDEW2T1\');</script><meta name="google-site-verification" content="9HBzZ2pttw2S1rLD-5ZjFTzB-62jzLnf7yU1d7RoYTo" />'
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
