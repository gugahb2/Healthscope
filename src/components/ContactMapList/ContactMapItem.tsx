import React from 'react'
import classNames from 'classnames'
import { useRouter } from 'next/router'

import GMapWidget, {
  GMapWidgetProps,
} from '../../shared-components/GMapWidget/GMapWidget'
import Wysiwyg from '../Wysiwyg/Wysiwyg'

import styles from './contact_map_item.module.scss'
import { formatPhoneNumber } from '../../scripts/utils'

export interface ContactMapItemProps {
  name: string
  phone: string
  fax: string
  address: string
  hospitalHref?: string
  variant?: 'horizontal' | 'vertical'
  map: GMapWidgetProps
}

const ContactMapItem = ({
  name,
  phone,
  fax,
  address,
  hospitalHref,
  variant = 'vertical',
  map,
}: ContactMapItemProps) => {
  const router = useRouter()

  const handleClick = () => {
    if (!hospitalHref) return
    if (router) router.push({ pathname: hospitalHref })
    else if (typeof window !== 'undefined') window.location.href = hospitalHref
  }

  return (
    <div className={classNames([styles.root, 'shadow-lg', variant])}>
      <div className={styles.map_wrapper}>
        <div className={styles.map}>
          <GMapWidget {...map} />
        </div>
      </div>
      <div className={styles.content}>
        {name && (
          <p className={classNames([styles.hs_name, 'cursor-pointer'])}
            onClick={handleClick}>
            {name}
          </p>
        )}
        <div className={styles.phones}>
          <div className='w-1/2'>
            <a href={`tel:${phone}`}>
              <i className='hs hs-phone' aria-hidden />
              <span>{formatPhoneNumber(phone) || ''}</span>
            </a>
          </div>
          <div className='w-1/2'>
            <a href={`tel:${fax}`}>
              <i className='hs hs-fax' aria-hidden />
              <span>{formatPhoneNumber(fax) || ''}</span>
            </a>
          </div>
        </div>
        <div>
          <p className={styles.address_label}>ADDRESS</p>
          <Wysiwyg
            className={styles.address_content}
            content={address}
            fullWidth={true}
          />
        </div>
      </div>
    </div>
  )
}

export default ContactMapItem
