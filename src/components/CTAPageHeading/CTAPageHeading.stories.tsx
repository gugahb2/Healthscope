import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { supportedBackgrounds } from '../../scripts/utils'
import CTAPageHeading, { IProps } from './CTAPageHeading'
import { data } from './mock.data'

export default {
  component: CTAPageHeading,
  title: 'Components/CTAPageHeading',
  argTypes: {
    introText: {
      defaultValue: data.introText,
    },
    heading: {
      defaultValue: data.heading,
    },
    subHeading: {
      defaultValue: data.subHeading,
    },
    descriptions: {
      defaultValue: data.descriptions,
    },
    backgroundColor: {
      control: {
        type: 'select',
        options: supportedBackgrounds,
      },
    },
    type: {
      control: {
        type: 'select',
        options: ['type1', 'type2'],
      },
      defaultValue: data.type,
    },
  },
} as Meta

export const CTAPageHeadingStory: Story<IProps> = (args) => {
  return <CTAPageHeading {...args} />
}

CTAPageHeadingStory.storyName = 'Default'
