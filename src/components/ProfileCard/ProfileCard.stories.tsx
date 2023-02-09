import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import ProfileCard, { IProps as ProfileProps } from './ProfileCard'
import { data } from './mock.data'

export default {
  component: ProfileCard,
  title: 'Components/ProfileCard',
  argTypes: {
    avatar: {
      defaultValue: data.avatar,
    },
    title: {
      defaultValue: data.title,
    },
    firstName: {
      defaultValue: data.firstName,
    },
    lastName: {
      defaultValue: data.lastName,
    },
    roles: {
      defaultValue: data.roles,
    },
    specialties: {
      defaultValue: data.specialties,
    },
    location: {
      defaultValue: data.location,
    },
    phone: {
      defaultValue: data.phone,
    },
    fax: {
      defaultValue: data.fax,
    },
    link: {
      defaultValue: data.link,
    },
  },
} as Meta

export const ProfileCardStory: Story<ProfileProps> = (args) => {
  return <ProfileCard {...args} />
}

ProfileCardStory.storyName = 'Default'
