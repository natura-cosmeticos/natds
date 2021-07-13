/* eslint-disable @typescript-eslint/ban-ts-comment,@typescript-eslint/no-explicit-any */
import * as React from 'react'
import MaskedInput from 'react-text-mask'
import PasswordReveal from './PasswordReveal'
import SearchClear from './SearchClear'
import CustomIcon from './CustomIcon'
import { ITextFieldProps } from '../TextField'
import { IInputProps, Input } from '../Input'

export const TEXT_TYPE = 'text'
export const SEARCH_TYPE = 'search'
export const PASSWORD_TYPE = 'password'

export const Field = React.forwardRef<HTMLInputElement | HTMLTextAreaElement, ITextFieldProps>(
  // eslint-disable-next-line complexity,max-statements
  (props: ITextFieldProps, ref) => {
    const {
      className,
      disabled = false,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      helpText,
      hidePasswordIcon,
      icon,
      id,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      label,
      mask,
      guide,
      placeholderChar,
      maxLength,
      multiline,
      onChange,
      onBlur,
      onFocus,
      onIconPress,
      placeholder = '',
      required = false,
      searchIcon,
      showPasswordIcon,
      state,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      theme: providedTheme,
      type,
      ...otherProps
    } = props

    let fieldType: IInputProps['inputComponent'] = 'input'

    if (multiline) {
      fieldType = 'textarea'
    } else if (mask) {
      fieldType = MaskedInput
    }

    const [showing, togglePasswordReveal] = React.useState(false)
    const [value, setValue] = React.useState('')
    const customType = showing ? TEXT_TYPE : type
    const showPasswordReveal = type === PASSWORD_TYPE && !icon
    const showSearchClear = type === SEARCH_TYPE && !icon
    const hasIcon = Boolean(showPasswordReveal) || Boolean(showSearchClear) || Boolean(icon)

    const clearSearch = () => setValue('')

    let endAdornment: React.ReactNode = null

    if (showPasswordReveal) {
      endAdornment = (
        <PasswordReveal
          hidePasswordIcon={hidePasswordIcon}
          onTogglePasswordReveal={togglePasswordReveal}
          showing={showing}
          showPasswordIcon={showPasswordIcon}
        />
      )
    }
    if (showSearchClear) {
      endAdornment = (
        <SearchClear
          onClearSearch={clearSearch}
          searchIcon={searchIcon}
        />
      )
    }
    if (icon) {
      // @ts-ignore
      endAdornment = <CustomIcon icon={icon} onIconPress={onIconPress} />
    }

    return (
      <Input
        disabled={disabled}
        endAdornment={endAdornment}
        hasIcon={hasIcon}
        id={id}
        inputComponent={fieldType}
        inputProps={{
          className: className && `${className}__input`,
          mask,
          guide,
          maxLength,
          placeholderChar
        }}
        multiline={multiline}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        placeholder={placeholder}
        ref={ref}
        required={required}
        state={state}
        type={customType || TEXT_TYPE}
        value={value}
        disableUnderline
        {...otherProps}
      />
    )
  }
)

Field.displayName = 'Field'

export default Field
