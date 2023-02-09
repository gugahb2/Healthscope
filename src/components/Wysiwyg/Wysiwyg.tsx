import React from 'react'
import classNames from 'classnames'

import styles from './wysiwyg.module.scss'

export interface IProps {
  content: string
  className?: string
  fullWidth?: boolean
}

const Wysiwyg = ({ content, className, fullWidth }: IProps) => {
  const CLS = classNames(styles.wysiwyg, className, {
    [`${[styles.fullWidth]}`]: fullWidth,
  })

  if (!content || !content.length) {
    return null
  }

  return <div className={CLS} dangerouslySetInnerHTML={{ __html: content }} />
}

export default Wysiwyg
