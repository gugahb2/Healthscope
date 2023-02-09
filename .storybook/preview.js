import { addDecorator } from '@storybook/react'
import * as NextImage from 'next/image'

import Wrapper from './.decorators/Wrapper'

addDecorator(Wrapper)

// Open issue: https://github.com/vercel/next.js/issues/18393

const OriginalNextImage = NextImage.default

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
})

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
