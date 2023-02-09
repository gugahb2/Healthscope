import React from 'react'

import { componentList } from '../../scripts/componentList'
import { PageHeadingPanel } from '../../shared-components/PageHeadingPanel'
import { IPageProps } from '../../interfaces/base'
import Head from 'next/head'

const LoadPage = (props: IPageProps) => {
  const PageHeadingPanelComponent =
    PageHeadingPanel[props.pageType?.type?.toLowerCase() || 'type3']

  const reg = /^(Dr)\s/gm
  const title = props.head.title ? props.head.title.replace(reg, '') : 'HS App'

  return (
    <>
      <Head>
        {props.head && (
          <>
            <title>{title}</title>
            {props.head.meta &&
              props.head.meta.length > 0 &&
              props.head.meta.map((meta) => {
                return <meta {...meta} key={meta.name} />
              })}
          </>
        )}
      </Head>

      <PageHeadingPanelComponent {...props.pageType} />

      {props.components?.map((component, index) => {
        const Component = componentList[component.name?.toLowerCase()]
        const componentProps = component.props

        if (!Component) return null

        return <Component key={index} {...componentProps} />
      })}
    </>
  )
}

export default LoadPage
