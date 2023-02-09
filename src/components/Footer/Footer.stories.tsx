import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import Footer from './Footer'
import { data } from './mock.data'

export default {
  component: Footer,
  title: 'Components/Footer',
} as Meta

export const FooterStory: Story = (args) => {
  return <Footer {...args} {...data} />
}

FooterStory.storyName = 'Default'
