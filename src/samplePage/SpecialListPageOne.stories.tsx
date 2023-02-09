import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import Home from '../pages/[[...slug]]'
import { IPageProps } from '../interfaces/base'
import { specialListPageOneData } from './mockData/specialListPageOneData'

export default {
  component: Home,
  title: 'Pages/Special List Page One',
  argTypes: {
    status: {
      defaultValue: specialListPageOneData.status,
    },
    pageType: {
      defaultValue: specialListPageOneData.pageType,
    },
    head: {
      defaultValue: specialListPageOneData.head,
    },
    components: {
      defaultValue: specialListPageOneData.components,
    },
  },
} as Meta

export const SpecialListOnePageStory: Story<IPageProps> = (args) => {
  return <Home {...args} />
}

SpecialListOnePageStory.storyName = 'Default'
