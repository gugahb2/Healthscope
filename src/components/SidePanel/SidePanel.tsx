import React, { useEffect, useState } from 'react'
import classnames from 'classnames'
import { useRouter } from 'next/router'

import Dropdown, { IProps as IDropdown } from '../../shared-components/Dropdown'
import { makeSearchUrl } from '../../scripts/utils'

import styles from './styles.module.scss'

export interface IProps {
  heading: string
  subHeading?: string
  description?: string
  dropdowns: IDropdown[]
  initTerm?: string
}

const SidePanel = ({ heading, subHeading, description, dropdowns, initTerm }: IProps) => {
  const router = useRouter()

  const [showControl, setShowControl] = useState(false)
  const [disable, setDisable] = useState(false)
  const [filter, setFilter] = useState<{ [key: string]: string }>({})
  const [dropdownList, setDropdownList] = useState<IDropdown[]>([])

  useEffect(() => {
    // Initialize filter
    if (!dropdowns) return

    const keys = dropdowns && dropdowns.length > 0 ? dropdowns.map((x) => x.name) : []
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
    setShowControl(false)
  }, [initTerm, dropdowns])

  const handleParameter = (key: string, value: string) => {
    setFilter({ ...filter, [key]: value })
  }

  const handleClickButton = () => {
    const keys = dropdowns && dropdowns.length > 0 ? dropdowns.map((x) => x.name) : []
    keys.push('term')
    let params = []

    for (const key of keys) {
      if (filter[key]) params.push({ name: key, value: filter[key] })
    }

    const url = makeSearchUrl(params)
    if (router) router.push({ pathname: url })
    else if (typeof window !== 'undefined') window.location.href = url
  }

  return (
    <div className={styles.root}>
      {!disable && showControl && (
        <div
          className={styles.backdrop}
          onClick={() => setShowControl(false)}></div>
      )}
      {!disable && (
        <div
          className={classnames(
            styles.container,
            showControl ? styles.full_mode : styles.hide_mode
          )}>
          <div
            className={classnames(
              'hidden md:flex',
              styles.heading,
              showControl ? styles.bg_tiffany : styles.bg_light
            )}
            onClick={() => setShowControl(!showControl)}>
            <div className={styles.vertical_mode}>
              <h4>
                <span className='mr-2'>
                  <i className='hs hs-search' aria-hidden />
                </span>
                {heading}
              </h4>
            </div>
          </div>
          <div
            className={classnames(
              'flex md:hidden',
              styles.heading,
              styles.bg_tiffany
            )}>
            <div className={styles.vertical_mode}>
              <span className='mr-2'>
                <i className='hs hs-search' aria-hidden />
              </span>
              {heading}
            </div>
            <div
              onClick={() => {
                setDisable(true)
              }}>
              <i className='hs hs-close' aria-hidden />
            </div>
          </div>

          <div className={styles.body}>
            <div className={styles.description_box}>
              {subHeading && (
                <h4 className={styles.sub_heading}>{subHeading}</h4>
              )}
              {description && (
                <div className={classnames('text-body', styles.description)}>
                  {description}
                </div>
              )}
            </div>
            <div className={styles.form_wrapper}>
              <div className={styles.input_wrapper}>
                <input
                  type='text'
                  placeholder={'Enter name or keyword here...'}
                  className={'w-full outline-none font-rubik'}
                  value={filter.term || ''}
                  onChange={(e) => handleParameter('term', e.target.value)}
                />
                <div className={styles.search_icon}>
                  <i className='hs hs-search' aria-hidden />
                </div>
              </div>
              {dropdownList &&
                dropdownList.length > 0 &&
                dropdownList.map((item, index) => (
                  <Dropdown
                    {...item}
                    key={index}
                    className={classnames(styles.dropdown, 'mt-1.5 sm:mt-5')}
                    handleParameter={(key, value) =>
                      handleParameter(key, value)
                    }
                  />
                ))}
              <div
                role='button'
                className={classnames(
                  styles.button_wrapper,
                  'flex justify-center items-center'
                )}
                onClick={handleClickButton}>
                <h4 className={styles.button_label}>Find a Doctor</h4>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default SidePanel
