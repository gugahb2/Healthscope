import React from 'react'
import Image from 'next/image'
import { IImage } from '../../interfaces/base'

import Navigation, { MenuProps } from './Elements/Navigation'
import NavigationMobile from './Elements/NavigationMobile'
import styles from './navigation.module.scss'
import router from 'next/router'

export interface HeaderProps {
  logo: IImage
  mobileLogo?: IImage
  menuList: MenuProps[]
}

const Header = ({ logo, mobileLogo, menuList }: HeaderProps) => {
  return (
    <header className={styles.root}>
      <div className='section-container'>
        <div className='flex justify-end pt-2 lg:pt-3'>
          <div
            className={styles.logoBox}
            onClick={() => router.push('/')}>
            {logo && logo.src ? (
              <div className={styles.logo}>
                <Image
                  src={logo.src}
                  alt={logo.alt || 'LOGO'}
                  layout='fill'
                  objectFit='contain'
                />
              </div>
            ) : null}
          </div>
          <div className='w-1/2 md:w-2/3 pb-2'>
            <Navigation menus={menuList} />
            <NavigationMobile logo={mobileLogo || logo} menus={menuList} />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
