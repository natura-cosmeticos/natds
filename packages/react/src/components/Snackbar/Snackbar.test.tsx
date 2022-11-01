import React from 'react'
import Snackbar from '.'
import renderWithTheme from '../../helpers/renderWithTheme'

describe('Snackbar component', () => {
  it('should render correctly with default props', () => {
    const { styles, component } = renderWithTheme(<Snackbar />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
})
