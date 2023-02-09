import React from 'react'
import Image from 'next/image'
import { IImage } from '../../interfaces/base'
import RoundImageFrame from '../../shared-components/RoundImageFrame/RoundImageFrame'

import styles from './feature_image_text_panel.module.scss'

export interface IProps {
  image: IImage
  heading: string
  content?: string
  backgroundColour?: string
}

const FeatureImageTextPanel = ({
  image,
  heading,
  content,
  backgroundColour = 'bg-light',
}: IProps) => {
  return (
    <div className={`${styles.root} ${backgroundColour}`}>
      <div className='section-container'>
        <div className='block md:flex flex-row-reverse'>
          <div className='w-full md:w-1/2'>
            <div className={styles.image_col}>
              <RoundImageFrame className={styles.rounded}>
                {image && image.src ? (
                  <div className={styles.rounded_image}>
                    <Image src={image.src} alt={image.alt || 'Image'} layout='fill' />
                  </div>
                ) : null}
              </RoundImageFrame>
            </div>
          </div>
          <div className='w-full md:w-1/2 pr-0 md:pr-12 py-0 md:py-12 flex items-center'>
            <div>
              {heading && (
                <h3 className='text-heading-3 mb-4 text-dark'>{heading}</h3>
              )}
              {content && (
                <div dangerouslySetInnerHTML={{ __html: content }}></div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeatureImageTextPanel
