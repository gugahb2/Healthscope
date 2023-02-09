import React from 'react'

import styles from './styles.module.scss'

export interface IProps {
  introText?: string
  heading: string
  subHeading: string
  descriptions: string[]
  backgroundColor?: string
  type: 'type1' | 'type2'
}

const CTAPageHeading = ({
  introText,
  heading,
  subHeading,
  descriptions, // this is limited to two fields.
  backgroundColor = '',
  type,
}: IProps) => {
  const defaultType =
    type || (descriptions && descriptions.length === 2) ? 'type2' : 'type1'

  return (
    <div className='section-container'>
      <div className={`${styles[`container_${type}`]} ${backgroundColor}`}>
        <div className={styles.heading_box}>
          {introText && <h4 className={styles.intro_text}>{introText}</h4>}
          {heading && (
            <h1 className={styles[`text_heading_${type}`]}>{heading}</h1>
          )}
        </div>
        
        <div className={styles.description_box}>
          {subHeading && (
            <h4 className={styles['sub-heading-text']}>{subHeading}</h4>
          )}
          {descriptions && descriptions.length > 0 && (
            <div className={styles[`description_wrapper_${type}`]}>
              <div
                dangerouslySetInnerHTML={{ __html: descriptions[0] }}
                className='pb-2'
              />
              {descriptions.length > 1 && (
                <div
                  dangerouslySetInnerHTML={{ __html: descriptions[1] }}
                  className='pb-2'
                />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CTAPageHeading
