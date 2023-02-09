import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import FormContainer from './FormContainer'
import {
  successfulFormContainerData,
} from './mock.data'

export default {
  component: FormContainer,
  title: 'Components/Form Container',
} as Meta

export const SuccessfulFormContainerStory: Story = (args) => {
  return <FormContainer {...args} {...successfulFormContainerData} />
}

SuccessfulFormContainerStory.storyName = 'Successful Submission'
