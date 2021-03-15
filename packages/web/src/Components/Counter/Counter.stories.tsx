import * as React from 'react'
import { Meta, Story } from '@storybook/react'
import { Counter as component, ICounterProps } from './Counter'
import argTypes from './Container.argTypes'

const Counter : React.ForwardRefExoticComponent<ICounterProps> = React.lazy(() => import('./Counter'))

export default {
  argTypes,
  component,
  title: 'Components/Counter'
} as Meta

const Template : Story<ICounterProps> = (args: ICounterProps) => (
  <div>
    <Counter {...args} />
  </div>
)

export const Playground : Story<ICounterProps> = Template.bind({})
Playground.args = {
  onChange: () => null,
  onDecrement: () => null,
  onIncrement: () => null
}

export const SmallSize : Story<ICounterProps> = Template.bind({})
SmallSize.args = {
  ...Playground.args,
  size: 'small'
}

export const MediumSize : Story<ICounterProps> = Template.bind({})
MediumSize.args = {
  ...Playground.args,
  size: 'medium'
}

export const WithLabel : Story<ICounterProps> = Template.bind({})
WithLabel.args = {
  ...Playground.args,
  size: 'small',
  label: 'Quantidade'
}
