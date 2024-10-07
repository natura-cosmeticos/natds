/* eslint-disable react/no-array-index-key */
/* eslint-disable no-plusplus */
/* eslint-disable max-len */
import React, { useState } from 'react'
import { Story, Meta } from '@storybook/react'
import { iconNames, IconName } from '@naturacosmeticos/natds-icons'
import Autocomplete from '../Autocomplete/Autocomplete'
import { Icon, IconProps } from '.'
import { OptionProps } from '../Autocomplete/Autocomplete.props'
import StoryContainer from '../../helpers/StoryContainer'

const componentStatus = `
> A helper component to display icons from @naturacosmeticos/natds-icons package.

## Properties
| Property                      | Values                                       |    Status           |
|---                            |                                           ---|                  ---|
| **ariaHidden**                | true/false                                   | ✅ Available        |
| **ariaLabel**                 | string                                       | ✅ Available        |
| **color**                     | color-name (Support Color tokens from theme) | ✅ Available        |
| **name**                      | icon-name                                    | ✅ Available        |
| **role**                      | img, button                                  | ✅ Available        |
| **size**                      | (Support Size tokens from theme)             | ✅ Available        |
| **brand**                   | avon, avon_v2, natura, natura_v2, theBodyShop, <br /> consultoriaDeBeleza, casaEestilo            | ✅ Available        |

## Technical Usages Examples
`

export default {
  title: 'Components/Icon',
  component: Icon,
  parameters: {
    componentSubtitle: '',
    docs: { description: { component: componentStatus } }
  }
} as Meta

export const Playground: Story<IconProps> = (args) => <Icon {...args} />
export const Icons: Story<IconProps> = (args) => <Icon {...args} />

export const SearchIcon: Story<IconProps> = () => {
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
              <Icon color="primary" name={names.value as IconName} />
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
SearchIcon.args = { ...Playground.args }

export const ListIcon: Story<IconProps> = () => {
  const [filterOptionsN] = useState<OptionProps[]>(iconNames.map((icon) => ({ value: icon, label: icon })))
  const [filterOptions] = useState<OptionProps[]>(filterOptionsN)

  const countIcons = () => {
    const counts = {
      filled: 1,
      outlined: 0,
      categories: {} as { [key: string]: number }
    }

    filterOptions.forEach((option) => {
      const parts = option.value.split('-')
      if (parts[0] === 'filled') {
        counts.filled++
      } else if (parts[0] === 'outlined') {
        counts.outlined++
      }

      const category = parts[1]
      if (counts.categories[category]) {
        counts.categories[category]++
      } else {
        counts.categories[category] = 1
      }
    })

    return counts
  }

  const iconCounts = countIcons()

  return (
    <StoryContainer>
      <div style={{ display: 'flex', gap: 20 }}>
        <div style={{
          minWidth: 280, backgroundColor: '#fff', boxSizing: 'border-box', padding: '8px'
        }}
        >
          {Object.entries(iconCounts.categories).map(([category, count]) => (
            <p key={category}>
              {category}
              :
              {' '}
              {count}
            </p>
          ))}
          <p>
            Filled:
            {' '}
            {iconCounts.filled}
          </p>
          <p>
            Outlined:
            {' '}
            {iconCounts.outlined}
          </p>
          <p>
            Total de Icons:
            {' '}
            {filterOptionsN.length}
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {filterOptions.map((option, index) => (
            <ul key={index} style={{ display: 'flex', flexDirection: 'column' }}>
              <li>{option.value}</li>
            </ul>
          ))}
        </div>
      </div>
    </StoryContainer>
  )
}
ListIcon.args = { ...Playground.args }
