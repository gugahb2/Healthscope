import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import FeatureFilterGroupPanel, { IProps as IFilterGroup } from './FeatureFilterGroupPanel'
import { data } from './mock.data'

export default {
  component: FeatureFilterGroupPanel,
  title: 'Components/Feature Filter Group Panel',
  argTypes: {
    dropdowns: {
      defaultValue: data.dropdowns,
    },
    sorts: {
      defaultValue: data.sorts
    }
  },
} as Meta

export const FeatureFilterGroupPanelStory: Story<IFilterGroup> = (args) => {
  return <FeatureFilterGroupPanel {...args} />
}

FeatureFilterGroupPanelStory.storyName = 'Default'
