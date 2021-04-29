/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */
import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { TextFieldProps } from './TextField.props'

type TextFieldStyleProps = Required<Pick<TextFieldProps, 'size' | 'feedback' | 'disabled' | 'readOnly'>>

const getFeedbackBorderColor = (theme: Theme, { feedback }: TextFieldStyleProps) => {
  switch (feedback) {
    case 'error':
      return theme.color.alert
    case 'success':
      return theme.color.success
    default:
      return theme.color.lowEmphasis
  }
}

const getFeedbackTextColor = (theme: Theme, { feedback, disabled }: TextFieldStyleProps) => {
  const defaultColor = disabled ? theme.color.lowEmphasis : theme.color.mediumEmphasis

  switch (feedback) {
    case 'error':
      return theme.color.alert
    case 'success':
      return theme.color.success
    default:
      return defaultColor
  }
}

const styles = createUseStyles((theme: Theme) => ({
  container: {
    flexGrow: 1
  },
  input: {
    border: '1px solid',
    borderColor: (props: TextFieldStyleProps) => getFeedbackBorderColor(theme, props),
    borderRadius: theme.borderRadius.medium,
    boxSizing: 'border-box',
    color: ({ disabled }: TextFieldStyleProps) => (disabled ? theme.color.lowEmphasis : theme.color.onPrimary),
    fontFamily: [theme.typography.fontFamily.primary, theme.typography.fontFamily.secondary],
    fontSize: 16,
    height: ({ size }: TextFieldStyleProps) => theme.size[size],
    letterSpacing: 0.51,
    padding: theme.spacing.small,
    width: '100%',
    '&:disabled': {
      backgroundColor: theme.color.surface
    },
    '&:hover:not([disabled])': {
      borderColor: theme.color.mediumEmphasis
    },
    '&:focus': {
      border: '2px solid',
      borderColor: theme.color.primary,
      outline: 'none'
    },
    '&::placeholder': {
      color: ({ disabled }: TextFieldStyleProps) => (disabled ? theme.color.lowEmphasis : theme.color.mediumEmphasis)
    }
  },
  overlay: {
    position: 'relative',
    cursor: ({ readOnly }: TextFieldStyleProps) => readOnly && 'not-allowed',
    '&:after': {
      borderRadius: theme.borderRadius.medium,
      backgroundColor: theme.color.lowEmphasis,
      content: "' '",
      height: '100%',
      left: 0,
      opacity: ({ readOnly }: TextFieldStyleProps) => (readOnly ? theme.opacity.disabledLow : 0),
      position: 'absolute',
      top: 0,
      width: '100%'
    }
  },
  helperText: {
    alignItems: 'center',
    color: (props: TextFieldStyleProps) => getFeedbackTextColor(theme, props),
    display: 'flex',
    fontFamily: [theme.typography.fontFamily.primary, theme.typography.fontFamily.secondary],
    fontSize: 12,
    letterSpacing: 0.4,
    marginTop: theme.spacing.micro,
    marginBottom: 0,
    '& > i': {
      marginRight: ({ feedback }: TextFieldStyleProps) => feedback && theme.spacing.micro
    }
  },
  label: {
    color: (props: TextFieldStyleProps) => getFeedbackTextColor(theme, props),
    fontFamily: [theme.typography.fontFamily.primary, theme.typography.fontFamily.secondary],
    fontSize: 14,
    letterSpacing: 0.11
  }
}))

export default styles
