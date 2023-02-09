import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

export default {
  title: 'Components/IconSamples',
} as Meta

export const IconSampleStory: Story = () => {
  return (
    <>
      <i className='hs hs-logo' />
      <i className='hs hs-search' />
      <i className='hs hs-phone' />
      <i className='hs hs-phone-alt' />
      <i className='hs hs-filter' />
      <i className='hs hs-fax' />
      <i className='hs hs-fax-alt' />
      <i className='hs hs-dropdown' />
      <i className='hs hs-dot' />
      <i className='hs hs-close' />
      <i className='hs hs-chevron-down' />
      <i className='hs hs-bars' />
      <i className='hs hs-arrow-right' />
      <i className='hs hs-arrow-left' />
    </>
  )
}

IconSampleStory.storyName = 'Default'
