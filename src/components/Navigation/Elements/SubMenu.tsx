import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import classNames from 'classnames'

import { ILink } from '../../../interfaces/base'

import styles from '../navigation.module.scss'

export interface IGroupLink {
  groupName?: string
  links: ILink[]
}

export interface ISubMenu {
  isGroup?: boolean
  heading?: string
  items: IGroupLink[] | ILink[]
}

const MenuPanel = ({ groupName, links }: IGroupLink) => {
  const bound_count = links && !!links.length ? Math.ceil(links.length / 2) : 0
  const router = useRouter()
  let pathname = ''
  if (router) pathname = router.asPath
  else if (typeof window !== 'undefined') pathname = window.location.pathname
  pathname = pathname !== '/' ? pathname : null

  return (
    <div>
      {groupName && (
        <div className={classNames(styles.heading)}>
          {groupName}
        </div>
      )}
      <div className='flex'>
        <div className='flex-1 mr-4'>
          <ul>
            {!!bound_count &&
              links.slice(0, bound_count).map((link, index) => (
                <li
                  key={index}
                  className={classNames(styles.link, {
                    active: pathname && link.href.includes(pathname),
                  })}>
                  <a href={link.href} target={link.target || ''}>
                    {link.text}
                  </a>
                </li>
              ))}
          </ul>
        </div>
        <div className='flex-1'>
          <ul>
            {!!bound_count &&
              links.slice(bound_count).map((link, index) => (
                <li
                  key={index}
                  className={classNames(styles.link, {
                    active: pathname && link.href.includes(pathname),
                  })}>
                  <a href={link.href} target={link.target || ''}>
                    {link.text}
                  </a>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

const SubMenu = ({ isGroup, heading, items }: ISubMenu) => {
  const [selectedGroup, setSelectedGroup] = React.useState(0)
  const router = useRouter()
  let pathname = ''
  if (router) pathname = router.asPath
  else if (typeof window !== 'undefined') pathname = window.location.pathname
  pathname = pathname !== '/' ? pathname : null

  useEffect(() => {
    let flag = false
    items.forEach((item, index) => {
      if (item.links) {
        item.links.forEach((sub_item) => {
          if (pathname && sub_item.href.includes(pathname)) {
            setSelectedGroup(index)
            flag = true
          }
        })
      }
    })
    if (!flag) setSelectedGroup(0)
  }, [items, pathname])

  if (!items && !items.length) return null

  return (
    <div className={styles.megamenu_container}>
      <div className={styles.megamenu}>
        {isGroup ? (
          <div
            className={classNames(
              styles.megamenu_wrapper,
              styles.grouped,
            )}>
            <div className={classNames(styles.megamenu_group, 'w-1/3')}>
              {heading && <p className={styles.heading}>{heading}</p>}
              <ul>
                {items.map((glink, index) => (
                  <li
                    key={index}
                    className={classNames(
                      styles.group_link,
                      selectedGroup === index ? 'active' : ''
                    )}
                    onClick={() => setSelectedGroup(index)}>
                    {glink.groupName}
                  </li>
                ))}
              </ul>
            </div>
            <div className='w-2/3'>
              <MenuPanel {...(items[selectedGroup] as IGroupLink)} />
            </div>
          </div>
        ) : (
          <div className='flex justify-end'>
            <div className='w-2/3'>
              <div className={classNames(styles.megamenu_wrapper)}>
                <MenuPanel links={items as ILink[]} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default SubMenu
