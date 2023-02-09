import React from 'react'

import { MenuProps } from './Navigation'
import { IGroupLink } from './SubMenu'
import styles from '../navigation.module.scss'

const MobileMenu = (props: {
  selections: number[]
  menus: MenuProps[]
  onSelectMenu: Function
}) => {
  const { selections, menus, onSelectMenu } = props

  if (!selections || !selections.length) {
    return (
      <ul role='header-navigation'>
        {menus.map((m, index) => (
          <li key={index} className={styles.mobile_nav_menu}>
            {m.href ? (
              <a href={m.href || ''} target={m.target || ''}>
                {m.text || ''}
              </a>
            ) : (
              <span onClick={() => m.subMenu && onSelectMenu(index)}>
                {m.text || ''}
              </span>
            )}
          </li>
        ))}
      </ul>
    )
  } else if (selections.length === 1) {
    let _menu = menus[selections[0]]
    if (!_menu) return null

    if (_menu.subMenu && _menu.subMenu.isGroup) {
      let _links = _menu.subMenu.items || []
      return (
        <>
          <div
            className={styles.mobile_nav_breadcrumbs}
            style={{ marginBottom: 20 }}>
            <span>{_menu.text || ''}</span>
          </div>
          <ul role='header-navigation'>
            {_links.map((m, index) => (
              <li
                key={index}
                className={styles.mobile_nav_group}
                onClick={() => m.groupName && onSelectMenu(index)}>
                {m.groupName}
              </li>
            ))}
          </ul>
        </>
      )
    } else {
      let _links = (_menu.subMenu && _menu.subMenu.items) || []
      return (
        <>
          <div className={styles.mobile_nav_breadcrumbs}>
            <span>{_menu.text || ''}</span>
          </div>
          <ul role='header-navigation'>
            {_links.map((m, index) => (
              <li key={index} className={styles.mobile_nav_link}>
                {m.href ? (
                  <a href={m.href || ''} target={m.target || ''}>
                    {m.text || ''}
                  </a>
                ) : (
                  <span>{m.text || ''}</span>
                )}
              </li>
            ))}
          </ul>
        </>
      )
    }
  } else {
    let _menu = menus[selections[0]]
    if (!_menu) return null

    let _group =
      (_menu.subMenu && _menu.subMenu.isGroup && _menu.subMenu.items) || []
    let _groupLink = _group[selections[1]] as IGroupLink
    return (
      <>
        <div className={styles.mobile_nav_breadcrumbs}>
          <span>
            {_menu.text || ''}
            <i className='hs hs-dropdown' aria-hidden />
          </span>
          <span>{(_groupLink && _groupLink.groupName) || ''}</span>
        </div>
        <ul role='header-navigation'>
          {!!_groupLink &&
            !!_groupLink.links &&
            !!_groupLink.links.length &&
            _groupLink.links.map((m, index) => (
              <li key={index} className={styles.mobile_nav_link}>
                {m.href ? (
                  <a href={m.href || ''} target={m.target || ''}>
                    {m.text || ''}
                  </a>
                ) : (
                  <span>{m.text || ''}</span>
                )}
              </li>
            ))}
        </ul>
      </>
    )
  }
}

export default MobileMenu
