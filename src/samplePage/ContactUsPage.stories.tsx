import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import Home from '../pages/[[...slug]]'
import { IPageProps } from '../interfaces/base'
import { contactUsPageData } from './mockData/ContactUsPageData'

export default {
  component: Home,
  title: 'Pages/Contact us Page',
  argTypes: {
    status: {
      defaultValue: contactUsPageData.status,
    },
    pageType: {
      defaultValue: contactUsPageData.pageType,
    },
    head: {
      defaultValue: contactUsPageData.head,
    },
    components: {
      defaultValue: contactUsPageData.components,
    },
  },
} as Meta

export const ContactUsPageDataStory: Story<IPageProps> = (args) => {
  return <Home {...args} />
}

ContactUsPageDataStory.storyName = 'Default'
