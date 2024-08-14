/* eslint-disable max-len */
import React, { useState } from 'react'
import { Story, Meta } from '@storybook/react'
import { iconNames, IconName } from '@naturacosmeticos/natds-icons'
import { IconButton, IconButtonProps } from '.'
import StoryContainer from '../../helpers/StoryContainer'
import { Icon } from '../Icon'
import Autocomplete from '../Autocomplete/Autocomplete'
import { OptionProps } from '../Autocomplete/Autocomplete.props'

const componentStatus = `
> Icon button allow users to take actions, and make choices, with a single tap.

## Properties
| Property                      | Values                                   |    Status           |
|---                            |                                       ---|                  ---|
| **ariaLabel**                 | string                                   | ✅ Available        |
| **backgroundStyle**           | none, float, overlay                     | ✅ Available        |
| **disabled**                  | true/false                               | ✅ Available        |
| **IconComponent**             | componente Icon                          | ✅ Available        |
| **onClick**                   | function                                 | ✅ Available        |
| **size**                      | semi, medium, semiX                      | ✅ Available        |
| **color**                     | primary, highEmphasis                    | ✅ Available        |
## Technical Usages Examples
`

export default {
  title: 'Components/IconButton',
  component: IconButton,
  parameters: {
    componentSubtitle: '',
    docs: { description: { component: componentStatus } },
    actions: { argTypesRegex: '^on.*' }
  }
} as Meta

// eslint-disable-next-line no-console
export const Playground: Story<IconButtonProps> = (args) => <IconButton {...args} onClick={() => console.log('clicked!')} />
Playground.args = {
  IconComponent: <Icon size="standard" name="outlined-default-mockup" color="highEmphasis" />
}

export const Color: Story<IconButtonProps> = (args) => (
  <StoryContainer>
    <IconButton {...args} />
    <IconButton
      {...args}
      IconComponent={<Icon size="standard" name="outlined-default-mockup" color="primary" />}
    />
    <IconButton
      {...args}
      IconComponent={<Icon size="standard" name="outlined-default-mockup" color="surface" />}
    />
  </StoryContainer>
)
Color.args = {
  ...Playground.args
}

export const Size: Story<IconButtonProps> = (args) => (
  <StoryContainer>
    <IconButton {...args} />
    <IconButton
      {...args}
      size="semiX"
      IconComponent={<Icon size="semi" name="outlined-default-mockup" color="highEmphasis" />}
    />
    <IconButton
      {...args}
      size="medium"
      IconComponent={<Icon size="semiX" name="outlined-default-mockup" color="highEmphasis" />}
    />
  </StoryContainer>
)
Size.args = {
  ...Playground.args
}

export const BackgroundStyle: Story<IconButtonProps> = (args) => (
  <StoryContainer>
    <IconButton {...args} />
    <IconButton {...args} backgroundStyle="float" />
    <IconButton {...args} backgroundStyle="overlay" />
  </StoryContainer>
)
BackgroundStyle.args = {
  ...Playground.args
}

export const Disabled: Story<IconButtonProps> = (args) => (
  <StoryContainer>
    <IconButton
      {...args}
      IconComponent={<Icon size="standard" name="outlined-default-mockup" color="mediumEmphasis" />}
    />
    <IconButton
      {...args}
      backgroundStyle="float"
      IconComponent={<Icon size="standard" name="outlined-default-mockup" color="mediumEmphasis" />}
    />
    <IconButton
      {...args}
      backgroundStyle="overlay"
      IconComponent={<Icon size="standard" name="outlined-default-mockup" color="lowEmphasis" />}
    />
  </StoryContainer>
)
Disabled.args = { ...Playground.args, disabled: true }

export const SearchIconButton: Story<IconButtonProps> = (args) => {
  const [value, setValue] = useState(iconNames[0])
  const [filterOptionsN] = useState<OptionProps[]>(iconNames.map((icon) => ({ value: icon, label: icon })))
  const [filterOptions, setFilterOptions] = useState<OptionProps[]>(iconNames.map((icon) => ({ value: icon, label: icon })))

  const handleSelect = (values: OptionProps) => {
    setValue(values.label)
    handleChange(values.label)
  }
  const handleChange = (values: string) => {
    setValue(values)

    const newFilter = filterOptionsN.filter(
      (opt) => opt.label.toLowerCase().includes(values.toLowerCase())
    )

    if (newFilter.length > 0) {
      setFilterOptions(newFilter)
    } else {
      setFilterOptions([{ value: 'false', label: 'false' }])
    }
  }
  return (
    <StoryContainer>
      <div style={{ display: 'flex', gap: 20 }}>
        <div style={{ minWidth: 280 }}>
          <Autocomplete
            onChange={(e) => handleChange(e.target.value)}
            options={filterOptions}
            value={value}
            handleSelect={handleSelect}
          />

        </div>
        <div style={{
          display: 'flex', gap: 20, width: '480px', flexWrap: 'wrap'
        }}
        >

          {
        filterOptions.map((names) => (
          <>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center ',
              padding: '8px',
              backgroundColor: '#ffffff',
              border: '1px solid #ccc',
              width: '180px'
            }}
            >
              <IconButton
                {...args}
                backgroundStyle="float"
                ariaLabel={names.label}
                onClick={() => ''}
                IconComponent={<Icon color="primary" name={names.value as IconName} />}
              />
              <p>{names.value}</p>
            </div>

          </>

        ))
      }
        </div>

      </div>
    </StoryContainer>
  )
}
SearchIconButton.args = { ...Playground.args }
