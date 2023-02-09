import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import ImageCardTile, {IProps as ProfileProps} from './ImageCardTile'
import { data } from './mock.data'

export default {
  component: ImageCardTile,
  title: 'Components/ImageCardTile',
  argTypes: {
    image: {
      defaultValue: data.image
    },
    title: {
      defaultValue: data.title
    },
    description: {
      defaultValue: data.description
    },
    link: {
      defaultValue: data.link
    }
  }
} as Meta

export const CardTileStory: Story<ProfileProps> = (args) => {
  return <ImageCardTile {...args} />
}

CardTileStory.storyName = 'Default'
