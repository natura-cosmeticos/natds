/* eslint-disable max-lines-per-function */
import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { InputProps } from './Input.props'

const getFeedbackBorderColor = (theme: Theme) => ({ feedback }: InputProps) => {
  const borderColor = {
    error: theme.color.alert,
    success: theme.color.success
  }

  return feedback ? borderColor[feedback] : theme.color.lowEmphasis
}

const styles = createUseStyles((theme: Theme) => ({
  wrapper: {
    alignItems: 'center',
    backgroundColor: theme.color.surface,
    border: '1px solid',
    borderColor: getFeedbackBorderColor(theme),
    borderRadius: theme.borderRadius.medium,
    cursor: ({ disabled, readOnly }: InputProps) => (!disabled && !readOnly ? 'text' : 'default'),
    display: 'flex',
    justifyContent: 'space-between',
    position: 'relative',
    '&:hover': {
      borderColor: ({ disabled, readOnly }: InputProps) => (
        !disabled && !readOnly && theme.color.mediumEmphasis
      )
    },
    '&:focus-within': {
      border: '2px solid',
      borderColor: theme.color.primary
    },
    '&:after': {
      backgroundColor: theme.color.lowEmphasis,
      content: '""',
      height: '100%',
      left: 0,
      opacity: ({ readOnly }: InputProps) => (readOnly ? theme.opacity.disabledLow : 0),
      pointerEvents: 'none',
      position: 'absolute',
      top: 0,
      width: '100%'
    }
  },
  base: {
    background: 'none',
    border: 'none',
    color: theme.color.highEmphasis,
    fontFamily: [
      theme.textField.content.primary.fontFamily,
      theme.textField.content.fallback.fontFamily
    ],
    fontSize: theme.textField.content.fontSize,
    fontWeight: theme.textField.content.primary.fontWeight,
    letterSpacing: theme.textField.content.letterSpacing,
    lineHeight: theme.textField.content.lineHeight,
    outline: 'none',
    padding: theme.spacing.small,
    width: '100%',
    '&:read-only': {
      pointerEvents: 'none'
    },
    '&:disabled': {
      color: theme.color.lowEmphasis,
      cursor: 'default'
    }
  },
  input: {
    extend: 'base',
    boxSizing: 'border-box',
    height: ({ size }: InputProps) => size && theme.size[size],
    paddingRight: ({ action }: InputProps) => action && theme.spacing.tiny,
    '&::placeholder': {
      color: ({ disabled }: InputProps) => (
        disabled ? theme.color.lowEmphasis : theme.color.mediumEmphasis
      )
    }
  },
  textArea: {
    extend: 'base',
    paddingRight: ({ action }: InputProps) => action && theme.spacing.tiny,
    resize: ({ isResizable }: InputProps) => !isResizable && 'none',
    '&::placeholder': {
      color: ({ disabled }: InputProps) => (
        disabled ? theme.color.lowEmphasis : theme.color.mediumEmphasis
      )
    }
  }
}))

export default styles
