import React from 'react'
import Image from 'next/image'
import { IImage } from '../../interfaces/base'

import styles from './image_text_panel.module.scss'

export interface IProps {
  image: IImage
  heading: string
  content?: string
  backgroundColour?: string
}

const ImageTextPanel = ({
  image,
  heading,
  content,
  backgroundColour = 'bg-white',
}: IProps) => {
  return (
    <div className={`${styles.root} ${backgroundColour}`}>
      <div className='section-container'>
        <div className={'block md:flex'}>
          <div className='w-full md:w-2/5 pr-0 md:pr-6'>
            {image && image.src && (
              <div className={styles.imageCol}>
                <Image
                  className={styles.leftImage}
                  src={image.src}
                  alt={image.alt || 'IMAGE'}
                  layout='fill'
                />
              </div>
            )}
          </div>
          <div className='w-full md:w-3/5 pl-0 md:pl-7 flex items-center'>
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

export default ImageTextPanel
