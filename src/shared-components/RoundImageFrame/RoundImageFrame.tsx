import React from 'react'
import classNames from 'classnames'

import styles from './round_image_frame.module.scss'

const RoundImageFrame = ({
  className,
  children,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) => {
  const cls = classNames([className, styles.root])

  return (
    <div className={cls} {...rest}>
      {children}
      <div className={styles.overlay_effect}></div>
    </div>
  )
}

export default RoundImageFrame
