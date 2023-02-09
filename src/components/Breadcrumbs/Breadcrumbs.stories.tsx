import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { supportedBackgrounds } from '../../scripts/utils'
import Breadcrumbs, { IProps as BreadcrumbsProps } from './Breadcrumbs'
import { data } from './mock.data'

export default {
  component: Breadcrumbs,
  title: 'Components/Breadcrumbs',
  argTypes: {
    links: {
      defaultValue: data.links,
    },
  },
} as Meta

export const BreadcrumbsStory: Story<BreadcrumbsProps> = (args) => {
  return (
    <div className='bg-cerulean'>
      <Breadcrumbs {...args} />
    </div>
  )
}

BreadcrumbsStory.storyName = 'Default'
