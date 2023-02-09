import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import Home from '../pages/[[...slug]]'
import { IPageProps } from '../interfaces/base'
import { homePageData } from './mockData/homePageData'

export default {
  component: Home,
  title: 'Pages/Home Page',
  argTypes: {
    status: {
      defaultValue: homePageData.status,
    },
    pageType: {
      defaultValue: homePageData.pageType,
    },
    head: {
      defaultValue: homePageData.head,
    },
    components: {
      defaultValue: homePageData.components,
    },
  },
} as Meta

export const HomePageDataStory: Story<IPageProps> = (args) => {
  return <Home {...args} />
}

HomePageDataStory.storyName = 'Default'
