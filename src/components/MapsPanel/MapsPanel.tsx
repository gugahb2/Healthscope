import React from 'react'

import GMapWidget, {
  GMapWidgetProps,
} from '../../shared-components/GMapWidget/GMapWidget'
import RoundImageFrame from '../../shared-components/RoundImageFrame/RoundImageFrame'

import styles from './maps_panel.module.scss'

export interface IProps {
  heading: string
  content?: string
  map: GMapWidgetProps
  backgroundColour?: string
}

const MapsPanel = ({
  heading,
  content,
  map,
  backgroundColour = 'bg-cerulean',
}: IProps) => {
  return (
    <div className={`${styles.root} ${backgroundColour}`}>
      <div className='section-container'>
        <div className='block md:flex flex-row-reverse'>
          <div className='w-full md:w-1/2'>
            <div className={styles.image_col}>
              <RoundImageFrame className={styles.rounded}>
                {map && (
                  <div className={styles.rounded_image}>
                    <GMapWidget {...map} />
                  </div>
                )}
              </RoundImageFrame>
            </div>
          </div>
          <div className={`${styles.text_col} w-full md:w-1/2`}>
            {heading && <h3 className='text-heading-3'>{heading}</h3>}
            {content && (
              <div
                className={styles.content}
                dangerouslySetInnerHTML={{ __html: content }}></div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MapsPanel
