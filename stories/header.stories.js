import React from 'react'
import { storiesOf } from '@storybook/react'
import Header from '../src/components/header'

storiesOf('Header', module)
  .add('as is', () => <Header />)
  .add('open menu', () => <Header isMenuOpen={true} />)
  .add('open search', () => <Header isSearchOpen={true} />)
