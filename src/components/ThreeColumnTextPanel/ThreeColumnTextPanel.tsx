import React from 'react'
import classNames from 'classnames'
import styles from './three_column_text_panel.module.scss'

export interface ThreeColumnTextPanelProps {
  /**
   * Max array length: 3
   */
  textAreas?: string[]
}

const ThreeColumnTextPanel = ({
  textAreas = [],
}: ThreeColumnTextPanelProps) => {
  if (!textAreas || !Array.isArray(textAreas)) return null

  const [text1, text2, text3] = textAreas

  return (
    <div className={styles.root}>
      <div className='section-container'>
        <div className='block md:flex'>
          {text1 && (
            <div
              className={classNames(styles.text_header, 'w-full md:w-2/5 pr-0 md:pr-7 mb-4 text-aqua')}
              dangerouslySetInnerHTML={{__html: text1}} />
          )}
          <div className='w-full md:w-3/5 block lg:flex pl-0 md:pl-6 text-body'>
            {text2 && (
              <div className='w-full lg:w-1/2 pr-0 lg:pr-6 mb-3 lg:mb-0' dangerouslySetInnerHTML={{__html: text2}} />
            )}
            {text3 && (
              <div className='w-full lg:w-1/2 pl-0 lg:pl-6' dangerouslySetInnerHTML={{__html: text3}} />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThreeColumnTextPanel
