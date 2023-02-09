import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import classnames from 'classnames'

import Dropdown, { IProps as IDropdown } from '../../shared-components/Dropdown'
import { makeSearchUrl } from '../../scripts/utils'

import styles from './styles.module.scss'

export interface IProps {
  dropdowns: IDropdown[]
  sorts?: {
    label: string
    value: string
    selected?: boolean
  }[]
}

const FeatureFilterGroupPanel = ({ dropdowns, sorts }: IProps) => {
  const router = useRouter()
  const [dropdownList, setDropdownList] = useState<IDropdown[]>([])
  const [filter, setFilter] = useState<{ [key: string]: string }>({})

  useEffect(() => {
    // Initialize filter
    const temp = {}

    if (!dropdowns) return

    for (const dropdown of dropdowns) {
      const key = dropdown && dropdown.name
      const value = dropdown && dropdown.items && dropdown.items.find((x) => x.selected) && dropdown.items.find((x) => x.selected).value
      if (key && value) {
        temp[key] = value
      }
    }

    setFilter(temp)
    setDropdownList([...dropdowns])
  }, [dropdowns])


  const handleChangeFilter = (name: string, value: string) => {
    const filterList = {...filter, [name]: value}
    const params = []

    for (const key of Object.keys(filterList)) {
      params.push({name: key, value: filterList[key]})
    }

    const url = makeSearchUrl(params)

    if (router) router.push({ pathname: url })
    else if (typeof window !== 'undefined') window.location.href = url
  }

  const handleSort = (name: string, value: string) => {
    const path = router ? router.asPath : ''
    const separator = `${name}=`
    let url = path

    if (path.includes(separator)) {
      const temp = path.split(separator)[0]
      url = `${temp}${name}=${value}`
    } else {
      url = `${path}?${name}=${value}`
    }

    if (router) router.push({ pathname: url })
    else if (typeof window !== 'undefined') window.location.href = url
  }

  if (!dropdownList || dropdownList.length === 0) return null

  return (
    <div className='section-container'>
      <div className={styles.root}>
        <div
          className={classnames(
            styles.container,
            'block md:flex'
          )}>
          {dropdownList &&
            dropdownList.length > 0 &&
            dropdownList.map((item, index) => (
              <Dropdown
                {...item}
                key={index}
                className={classnames(styles['form-control'], 'w-full md:w-1/4 md:mx-3')}
                handleParameter={handleChangeFilter}
              />
            ))}
          {sorts && sorts.length && (
            <div className='hidden md:block md:w-1/4 md:mx-3'>
              <Dropdown
                name='sort'
                label={'Sort by'}
                items={sorts}
                className={classnames(styles['form-control'], styles.sort_by)}
                handleParameter={handleSort}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default FeatureFilterGroupPanel
