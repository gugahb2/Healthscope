import React from 'react'
import classNames from 'classnames'

import SubMenu, { ISubMenu } from './SubMenu'
import styles from '../navigation.module.scss'

export interface MenuProps {
  href: string
  text: string
  target?: string
  subMenu?: ISubMenu
}

export interface NavigationProps {
  menus: MenuProps[]
}

const Navigation = ({ menus }: NavigationProps) => {
  if (!menus || !menus.length) return null

  return (
    <nav className={classNames(styles.nav_bar)}>
      <ul className='flex items-center' role='header-navigation'>
        {menus.map((item, index) => (
          <li
            className={classNames(
              styles.menu,
              item.subMenu ? styles.has_submenu : ''
            )}
            key={index}>
            {item.href && item.text ? (
              <a
                className={styles.menu_item}
                href={item.href}
                target={item.target || ''}>
                {item.text}
              </a>
            ) : (
              <span className={styles.menu_item}>{item.text}</span>
            )}
            {item.subMenu && <SubMenu {...item.subMenu} />}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation
