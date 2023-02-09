import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import SpecialistsSearch, { IProps } from './SpecialistsSearch'
import { data } from './mock.data'

export default {
  component: SpecialistsSearch,
  title: 'Components/Specialists Search',
  argTypes: {
    heading: {
      defaultValue: data.heading,
    },
    description: {
      defaultValue: data.description,
    },
    dropdowns: {
      defaultValue: data.dropdowns,
    },
    isCenterAligned: {
      control: {
        type: 'select',
        options: [true, false],
      },
    },
  },
} as Meta

export const SpecialistsSearchStory: Story<IProps> = (args) => {
  return (
    <div style={{backgroundColor: '#000'}}>
      <SpecialistsSearch {...args} />
    </div>
  )
  
}

SpecialistsSearchStory.storyName = 'Default'
