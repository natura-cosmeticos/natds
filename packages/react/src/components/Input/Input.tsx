/* eslint-disable max-lines-per-function */
import React from 'react'
import { InputProps } from './Input.props'
import styles from './Input.styles'
import InputAction from './InputAction'

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    action,
    className = '',
    disabled = false,
    id,
    isResizable = false,
    minRows = 3,
    onBlur,
    onChange,
    onFocus,
    placeholder,
    readOnly = false,
    size = 'mediumX',
    type = 'text',
    value
  } = props

  const { wrapper, input, textArea } = styles({ size, isResizable, ...props })

  const isMultiline = type === 'multiline'

  return (
    <div className={wrapper} ref={ref}>
      {
        isMultiline
          ? (
            <textarea
              className={`${className} ${textArea}`}
              data-testid="ds-input-multiline"
              disabled={disabled}
              onBlur={onBlur}
              onChange={onChange}
              onFocus={onFocus}
              placeholder={placeholder}
              readOnly={readOnly}
              rows={minRows}
              id={id}
            />
          )
          : (
            <input
              className={`${className} ${input}`}
              data-testid="ds-input"
              disabled={disabled}
              onBlur={onBlur}
              onChange={onChange}
              onFocus={onFocus}
              placeholder={placeholder}
              readOnly={readOnly}
              type={type}
              value={value}
              id={id}
            />
          )
      }
      {action && (<InputAction {...props} />)}
    </div>
  )
})

export default Input
