import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { supportedBackgrounds } from '../../scripts/utils'
import ImageTextPanel from './ImageTextPanel'
import { data } from './mock.data'

export default {
  component: ImageTextPanel,
  title: 'Components/Image Text Panel',
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

export const ImageTextPanelStory: Story = (args) => {
  return <ImageTextPanel {...args} {...data} />
}

ImageTextPanelStory.storyName = 'Default'
