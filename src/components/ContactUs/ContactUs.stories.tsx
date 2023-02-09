import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import ContactUs, { IProps } from './ContactUs'
import { data } from './mock.data'

export default {
  component: ContactUs,
  title: 'Components/ContactUs',
  argTypes: {
    heading: {
      defaultValue: data.heading,
    },
    formGroups: {
      defaultValue: data.formGroups
    }
  },
} as Meta

export const ContactUsStory: Story<IProps> = (args) => {
  return <ContactUs {...args} />
}

ContactUsStory.storyName = 'Default'
