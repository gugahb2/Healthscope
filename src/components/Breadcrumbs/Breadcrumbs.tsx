import React from 'react'
import classNames from 'classnames'

import { ILink } from '../../interfaces/base'
import styles from './breadcrumbs.module.scss'
import Link from 'next/link'

interface BreadCrumbProps {
  link: ILink
  hasSlash?: boolean
  index?: Number
}

const BreadcrumbItem = (data: BreadCrumbProps) => {
  return (
    <li
      itemProp="itemListElement"
      itemScope={true}
      itemType="http://schema.org/ListItem"
    >
      <Link href={data.link?.href || '#'} prefetch={false}>
        <a
          target={data.link?.target || ''}
          itemScope={true}
          itemType="http://schema.org/WebPage"
          itemProp="item"
          itemID={data.link?.href || '#'}
        >
          <span className={classNames(styles.breadCrumb_item)} itemProp='name'>
            {data.link.text.toLowerCase()}
          </span>
          {data.hasSlash ? <span>/</span> : null}
        </a>
      </Link>
      <meta itemProp="position" content={data.index.toString()} />
    </li>
  )
}

export interface IProps {
  links: ILink[]
}

const Breadcrumbs = ({ links }: IProps) => {
  if (!links?.length) {
    return null
  }

  return (
    <div className='section-container'>
      <ol
        itemScope={true}
        itemType="https://schema.org/BreadcrumbList"
        className={classNames(styles.breadCrumbs)}
      >
        {links.map((breadcrumb, i) => {
          return (
            <BreadcrumbItem
              key={i}
              link={breadcrumb}
              hasSlash={i + 1 < links.length}
              index={i}
            />
          )
        })}
      </ol>
    </div>
  )
}

export default Breadcrumbs
