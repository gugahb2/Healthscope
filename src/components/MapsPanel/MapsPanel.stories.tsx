import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { supportedBackgrounds } from '../../scripts/utils'
import MapsPanel from './MapsPanel'
import { data } from './mock.data'

export default {
  component: MapsPanel,
  title: 'Components/Maps Panel',
  argTypes: {
    heading: {
      defaultValue: data.heading,
    },
    content: {
      defaultValue: data.content,
    },
    map: {
      defaultValue: data.map,
    },
    backgroundColour: {
      control: {
        type: 'select',
        options: supportedBackgrounds,
      },
    },
  },
} as Meta

export const MapsPanelStory: Story = (args) => {
  return <MapsPanel {...args} {...data} />
}

MapsPanelStory.storyName = 'Default'
