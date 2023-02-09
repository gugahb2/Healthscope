import React from 'react'
import styles from './styles.module.scss'
import classnames from 'classnames'

const Spinner = () => {
  return (
    <div className={styles['spinner-container']}>
      <div className={styles['sk-circle']}>
        <div className={classnames(styles['sk-circle1'], styles['sk-child'])}></div>
        <div className={classnames(styles['sk-circle2'], styles['sk-child'])}></div>
        <div className={classnames(styles['sk-circle3'], styles['sk-child'])}></div>
        <div className={classnames(styles['sk-circle4'], styles['sk-child'])}></div>
        <div className={classnames(styles['sk-circle5'], styles['sk-child'])}></div>
        <div className={classnames(styles['sk-circle6'], styles['sk-child'])}></div>
        <div className={classnames(styles['sk-circle7'], styles['sk-child'])}></div>
        <div className={classnames(styles['sk-circle8'], styles['sk-child'])}></div>
        <div className={classnames(styles['sk-circle9'], styles['sk-child'])}></div>
        <div className={classnames(styles['sk-circle10'], styles['sk-child'])}></div>
        <div className={classnames(styles['sk-circle11'], styles['sk-child'])}></div>
        <div className={classnames(styles['sk-circle12'], styles['sk-child'])}></div>
      </div>
    </div>
  )
}

export default Spinner
