import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { supportedBackgrounds } from '../../scripts/utils'
import FeatureImageTextPanel from './FeatureImageTextPanel'

import { data } from './mock.data'

export default {
  component: FeatureImageTextPanel,
  title: 'Components/Feature Image Text Panel',
  argTypes: {
    image: {
      defaultValue: data.image,
    },
    heading: {
      defaultValue: data.heading,
    },
    content: {
      defaultValue: data.content,
    },
    backgroundColour: {
      control: {
        type: 'select',
        options: supportedBackgrounds,
      },
    },
  },
} as Meta

export const FeatureImageTextPanelStory: Story = (args) => {
  return <FeatureImageTextPanel {...args} {...data} />
}

FeatureImageTextPanelStory.storyName = 'Default'
