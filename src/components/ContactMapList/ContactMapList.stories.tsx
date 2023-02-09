import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { supportedBackgrounds } from '../../scripts/utils'
import ContactMapList, { ContactMapListProps } from './ContactMapList'

import { data } from './mock.data'

export default {
  component: ContactMapList,
  title: 'Components/Contact Map List',
  argTypes: {
    heading: {
      defaultValue: data.heading,
    },
    subHeading: {
      defaultValue: data.subHeading,
    },
    items: {
      defaultValue: data.items,
    },
    backgroundColour: {
      control: {
        type: 'select',
        options: supportedBackgrounds,
      },
    },
  },
} as Meta

export const ContactMapListOneStory: Story<ContactMapListProps> = (args) => {
  const _args = { ...args, items: [args.items[0]] }
  return <ContactMapList {..._args} />
}

ContactMapListOneStory.storyName = 'One Column'

export const ContactMapListThreeStory: Story<ContactMapListProps> = (args) => {
  return <ContactMapList {...args} />
}

ContactMapListThreeStory.storyName = 'Three Column'
