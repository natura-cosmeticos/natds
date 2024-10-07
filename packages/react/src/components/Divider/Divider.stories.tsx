import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Divider, DividerProps } from '.'

const componentStatus = `
> A divider is a thin line that groups content in lists and layouts.

## Properties
| Property             | Values                       |    Status           |
|---                   |                           ---|                  ---|
| **variant**          | full-bleed, inset, middle    | ✅ Available        |
## Technical Usages Examples
`

export default {
  title: 'Components/Divider',
  component: Divider,
  parameters: {
    componentSubtitle: '',
    docs: { description: { component: componentStatus } }
  }
} as Meta

export const Playground: Story<DividerProps> = (args) => (
  <Template>
    <Divider {...args} />
  </Template>
)

export const FullBleed: Story<DividerProps> = (args) => (
  <Template>
    <Divider {...args} variant="full-bleed" />
  </Template>
)
FullBleed.args = { ...Playground.args }

export const Inset: Story<DividerProps> = (args) => (
  <Template>
    <Divider {...args} variant="inset" />
  </Template>
)
FullBleed.args = { ...Playground.args }

export const Middle: Story<DividerProps> = (args) => (
  <Template>
    <Divider {...args} variant="middle" />
  </Template>
)
FullBleed.args = { ...Playground.args }

const Template = ({ children }: {children: React.ReactNode}) => (
  <div style={{ maxWidth: 200, border: '1px solid #00000014', padding: '16px 0' }}>
    {children}
  </div>
)
