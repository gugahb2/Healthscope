import React from 'react'

import styles from './styles.module.scss'
import WaveMaskBackground from '../../shared-components/WaveMaskBackground'

const PageHeadingPanelThree = () => {
  return (
    <div className={styles.root}>
      <WaveMaskBackground className={styles.wave_bg} type='wave2' />
      <div className={styles.circle}></div>
    </div>
  )
}

export default PageHeadingPanelThree
