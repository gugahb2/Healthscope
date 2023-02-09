import React from 'react'
import Image from 'next/image'
import classNames from 'classnames'
import { IImage } from '../../../interfaces/base'

import MobileMenu from './MobileMenu'
import { MenuProps } from './Navigation'
import styles from '../navigation.module.scss'

export interface NavigationMobileProps {
  logo: IImage
  menus: MenuProps[]
}

const NavigationMobile = ({ logo, menus }: NavigationMobileProps) => {
  const [open, setOpen] = React.useState(false)
  const [menuStatus, setMenuStatus] = React.useState<number[]>([])

  const handleOpenMenu = () => {
    setMenuStatus([])
    setOpen(true)
  }

  const handleSelectedMenu = (index: number) => {
    setMenuStatus((prev) => [...prev, index])
  }

  const handleBackMenu = () => {
    setMenuStatus((prev) => {
      if (prev.length === 1) return []
      return prev.slice(0, prev.length - 1)
    })
  }

  return (
    <div className={styles.mobile_nav}>
      <button className={styles.burger_btn} onClick={handleOpenMenu}>
        <i className='hs hs-bars' aria-hidden />
      </button>
      <div
        className={classNames(styles.mobile_nav_wrapper, open ? 'open' : '')}>
        <div className={styles.mobile_nav_header}>
          {logo && logo.src ? (
            <Image
              className={styles.logo}
              src={logo.src}
              alt={logo.alt || 'LOGO'}
              width={141}
              height={28}
            />
          ) : null}
          <button className={styles.close_btn} onClick={() => setOpen(false)}>
            <i className='hs hs-close' aria-hidden />
          </button>
        </div>
        <div className={styles.mobile_nav_content}>
          <p
            className={styles.mobile_nav_back}
            onClick={() => handleBackMenu()}>
            {menuStatus && !!menuStatus.length && 'Back'}&nbsp;
          </p>
          <MobileMenu
            selections={menuStatus}
            menus={menus}
            onSelectMenu={handleSelectedMenu}
          />
        </div>
      </div>
    </div>
  )
}

export default NavigationMobile
