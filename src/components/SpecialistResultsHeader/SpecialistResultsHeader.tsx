import React from 'react'
import { useRouter } from 'next/router'
import classnames from 'classnames'

import Dropdown, { IProps as IDropdown } from '../../shared-components/Dropdown'
import styles from './styles.module.scss'

export interface IProps {
  heading?: string
  term?: string
  backgroundColor?: string
  dropdown: IDropdown
}

const SpecialistResultsHeader = ({
  heading,
  term,
  backgroundColor,
  dropdown,
}: IProps) => {
  const router = useRouter()

  const handleChangeFilter = (name: string, value: string) => {
    const temp = router
      && router.query.slug
      && router.query.slug[0]
      && router.query.slug[0].split('?')

    const pathname = temp ? temp[0] : ''
    const params = temp.length > 1 ? new URLSearchParams(temp[1]) : new URLSearchParams()

    if (params.has(name)) {
      params.delete(name)
    }

    params.append(name, value)

    const url = `/${pathname}?${params.toString()}`

    if (router) router.push({ pathname: url })
    else if (typeof window !== 'undefined') window.location.href = url
  }

  return (
    <div className={classnames('section-container', `${backgroundColor}`)}>
      <div className={`${styles.container}`}>
        {(heading && term) ? (
          <h4 className={styles.heading}>
            {heading}
            <span>{term}</span>
          </h4>
        ) : <div/>}
        <div>
          <Dropdown
            {...dropdown}
            className={styles.dropdown}
            handleParameter={handleChangeFilter}
          />
        </div>
      </div>
    </div>
  )
}

export default SpecialistResultsHeader
