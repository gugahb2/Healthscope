import React from 'react'

import styles from './style.module.scss'
import { ILink } from '../../interfaces/base'
import classnames from 'classnames'
interface IProps extends React.HTMLAttributes<HTMLAnchorElement> {
	size?: string,
	label: string,
	link?: ILink,
	color?: string
	download?: string
}

const RoundButton = ({
	className,
	label,
	link,
	size = "normal",
	color = "primary",
	download,
	...rest
}: IProps) => {
	return (
		<a
			className={classnames(styles.button, className, styles[color], styles[size], 'block')}
			href={`${link ? link.href : "#"}`}
			{...(download ? {download} : {})}
			{...rest}
		>
			{label}
		</a>
	)
}

export default RoundButton;
