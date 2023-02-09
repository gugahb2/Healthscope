import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { supportedBackgrounds } from '../../scripts/utils'
import SpecialistResultsHeader from './SpecialistResultsHeader'
import { data } from './mock.data'

export default {
  component: SpecialistResultsHeader,
  title: 'Components/Specialist Results Header',
  argTypes: {
    heading: {
      defaultValue: data.heading,
    },
    term: {
      defaultValue: data.term,
    },
    backgroundColor: {
      control: {
        type: 'select',
        options: supportedBackgrounds,
      },
      defaultValue: supportedBackgrounds[1],
    },
    dropdown: {
      defaultValue: data.dropdown,
    },
  },
} as Meta

export const SpecialistResultsHeaderStory: Story = (args) => {
  return <SpecialistResultsHeader {...args} {...data} />
}

SpecialistResultsHeaderStory.storyName = 'Default'
