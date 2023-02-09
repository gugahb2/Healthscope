import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import ProfileDetailsPanel, { ProfileDetailProps } from './ProfileDetailsPanel'
import { data } from './mock.data'

export default {
  component: ProfileDetailsPanel,
  title: 'Components/Profile Details Panel',
  argTypes: {
    heading: {
      defaultValue: data.heading
    },
    subHeading: {
      defaultValue: data.subHeading
    },
    introText: {
      defaultValue: data.introText
    },
    expertise: {
      control: { type: 'text' },
      defaultValue: data.expertise,
    },
    interest: {
      control: { type: 'text' },
      defaultValue: data.interest,
    },
    profileCard: {
      defaultValue: data.profileCard
    },
    hospitals: {
      defaultValue: data.hospitals
    }
  },
} as Meta

export const ProfileDetailsPanelStory: Story<ProfileDetailProps> = (args) => {
  return <ProfileDetailsPanel {...args} />
}

ProfileDetailsPanelStory.storyName = 'Default'
