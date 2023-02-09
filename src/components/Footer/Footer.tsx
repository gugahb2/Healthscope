import React from 'react'
import Image from 'next/image'
import { ILink, IImage } from '../../interfaces/base'

import styles from './footer.module.scss'

interface ILinkGroup {
  headingLink?: ILink
  links: ILink[]
}

export interface IProps {
  logo: IImage
  menu: ILinkGroup[]
  footerLinks?: ILink[]
}

const MenuCol = (props: { menu: ILinkGroup }) => {
  const { menu } = props

  if (!menu) return

  return (
    <ul role='footer-navigation__menu'>
      {menu.headingLink && (
        <li className={`${styles.footer_menu_heading} text-tiffany`}>
          <a
            href={menu.headingLink.href || '#'}
            target={menu.headingLink.target || ''}>
            {menu.headingLink.text}
          </a>
        </li>
      )}
      {menu.links &&
        menu.links.length > 0 &&
        menu.links.map((item, index) => (
          <li className={`${styles.footer_menu_link} my-3`} key={index}>
            <a href={item.href || '#'} target={item.target || ''}>
              {item.text}
            </a>
          </li>
        ))}
    </ul>
  )
}

const Footer = ({ logo, menu, footerLinks }: IProps) => {
  return (
    <footer>
      <div className={`${styles.footer} bg-teal`}>
        <div className='section-container'>
          <div className='block md:flex'>
            <div className='block w-full sm:hidden lg:block lg:w-1/3'>
              {logo && logo.src && (
                <div className={styles.footer_logo}>
                  <Image
                    src={logo.src}
                    alt={logo.alt || 'LOGO'}
                    layout='fill'
                  />
                </div>
              )}
            </div>
            <div className='w-full sm:w-full lg:w-2/3'>
              <ul
                className={`${styles.footer_group} flex flex-wrap`}
                role='footer-navigation'>
                {menu &&
                  menu.length > 0 &&
                  menu.map((menu, index) => (
                    <li
                      className={`${styles.footer_menu} w-1/2 sm:w-1/3 sm:px-2`}
                      key={index}>
                      <MenuCol menu={menu} />
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {footerLinks && !!footerLinks.length && (
        <div className={`${styles.footer_reserved} bg-cerulean`}>
          <div className='section-container text-center'>
            {footerLinks.map((link, index) => (
              <span key={index}>
                {index > 0 && <span className='mx-2'>|</span>}
                <a href={link.href || '#'} target={link.target || ''}>
                  {link.text}
                </a>
              </span>
            ))}
          </div>
        </div>
      )}
    </footer>
  )
}

export default Footer
