import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import Header, { HeaderProps } from './Header'

import { data } from './mock.data'

export default {
  component: Header,
  title: 'Components/Header',
  argTypes: {
    logo: {
      defaultValue: data.logo,
    },
    mobileLogo: {
      defaultValue: data.mobileLogo,
    },
    menuList: {
      type: 'object',
      defaultValue: data.menuList,
    },
  },
} as Meta

export const HeaderStory: Story<HeaderProps> = (args) => {
  return (
    <div className='bg-cerulean h-screen'>
      <Header {...args} />
    </div>
  )
}

HeaderStory.storyName = 'Default'
