import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import ThreeColumnTextPanel from './ThreeColumnTextPanel'
import { data } from './mock.data'

export default {
  component: ThreeColumnTextPanel,
  title: 'Components/Three Column Text Panel',
  argTypes: {
    textAreas: {
      defaultValue: data.textAreas,
    },
  },
} as Meta

export const ThreeColumnTextPanelStory: Story = (args) => {
  return <ThreeColumnTextPanel {...args} />
}

ThreeColumnTextPanelStory.storyName = 'Default'
