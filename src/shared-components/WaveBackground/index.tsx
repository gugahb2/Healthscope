import React from 'react'

import styles from './style.module.scss'
interface IProps {
	className?: string
	fill?: string
	style?: 'wave1' | 'wave2'
}

const WaveBackground = ({
	className,
	style = 'wave1',
	fill = "#f2f2f2"
}: IProps) => {
	
	return (
		<div className={`${styles.wavebackground} ${className}`}>
			{style === 'wave1' &&
				<svg width="100%" height="100%" viewBox="0 0 416 166" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path 
						d="M115.426 166C66.467 166 18.0757 134.742 0 119.112V0H416V107.461C318.118 82 263.389 129.532 211.486 152.775C199.866 157.184 164.386 166 115.426 166Z" 
						fill={`${fill}`}
					/>
				</svg>
			}
			{style === 'wave2' &&
				<svg width="100%" height="100%" viewBox="0 0 1396 253" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path 
						d="M698.001 187.154C896.95 91.5383 1158 46.9971 1396 184.997L1396 -96.0028L-51.999 -96.0027L-51.999 147.153C90.001 246.997 456.001 303.46 698.001 187.154Z" 
						fill={fill}
					/>
				</svg>
			}
		</div>
	)
}

export default WaveBackground;