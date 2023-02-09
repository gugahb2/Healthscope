import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import SidePanel, { IProps as IFilterGroup } from './SidePanel'
import { data } from './mock.data'

export default {
  component: SidePanel,
  title: 'Components/Side Panel',
  argTypes: {
    heading: {
      defaultValue: data.heading,
    },
    subHeading: {
      defaultValue: data.subHeading,
    },
    description: {
      defaultValue: data.description,
    },
    dropdowns: {
      defaultValue: data.dropdowns,
    },
  },
} as Meta

export const SidePanelStory: Story<IFilterGroup> = (args) => {
  return <SidePanel {...args} />
}

SidePanelStory.storyName = 'Default'
