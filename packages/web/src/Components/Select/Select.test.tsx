import * as React from 'react'
import * as TestRenderer from 'react-test-renderer'
import { render, fireEvent, within } from '@testing-library/react'
import { ISelectProps, Select, handleOptions } from './Select'

const getProps = (props: Partial<ISelectProps> = {}) => {
  const {
    disabled,
    helpText,
    id = 'Select',
    label,
    options = ['Option1', 'Option2'],
    placeholder = 'Placeholder',
    state,
    onChange
  } = props

  return {
    state,
    id,
    placeholder,
    options,
    disabled,
    helpText,
    label,
    onChange
  }
}

describe('Select component', () => {
  it('should render correctly', () => {
    const component = TestRenderer.create(<Select {...getProps()} />)
    expect(component).toMatchSnapshot()
  })
  it('should render as disabled', () => {
    const component = TestRenderer.create(
      <Select {...getProps()} disabled />
    )
    expect(component).toMatchSnapshot()
  })
  it('should render with helper text', () => {
    const component = TestRenderer.create(
      <Select {...getProps()} helpText="Helper Text" />
    )
    expect(component).toMatchSnapshot()
  })
  it('should render with label', () => {
    const component = TestRenderer.create(
      <Select {...getProps()} label="Label" />
    )
    expect(component).toMatchSnapshot()
  })
  it('should render as required', () => {
    const component = TestRenderer.create(
      <Select {...getProps()} required />
    )
    expect(component).toMatchSnapshot()
  })
  it('should render with state success', () => {
    const component = TestRenderer.create(
      <Select {...getProps()} state="success" />
    )
    expect(component).toMatchSnapshot()
  })
  it('should render with state error', () => {
    const component = TestRenderer.create(
      <Select {...getProps()} state="error" />
    )
    expect(component).toMatchSnapshot()
  })
  it('should select option1', async () => {
    const { getByRole } = render(<Select {...getProps()} />)

    fireEvent.mouseDown(getByRole('button'))
    const listbox = within(getByRole('listbox'))
    fireEvent.click(listbox.getByText('Option1'))

    expect(getByRole('button')).toMatchSnapshot()
  })
  it('should select option2', async () => {
    const { getByRole } = render(<Select {...getProps()} />)

    fireEvent.mouseDown(getByRole('button'))
    const listbox = within(getByRole('listbox'))
    fireEvent.click(listbox.getByText('Option2'))

    expect(getByRole('button')).toMatchSnapshot()
  })
  it('should calls onChange when select option1', async () => {
    const mockOnChange = jest.fn()
    const { getByRole } = render(
      <Select {...getProps()} onChange={mockOnChange} />
    )

    fireEvent.mouseDown(getByRole('button'))

    const listbox = within(getByRole('listbox'))

    fireEvent.click(listbox.getByText('Option1'))

    expect(mockOnChange).toHaveBeenCalledTimes(1)
    expect(getByRole('button').textContent).toEqual('Option1')
  })

  describe('handleOptions', () => {
    it('should return correctly when option is number', () => {
      expect(handleOptions([1, 2, 3])).toEqual([
        { value: 1, description: 1 },
        { value: 2, description: 2 },
        { value: 3, description: 3 }
      ])
    })
    it('should return correctly when option is string', () => {
      expect(handleOptions(['1', '2', '3'])).toEqual([
        { value: '1', description: '1' },
        { value: '2', description: '2' },
        { value: '3', description: '3' }
      ])
    })
    it('should return correctly when option is object', () => {
      expect(handleOptions([
        { value: 1, description: 'one' },
        { value: 2, description: 'two' },
        { value: 3, description: 'three' }
      ])).toEqual([
        { value: 1, description: 'one' },
        { value: 2, description: 'two' },
        { value: 3, description: 'three' }
      ])
    })
  })
})
