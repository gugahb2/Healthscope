import React from 'react'
import { ILink, IImage } from '../../interfaces/base'
import RoundButton from '../../shared-components/RoundButton'

import styles from './styles.module.scss'

export interface IProps {
  image?: IImage
  title: string
  description: string
  link?: ILink
}

const ImageCardTile = ({ image, title, description, link }: IProps) => {
  const image_url = image && image.src ? image.src : null

  return (
    <>
      <div className={`${styles.card__tile}`}>
        {image_url && (
          <div
            className={`${styles.image}`}
            style={{ backgroundImage: `url('${image_url}')` }}></div>
        )}
        <div className={`${styles.content}`}>
          <h4 className='title'>{title || ''}</h4>
          {description && <p className='description'>{description}</p>}
        </div>
        {link && (
          <RoundButton
            className={styles.button}
            label={link.text}
            link={link}
            size='normal'
          />
        )}
      </div>
    </>
  )
}

export default ImageCardTile
