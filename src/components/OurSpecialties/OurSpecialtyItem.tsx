import React from 'react'

import { ILink } from '../../interfaces/base'
import styles from './our_specialties.module.scss'

export interface OurSpecialtyItemProps {
  title: string
  content?: string
  link?: ILink
}

const OurSpecialtyItem = ({ title, content, link }: OurSpecialtyItemProps) => {
  return (
    <div className={styles.card}>
      <div>
        {title && (
          <a
            href={link && link.href || ''}
            target={link && link.target || ''}>
              <h4 className={`${styles.card_title} text-heading-4 text-aqua`}>
                {title}
              </h4>
          </a>
        )}
        {content && (
          <div
            className={`${styles.card_content} text-charcoal`}
            dangerouslySetInnerHTML={{ __html: content }}></div>
        )}
      </div>
      {link && link.href && (
        <a
          href={link.href}
          target={link.target || ''}
          className={styles.card_btn}>
          {link.text || 'Read More'}
        </a>
      )}
    </div>
  )
}

export default OurSpecialtyItem
