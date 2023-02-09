import React from 'react'

import styles from './styles.module.scss'
import WaveMaskBackground from '../../shared-components/WaveMaskBackground'

const PageHeadingPanelTwo = () => {
  return (
    <div className={styles.root}>
      <div className={styles.main_bg}></div>
      <div className={styles.circle}></div>
      <WaveMaskBackground className={styles.wave_bg} type='wave2' />
    </div>
  )
}

export default PageHeadingPanelTwo
