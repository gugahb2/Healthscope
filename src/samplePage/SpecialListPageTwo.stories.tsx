import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import Home from '../pages/[[...slug]]'
import { IPageProps } from '../interfaces/base'
import { specialListPageTwoData } from './mockData/specialListPageTwoData'

export default {
  component: Home,
  title: 'Pages/Special List Page Two',
  argTypes: {
    status: {
      defaultValue: specialListPageTwoData.status,
    },
    pageType: {
      defaultValue: specialListPageTwoData.pageType,
    },
    head: {
      defaultValue: specialListPageTwoData.head,
    },
    components: {
      defaultValue: specialListPageTwoData.components,
    },
  },
} as Meta

export const SpecialListPageTwoStory: Story<IPageProps> = (args) => {
  return <Home {...args} />
}

SpecialListPageTwoStory.storyName = 'Default'
