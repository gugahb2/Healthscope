import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import FilterGroupPanel, { IProps as IFilterGroup } from './FilterGroupPanel'
import { data } from './mock.data'

export default {
  component: FilterGroupPanel,
  title: 'Components/Filter Group Panel',
  argTypes: {
    dropdowns: {
      defaultValue: data.dropdowns,
    },
    heading: {
      defaultValue: data.heading,
    },
    description: {
      defaultValue: data.description,
    },
  },
} as Meta

export const FilterGroupPanelStory: Story<IFilterGroup> = (args) => {
  return <FilterGroupPanel {...args} />
}

FilterGroupPanelStory.storyName = 'Default'
