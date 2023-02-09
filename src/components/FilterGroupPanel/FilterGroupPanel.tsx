import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import classnames from 'classnames'

import Dropdown, { IProps as IDropdown } from '../../shared-components/Dropdown'
import { makeSearchUrl } from '../../scripts/utils'

import styles from './styles.module.scss'

export interface IProps {
  heading?: string
  description?: string
  dropdowns: IDropdown[]
}

const FilterGroupPanel = ({ heading, description, dropdowns }: IProps) => {
  const router = useRouter()
  const [showControl, setShowControl] = useState(false)
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

  return (
    <div className='section-container'>
      <div className={styles.root}>
        <div className='flex items-center justify-between'>
          <div className={styles.heading_wrapper}>
            {heading && <h5 className={styles.heading}>{heading}</h5>}
            {description && (
              <div
                className={styles.description}
                dangerouslySetInnerHTML={{ __html: description }}></div>
            )}
          </div>
          <span
            className={classnames(styles.filter_control)}
            onClick={() => setShowControl(!showControl)}>
            <i className='hs hs-filter' aria-hidden />
          </span>
        </div>
        {dropdownList && dropdownList.length > 0 ? (
          <div
            className={classnames(
              styles.container,
              'md:grid grid-cols-1 md:grid-cols-3',
              {
                hidden: !showControl,
                grid: showControl,
              }
            )}>
            {dropdownList &&
              dropdownList.length > 0 &&
              dropdownList.map((dropdown, index) => {
                if (dropdown.name !== "State") {
                  const temp = dropdown.items ? [...dropdown.items] : []
                  temp.sort((a, b) => 
                    (a.label > b.label) ? 1 : (b.label > a.label) ? -1 : 0
                  )
                  const index = temp.findIndex((x) => x.label === "ALL")
                  if (index > -1) {
                    const allItem = temp[index]
                    temp.splice(index, 1)
                    temp.unshift(allItem)
                  }
                  dropdown.items = temp
                }

                return (
                  <Dropdown
                    {...dropdown}
                    key={index}
                    className={classnames(styles['form-control'])}
                    handleParameter={handleChangeFilter}
                  />
                )})}
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default FilterGroupPanel
