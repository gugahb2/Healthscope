import React, { useEffect, useState } from 'react'
import classnames from 'classnames'
import { useRouter } from 'next/router'

import Dropdown, { IProps as IDropdown } from '../../shared-components/Dropdown'
import { makeSearchUrl } from '../../scripts/utils'

import styles from './styles.module.scss'
export interface IProps {
  heading: string
  description?: string
  dropdowns: IDropdown[]
  initTerm?: string
  isCenterAligned?: boolean
}

const SpecialistsSearch = ({
  heading,
  description,
  dropdowns,
  initTerm,
  isCenterAligned,
}: IProps) => {
  const router = useRouter()

  const [filter, setFilter] = useState<{ [key: string]: string }>({})
  const [dropdownList, setDropdownList] = useState<IDropdown[]>([])
  
  useEffect(() => {
    // Initialize filter
    if (!dropdowns) return

    const keys: string[] = dropdowns && dropdowns.length > 0 ? dropdowns.map((x) => x.name) : []
    keys.push('term')
    const temp = {}

    for (const key of keys) {
      if (key === 'term') {
        temp[key] = initTerm
      } else {
        const item = dropdowns.find((x) => x.name === key)
        const initValue =
        item && item.items && item.items.length > 0 && item.items.find((x) => x.selected) && item.items.find((x) => x.selected).value
        temp[key] = initValue
      }
    }

    setFilter(temp)
    setDropdownList([...dropdowns])
  }, [initTerm, dropdowns])

  const handleParameter = (key: string, value: string) => {
    setFilter({ ...filter, [key]: value })
    const temp = [...dropdownList]
    const index = temp.findIndex((x) => x.name === key)
    if (index > -1) {
      const subTemp = temp[index]['items']
      for (let i = 0; i < subTemp.length; i++) {
        subTemp[i]['selected'] = (subTemp[i]['value'] === value)
      }
    }
    setDropdownList(temp)
  }

  const handleClickButton = () => {
    const keys: string[] = dropdowns && dropdowns.length > 0 ? dropdowns.map((x) => x.name) : []
    keys.push('term')
    let params = []

    for (const key of keys) {
      if (filter[key]) params.push({ name: key, value: filter[key] })
    }

    const url = makeSearchUrl(params)

    if (router) router.push({ pathname: url })
    else if (typeof window !== 'undefined') window.location.href = url

  }

  const handleKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      event.stopPropagation()
      handleClickButton()
    }
  }

  return (
    <div className='section-container'>
      <div
        className={classnames(
          styles.root,
          isCenterAligned ? styles.align_centered : styles.align_left
        )}>
        <div className={styles.header_container}>
          {heading && <h1 className={styles.heading}>{heading}</h1>}
          {description && <h4 className={styles.description}>{description}</h4>}
        </div>
        <div className={styles.card_container}>
          <div
            className={classnames(
              styles.search_bar,
              'bg-white',
              'rounded-t-sm',
              'flex',
              'justify-between',
              'items-center'
            )}>
            <div className={styles.input_wrapper}>
              <input
                type='text'
                placeholder={'Enter name or keyword here...'}
                className='w-full outline-none font-rubik'
                value={filter.term || ''}
                onChange={(e) => handleParameter('term', e.target.value)}
                onKeyDown={(e) => handleKeyDown(e)}
              />
            </div>
            <div
              role='button'
              className={styles.button_wrapper}
              onClick={handleClickButton}>
              <span className='hidden md:block font-rubik'>
                Find a Doctor
              </span>
              <span className='block md:hidden'>
                <i className='hs hs-search' aria-hidden />
              </span>
            </div>
          </div>
          <div
            className={classnames(
              styles.advanced_search,
              'pt-3 pb-4 md:pb-5 px-6 md:px-5'
            )}>
            <h6 className={styles.filter_head}>
              {isCenterAligned ? 'Filter' : 'Advanced Search'}
            </h6>
            <div className={styles.filter_group}>
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
                      className={classnames(styles.filter_item, 'my-1.5')}
                      handleParameter={(key, value) =>
                        handleParameter(key, value)
                      }
                    />
                  )})}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SpecialistsSearch
