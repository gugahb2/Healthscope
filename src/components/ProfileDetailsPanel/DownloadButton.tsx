import React from 'react'

import styles from './profile_detail.module.scss'
import { ILink } from '../../interfaces/base'

interface IProps {
	label: string,
	link?: ILink,
	fileName?: string
}

const DownloadButton = ({
	label,
	link,
    fileName
}: IProps) => {
    const handleClick = () => {
        let newVariable: any;
        newVariable = window.navigator;

        if (newVariable.msSaveOrOpenBlob) {
            fetch(link.href)
                .then(res => res.blob())
                .then(blob => {
                    newVariable.msSaveBlob(blob, fileName)
                })
        } else {
            let elem = window.document.createElement('a');
            // elem.href = window.URL.createObjectURL(blob);
            elem.href = link.href;
            elem.download = fileName;
            document.body.appendChild(elem);
            elem.click();
            document.body.removeChild(elem);
        }
    }

	return (
		<button
			className={styles.downloadBtn}
			onClick={() => handleClick()}
            disabled={!link.href || link.href === ''}
		>
			{label}
		</button>
	)
}

export default DownloadButton;
