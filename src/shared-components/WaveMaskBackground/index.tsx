import React from 'react'

import classnames from 'classnames'
import styles from './styles.module.scss'

interface IProps {
	className?: string
	fill?: string
	type?: 'wave1' | 'wave2'
}

const WaveMaskBackground = ({
	className,
	type = 'wave1'
}: IProps) => {
	
	return (
		<div className={classnames(
			styles.root,
			className,
			styles[type],
			styles.waveMask
		)}></div>
	)
}

export default WaveMaskBackground;