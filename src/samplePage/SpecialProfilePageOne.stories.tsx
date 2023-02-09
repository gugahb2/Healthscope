import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import Home from '../pages/[[...slug]]'
import { IPageProps } from '../interfaces/base'
import { speciallistProfileOneData } from './mockData/speciallistProfileOneData'

export default {
  component: Home,
  title: 'Pages/Speciallist Profile One',
  argTypes: {
    status: {
      defaultValue: speciallistProfileOneData.status,
    },
    pageType: {
      defaultValue: speciallistProfileOneData.pageType,
    },
    head: {
      defaultValue: speciallistProfileOneData.head,
    },
    components: {
      defaultValue: speciallistProfileOneData.components,
    },
  },
} as Meta

export const SpecialProfilePageOneStory: Story<IPageProps> = (args) => {
  return <Home {...args} />
}

SpecialProfilePageOneStory.storyName = 'Default'
