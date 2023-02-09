import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import Wysiwyg from './Wysiwyg'
import { data } from './wysiwyg.data'

export default {
  component: Wysiwyg,
  title: 'Components/Wysiwyg',
} as Meta

export const WysiwygStory: Story = (args) => {
  return <Wysiwyg {...args} {...data} />
}

export const WysiwygFullWidthStory: Story = (args) => {
  return <Wysiwyg {...args} {...data} fullWidth={true} />
}

WysiwygStory.storyName = 'Default'
WysiwygFullWidthStory.storyName = 'Full Width'
