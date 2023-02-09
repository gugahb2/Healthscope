import React, { Fragment } from 'react'
import { StoryFn } from '@storybook/addons'
import { ToastContainer } from 'react-toastify'

import 'tailwindcss/tailwind.css'
import '../styles.scss'
import '../../src/styles/globals.scss'

const AppDecorator = (story: StoryFn) => {
  return (
    <Fragment>
      {story()}
      <ToastContainer position='top-right' autoClose={3000} />
    </Fragment>
  )
}

export default AppDecorator
