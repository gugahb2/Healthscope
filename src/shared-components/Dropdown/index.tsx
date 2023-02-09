import React, { useState } from 'react'

import styles from './styles.module.scss'
import classnames from 'classnames'
import { useEffect } from 'react'
import { setTitleCase } from '../../scripts/utils'

export interface IProps {
  className?: string
  name: string
  label?: string
  items?: {
    label: string
    value: string
    selected?: boolean
  }[]
  isBorder?: boolean
  /**
   * Used internally by FE to handle callbacks
   */
  handleParameter?: (key: string, value: string) => void
}

const Dropdown = ({
  className = '',
  name,
  label,
  items,
  isBorder,
  handleParameter,
}: IProps) => {
  const [selectedValue, setSelectedValue] = useState('')

  useEffect(() => {
    const initValue = items && items.length > 0 ? items.find((x) => x.selected)?.value || items[0].value : ''
    setSelectedValue(initValue)
  }, [items])

  const handleChange = (event: any) => {
    setSelectedValue(event.target.value)
    handleParameter && handleParameter(event.target.name, event.target.value)
  }

  const titleCaseList = ['ALL']

  return (
    <div className={`${styles.root} ${className || ''}`}>
      {label && <label className=''>{label}</label>}
      <div className={classnames(
        styles.wrapper,
        isBorder && styles.borderType
      )}>
        <select name={name} className='bg-white' value={selectedValue} onChange={handleChange}>
          {items &&
            items.length > 0 &&
            items.map((item, index) => (
              <option key={index} value={item.value}>
                {titleCaseList.includes(item.value)
                  ? setTitleCase(item.label)
                  : item.label}
              </option>
            ))}
        </select>
      </div>
    </div>
  )
}

export default Dropdown
