import React from 'react'
import { Theme } from '@naturacosmeticos/natds-themes'
import { useTheme } from 'react-jss'
import { IconColor } from '../Icon/Icon.props'
import { GayaButtonProps } from './GayaButton.props'
import { Icon } from '../Icon'
import { Ripple } from '../Ripple'
import styles from './GayaButton.styles'

const GayaButton = React.forwardRef<HTMLButtonElement, GayaButtonProps>(({
  children,
  className = '',
  brand,
  ariaLabel,
  role,
  ariaDisabled,
  ariaHaspopup,
  mode = 'light',
  color = 'primary',
  textTransform,
  disabled = false,
  fullWidth = false,
  display,
  iconPosition = 'right',
  onClick,
  size = 'semiX',
  testID,
  type = 'button',
  variant = 'contained',
  ...rest
}, ref) => {
  const { gayaButton, label, labelContainer } = styles({
    disabled,
    color,
    brand,
    mode,
    fullWidth,
    display,
    iconPosition,
    size,
    variant,
    textTransform,
    ...rest
  })

  const themes: Theme = useTheme()
  const iconColor = themes.button[variant].color.enable.label as IconColor

  return (
    <Ripple brand={brand} disabled={disabled} fullWidth={fullWidth}>
      <button
        className={`${gayaButton} ${className} Gaya-Button`}
        data-testid={testID}
        disabled={disabled || ariaDisabled}
        onClick={onClick}
        type={type}
        ref={ref}
        aria-disabled={disabled || ariaDisabled}
        aria-label={ariaLabel}
        role={role}
        aria-haspopup={ariaHaspopup}
      >
        <div className={labelContainer}>
          <span className={label}>{children}</span>
          {rest.showIcon && <Icon name={rest.iconName} color={iconColor} />}
        </div>
      </button>
    </Ripple>
  )
})

export default GayaButton
