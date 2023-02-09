import React, {useEffect, useState} from 'react'
import { Image } from '@react-pdf/renderer/lib/react-pdf.browser.cjs.js'
const ImageWithFetch = ({url, ...rest} : any) => {

  const [base64Img, setBase64Img] = useState(null)
  useEffect(() => {
    if (url) {
      fetchImage();
    }
  }, [url])

  const fetchImage = async () => {
    let reqUrl = url.split('?')[0];
    try {
      reqUrl = `${reqUrl}?time=${new Date().getTime()}`
      const response = await fetch(reqUrl, {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        method: 'GET',
      });

      const imageBlob = await response.blob()

      const reader = new FileReader();
      reader.readAsDataURL(imageBlob);

      reader.onloadend = () => {
        setBase64Img(reader.result)
      }
    } catch(ex) {
      console.log(ex)
    }
  }

  return (
    <>
      {base64Img && <Image src={base64Img} {...rest} />}
    </>
  )
}

export default ImageWithFetch;