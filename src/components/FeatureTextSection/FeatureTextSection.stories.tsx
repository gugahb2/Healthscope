import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import FeatureTextSection from './FeatureTextSection'
import { data } from './mock.data'

export default {
  component: FeatureTextSection,
  title: 'Components/Feature Text Section',
  argTypes: {
    heading: {
      defaultValue: data.heading,
    },
    content: {
      defaultValue: data.content,
    },
    buttonText: {
      defaultValue: data.buttonText,
    },
  },
} as Meta

export const FeatureTextSectionStory: Story = (args) => {
  return <FeatureTextSection {...args} {...data} />
}

FeatureTextSectionStory.storyName = 'Default'
