import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { supportedBackgrounds } from '../../scripts/utils'
import OurSpecialties, { OurSpecialtiesProps } from './OurSpecialties'
import { specialtiesData } from './mock.data'

export default {
  component: OurSpecialties,
  title: 'Components/Our Specialties',
  argTypes: {
    heading: {
      defaultValue: specialtiesData.heading,
    },
    description: {
      defaultValue: specialtiesData.description,
    },
    items: {
      defaultValue: specialtiesData.items,
    },
    backgroundColour: {
      control: {
        type: 'select',
        options: supportedBackgrounds,
      },
    },
  },
} as Meta

export const OurSpecialtiesStory: Story<OurSpecialtiesProps> = (args) => {
  return <OurSpecialties {...args} />
}

OurSpecialtiesStory.storyName = 'Default'
