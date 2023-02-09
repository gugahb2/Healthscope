import React from 'react'
import { ILink } from '../../interfaces/base'
import RoundButton from '../../shared-components/RoundButton'
import styles from './styles.module.scss'

export interface IProps {
  heading?: string
  content: string
  buttonText: string
  link: ILink
}

const FeatureTextSection = ({ heading, content, buttonText, link }: IProps) => {
  return (
    <section className={`${styles.root}`}>
      {heading && heading.length > 0 && (
        <h1 className='text-heading-lg'>{heading}</h1>
      )}
      <div className={styles.container}>
        {content && content.length > 0 && (
          <div className='flex flex-col justify-center items-center'>
            <div className={styles['text-description']}>{content}</div>
            {(link && buttonText) ? (
              <div className='mt-6 sm:mt-8'>
                <RoundButton
                  label={buttonText}
                  link={link}
                  className={styles['booking-button']}
                />
              </div>
            ) : null}
          </div>
        )}
      </div>
    </section>
  )
}

export default FeatureTextSection
