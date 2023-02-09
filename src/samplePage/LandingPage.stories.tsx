import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import Home from '../pages/[[...slug]]'
import { IPageProps } from '../interfaces/base'
import { landingPageData } from './mockData/landingPageData'

export default {
  component: Home,
  title: 'Pages/Landing Page',
  argTypes: {
    status: {
      defaultValue: landingPageData.status,
    },
    pageType: {
      defaultValue: landingPageData.pageType,
    },
    head: {
      defaultValue: landingPageData.head,
    },
    components: {
      defaultValue: landingPageData.components,
    },
  },
} as Meta

export const HomePageDataStory: Story<IPageProps> = (args) => {
  return <Home {...args} />
}

HomePageDataStory.storyName = 'Default'
