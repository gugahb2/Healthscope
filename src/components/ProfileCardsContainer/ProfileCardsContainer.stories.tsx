import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import ProfileCardsContainer, {IProps as ProfileProps} from './ProfileCardsContainer'
import { data } from './mock.data'

export default {
  component: ProfileCardsContainer,
  title: 'Components/Profile Cards Container',
  argTypes: {
    items: {
      defaultValue: data.items
    }
  }
} as Meta

export const ProfileCardsContainerStory: Story<ProfileProps> = (args) => {
  return <ProfileCardsContainer {...args} />
}

ProfileCardsContainerStory.storyName = 'Default'
