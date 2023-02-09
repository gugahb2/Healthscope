import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import NewsCardPanel, {IProps as NewsProps} from './NewsCardPanel'
import { data } from './mock.data'

export default {
  component: NewsCardPanel,
  title: 'Components/News Card Panel',
  argTypes: {
    title: {
      defaultValue: data.title
    },
    readAllLink: {
      defaultValue: data.readAllLink
    },
    cards: {
      defaultValue: data.cards
    }
  }
} as Meta

export const NewsCardPanelStory: Story<NewsProps> = (args) => {
  return <NewsCardPanel {...args} />
}

NewsCardPanelStory.storyName = 'Default'
