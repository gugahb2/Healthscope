import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import Home from '../pages/[[...slug]]'
import { IPageProps } from '../interfaces/base'
import { speciallistProfileTwoData } from './mockData/speciallistProfileTwoData'

export default {
  component: Home,
  title: 'Pages/Speciallist Profile Two',
  argTypes: {
    status: {
      defaultValue: speciallistProfileTwoData.status,
    },
    pageType: {
      defaultValue: speciallistProfileTwoData.pageType,
    },
    head: {
      defaultValue: speciallistProfileTwoData.head,
    },
    components: {
      defaultValue: speciallistProfileTwoData.components,
    },
  },
} as Meta

export const SpecialProfilePageTwoStory: Story<IPageProps> = (args) => {
  return <Home {...args} />
}

SpecialProfilePageTwoStory.storyName = 'Default'
