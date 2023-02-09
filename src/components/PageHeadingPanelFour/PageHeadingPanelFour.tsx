import React from 'react'
import Image from 'next/image'

import WaveMaskBackground from '../../shared-components/WaveMaskBackground'
import { IImage } from '../../interfaces/base'

import styles from './styles.module.scss'

export interface IProps {
  type: string
  image?: IImage
}

const PageHeadingPanelFour = ({image}: IProps) => {
  return (
    <div className={styles.root}>
      <div className={styles.image_box}>
        {image && image.src ? (
          <Image
            className={styles.image}
            src={image.src}
            alt={image.alt}
            layout='fill'
            objectFit='cover'
          />
        ) : null}
      </div>
      <WaveMaskBackground className={styles.gradient_bg} type='wave2' />
    </div>
  )
}

export default PageHeadingPanelFour
