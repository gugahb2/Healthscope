import React, { useEffect, useState } from 'react'
import Image from 'next/image'

import WaveMaskBackground from '../../shared-components/WaveMaskBackground'
import { IImage } from '../../interfaces/base'
import classNames from 'classnames'

import styles from './styles.module.scss'

export interface IProps {
  type: string
  image?: IImage
}

const PageHeadingPanelOne = ({ type, image }: IProps) => {
  const [pageStyle, setPageStyle] = useState('')

  useEffect(() => {
    setPageStyle(type)
  }, [type])
  
  return (
    <div className={styles.root}>
      <div className={classNames(
        styles.container,
        pageStyle === 'type0' ? styles.hightType0 : ''
      )}>
        <div className={styles.main_bg}></div>
        {image && image.src ? (
          <div className={styles.image_box}>
            <Image
              className={styles.image}
              src={image.src}
              alt={image.alt}
              layout='fill'
              objectFit='cover'
            />
          </div>
        ) : null}
        <WaveMaskBackground className={styles.gradient_bg} type='wave2' />
        <WaveMaskBackground className={styles.bottom_bg} type='wave2' />
      </div>
      {pageStyle === 'type0' && <div className={styles.backdrop}></div>}
    </div>
  )
}

export default PageHeadingPanelOne
