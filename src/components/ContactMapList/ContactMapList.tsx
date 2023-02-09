import React from 'react'
import classNames from 'classnames'

import ContactMapItem, { ContactMapItemProps } from './ContactMapItem'

import styles from './contact_map_list.module.scss'

export interface ContactMapListProps {
  heading: string
  subHeading?: string
  items: ContactMapItemProps[]
  backgroundColour?: 'bg-white' | 'bg-cerulean' | 'bg-teal' | 'bg-light'
}

const ContactMapList = ({
  heading,
  subHeading,
  items,
  backgroundColour = 'bg-light',
}: ContactMapListProps) => {
  const _items = items && items.length > 0 ? items.slice(0, 3) : []

  return (
    <div className={classNames([styles.root, backgroundColour])}>
      <div className='section-container'>
        <div className={styles.content}>
          <div>
            {(heading || subHeading) && (
              <h3 className={classNames(styles.heading, 'text-heading-3')}>
                {heading && (
                  <>
                    {heading.toUpperCase()} <br />
                  </>
                )}
                {subHeading && subHeading}
              </h3>
            )}
          </div>
          <div>
            <div className={styles.items}>
              {_items &&
                !!_items.length &&
                _items.map((item, index) => (
                  <ContactMapItem
                    key={index}
                    {...item}
                    variant={_items.length === 1 ? 'horizontal' : 'vertical'}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactMapList
