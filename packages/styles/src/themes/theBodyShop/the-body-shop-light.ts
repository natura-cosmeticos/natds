/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/prefer-default-export */
/* eslint-disable max-lines */
/* eslint-disable no-magic-numbers */
/* eslint-disable sort-keys */

/**
 * @todo refactor(styles): replace magic numbers by tokens (including opacity, padding and sizing)
 */

import hexToRgba from 'hex-to-rgba'
import themes from '@naturacosmeticos/natds-themes'
import tokens from '../../tokens'
import { ITheme } from '../ITheme'
import { typography } from './typography'
import { fontSize } from '../../tokens/typography'
import { spacing } from '../../tokens/spacing'
import { avatarSizes } from '../../tokens/avatarSizes'
import { buttonSizes } from '../../tokens/buttonSizes'
import { elevation } from '../../tokens/elevation'
import { iconSizes } from '../../tokens/iconSizes'
import { sizes } from '../../tokens/sizes'
import { opacity as legacyOpacity } from '../../tokens/opacity'

const {
  colorTokens: {
    /**
     * @deprecated `theBodyShopLightColorTokens` are deprecated since v0.20 and will be removed at v1.0.
     * Please use `theme.theBodyShop.light.color` from `natds-themes`.
     */
    theBodyShopLightColorTokens
  }
} = tokens

const { color, opacity, asset } = themes.theBodyShop.light

export const theBodyShopLight: ITheme = {
  asset,
  shape: {
    borderRadius: tokens.radius.medium,
    badgeBorderRadius: 100
  },
  avatarSizes,
  buttonSizes,
  color,
  iconSizes,

  /**
   * @since 0.22
   * @todo Adopt opacity tokens from theme
   */
  opacity: legacyOpacity,
  sizes,
  spacing: spacing.spacing,
  palette: {
    action: {
      /**
       * @since 0.24
       */
      active: hexToRgba(color.highlight, opacity.mediumHigh),
      disabled: hexToRgba(theBodyShopLightColorTokens.colorHighlight, 0.24)
    },

    /**
     * @since 0.24
     */
    divider: theBodyShopLightColorTokens.colorLowEmphasis,
    primary: {
      main: theBodyShopLightColorTokens.colorPrimary,
      light: theBodyShopLightColorTokens.colorPrimaryLight,
      dark: theBodyShopLightColorTokens.colorPrimaryDark,
      contrastText: theBodyShopLightColorTokens.colorOnPrimary
    },
    secondary: {
      main: theBodyShopLightColorTokens.colorSecondary,
      light: theBodyShopLightColorTokens.colorSecondaryLight,
      dark: theBodyShopLightColorTokens.colorSecondaryDark,
      contrastText: theBodyShopLightColorTokens.colorOnSecondary
    },
    error: {
      main: theBodyShopLightColorTokens.colorAlert,
      contrastText: theBodyShopLightColorTokens.colorOnAlert
    },
    success: {
      main: theBodyShopLightColorTokens.colorSuccess,
      contrastText: theBodyShopLightColorTokens.colorOnSuccess
    },
    background: {
      paper: theBodyShopLightColorTokens.colorSurface,
      default: theBodyShopLightColorTokens.colorBackground,
      paperContrastText: theBodyShopLightColorTokens.colorOnSurface,
      defaultContrastText: theBodyShopLightColorTokens.colorOnBackground
    },
    text: {
      primary: theBodyShopLightColorTokens.colorHighEmphasis,
      secondary: theBodyShopLightColorTokens.colorMediumEmphasis,
      disabled: theBodyShopLightColorTokens.colorLowEmphasis,
      hint: theBodyShopLightColorTokens.colorLowEmphasis
    },
    complementary: {
      highlight: theBodyShopLightColorTokens.colorHighlight,
      link: theBodyShopLightColorTokens.colorLink,
      linkContrastText: theBodyShopLightColorTokens.colorOnLink,
      warning: theBodyShopLightColorTokens.colorWarning,
      warningContrastText: theBodyShopLightColorTokens.colorOnWarning
    }
  },

  /**
   * @todo fix(styles): TS2322 - type is not assignable to type 'ITypography'.
   */
  // @ts-ignore
  typography: {
    ...typography,
    ...fontSize
  },
  shadows: elevation,
  overrides: {
    MuiButton: {
      outlinedPrimary: {
        color: theBodyShopLightColorTokens.colorHighEmphasis
      },
      outlinedSecondary: {
        color: theBodyShopLightColorTokens.colorHighEmphasis,
        '&.Mui-disabled': {
          borderColor: `${theBodyShopLightColorTokens.colorHighlight}3D`
        }
      },
      sizeSmall: {
        ...buttonSizes.small,
        ...fontSize.subtitle2
      },
      root: {
        ...buttonSizes.medium,
        ...fontSize.subtitle2
      },
      sizeLarge: {
        ...buttonSizes.large,
        ...fontSize.subtitle2
      },
      text: {
        padding: null,
        '&.Mui-disabled': {
          color: `${theBodyShopLightColorTokens.colorHighlight}3D`,
          borderColor: `${theBodyShopLightColorTokens.colorHighlight}3D`
        }
      },
      contained: {
        '&.Mui-disabled': {
          color: `${theBodyShopLightColorTokens.colorHighlight}3D`,
          backgroundColor: `${theBodyShopLightColorTokens.colorHighlight}14`
        }
      },
      outlined: {
        padding: null,
        borderColor: `${theBodyShopLightColorTokens.colorHighlight}3D`,
        '&.Mui-disabled': {
          color: `${theBodyShopLightColorTokens.colorHighlight}3D`,
          borderColor: `${theBodyShopLightColorTokens.colorHighlight}3D`
        }
      }
    },
    MuiAvatar: {
      colorDefault: {
        color: theBodyShopLightColorTokens.colorHighEmphasis
      }
    },
    MuiIconButton: {
      root: {
        padding: '8px',
        color: theBodyShopLightColorTokens.colorHighEmphasis
      },
      sizeSmall: {
        padding: '4px'
      }
    },
    MuiExpansionPanel: {
      root: {
        border: 'transparent 1px solid',
        '&$expanded': {
          borderColor: theBodyShopLightColorTokens.colorPrimary
        },
        '&$disabled': {
          backgroundColor: theBodyShopLightColorTokens.colorOnPrimary,
          opacity: 0.32
        }
      }
    },
    MuiExpansionPanelSummary: {
      root: {
        alignItems: 'flex-start',
        marginTop: '8px',
        '&$disabled': {
          opacity: 1
        }
      }
    },
    MuiToolbar: {
      root: {
        padding: '0 16px',
        '@media (min-width: 600px)': {
          padding: '0 16px'
        }
      },
      gutters: {
        padding: '0 16px',
        '@media (min-width: 600px)': {
          padding: '0 16px'
        }
      },
      regular: {
        minHeight: '56px',
        '@media (min-width: 600px)': {
          minHeight: '56px'
        }
      },
      dense: {
        minHeight: '56px',
        '@media (min-width: 600px)': {
          minHeight: '56px'
        }
      }
    },
    MuiListItem: {
      root: {
        cursor: 'pointer',
        '&:hover': {
          backgroundColor: hexToRgba(
            theBodyShopLightColorTokens.colorOnSurface,
            0.04
          )
        },
        '&$selected': {
          backgroundColor: hexToRgba(
            theBodyShopLightColorTokens.colorPrimary,
            0.16
          ),
          '&:hover': {
            backgroundColor: hexToRgba(
              theBodyShopLightColorTokens.colorHighlight,
              0.04
            )
          },
          '&:focus': {
            outline: 'none'
          }
        },
        '&.Mui-disabled': {
          opacity: 0.32
        }
      },
      gutters: {
        '&:focus': {
          outline: 'none'
        }
      },
      button: {
        '&:hover': {
          backgroundColor: hexToRgba(
            theBodyShopLightColorTokens.colorHighlight,
            0.04
          )
        }
      }
    },
    MuiBadge: {
      badge: {
        padding: '0 4px'
      }
    },
    MuiTab: {
      root: {
        '&$disabled': {
          opacity: 0.24
        }
      },
      textColorInherit: {
        '&$disabled': {
          opacity: 0.24
        }
      },
      wrapper: {
        '& > *:first-child': {
          marginBottom: '2px !important'
        }
      }
    },
    MuiChip: {
      root: {
        backgroundColor: hexToRgba(
          theBodyShopLightColorTokens.colorHighlight,
          0.12
        ),
        color: theBodyShopLightColorTokens.colorHighEmphasis,
        fontSize: fontSize.subtitle2.fontSize,
        '& $avatar': {
          backgroundColor: hexToRgba(
            theBodyShopLightColorTokens.colorHighlight,
            0.24
          ),
          color: theBodyShopLightColorTokens.colorHighEmphasis
        },
        '&$disabled': {
          opacity: 0.4
        }
      },
      clickableColorPrimary: {
        '&:hover': {
          backgroundColor: theBodyShopLightColorTokens.colorPrimary
        }
      },
      clickableColorSecondary: {
        '&:hover': {
          backgroundColor: theBodyShopLightColorTokens.colorSecondary
        }
      },
      outlined: {
        borderColor: hexToRgba(
          theBodyShopLightColorTokens.colorHighlight,
          0.12
        ),
        color: theBodyShopLightColorTokens.colorHighlight
      },
      outlinedPrimary: {
        color: theBodyShopLightColorTokens.colorHighlight
      },
      outlinedSecondary: {
        color: theBodyShopLightColorTokens.colorHighlight
      },
      icon: {
        fontSize: `${sizes.standard}px`
      },
      iconSmall: {
        width: `${sizes.small}px`,
        height: `${sizes.small}px`,
        fontSize: `${sizes.small}px`,
        marginTop: '1px'
      },
      deleteIcon: {
        width: `${sizes.standard}px`,
        height: `${sizes.standard}px`,
        fontSize: `${sizes.standard}px`,
        color: hexToRgba(theBodyShopLightColorTokens.colorHighlight, 0.8),
        '&:hover': {
          color: theBodyShopLightColorTokens.colorHighlight
        }
      },
      deleteIconSmall: {
        width: `${sizes.small}px`,
        height: `${sizes.small}px`,
        fontSize: `${sizes.small}px`
      },
      deleteIconColorPrimary: {
        color: hexToRgba(theBodyShopLightColorTokens.colorOnPrimary, 0.8),
        '&:hover': {
          color: theBodyShopLightColorTokens.colorOnPrimary
        }
      },
      deleteIconColorSecondary: {
        color: hexToRgba(theBodyShopLightColorTokens.colorOnSecondary, 0.8),
        '&:hover': {
          color: theBodyShopLightColorTokens.colorOnSecondary
        }
      }
    },
    MuiTextField: {
      '& .MuiInputLabel': {
        marginTop: '20px'
      }
    },
    MuiInputBase: {
      root: {
        fontSize: fontSize.subtitle2.fontSize,
        borderRadius: '4px',
        boxShadow: `${theBodyShopLightColorTokens.colorLowEmphasis} 0 0 0 1px`,
        color: theBodyShopLightColorTokens.colorHighEmphasis,
        width: '100%',
        "&[data-state='error']": {
          boxShadow: `${theBodyShopLightColorTokens.colorAlert} 0 0 0 1px`
        },
        "&[data-state='success']": {
          boxShadow: `${theBodyShopLightColorTokens.colorSuccess} 0 0 0 1px`
        },
        '&:hover': {
          boxShadow: `${theBodyShopLightColorTokens.colorMediumEmphasis} 0 0 0 1px`,
          '&.Mui-disabled': {
            boxShadow: `${theBodyShopLightColorTokens.colorLowEmphasis} 0 0 0 1px`
          }
        },
        '&.Mui-focused': {
          boxShadow: `${theBodyShopLightColorTokens.colorPrimary} 0 0 0 2px`
        },
        '&.MuiFilled:not(.Mui-focused)': {
          boxShadow: `${theBodyShopLightColorTokens.colorHighEmphasis} 0 0 0 1px`,
          '&:hover': {
            boxShadow: `${theBodyShopLightColorTokens.colorMediumEmphasis} 0 0 0 1px`
          }
        },
        '&.MuiInputBase-multiline': {
          padding: sizes?.none
        },
        '&.MuiInput-underline:before': {
          borderBottom: 'none'
        },
        '&.MuiInput-underline.Mui-disabled:before': {
          borderBottomStyle: 'none'
        },
        '&.MuiInput-underline:hover:not(.Mui-disabled):before': {
          borderBottom: 'none'
        },
        '&.MuiInput-underline:after': {
          borderBottom: 'none'
        }
      },
      adornedEnd: {
        paddingRight: sizes.medium
      },
      input: {
        '&.Mui-disabled:not(::placeholder)': {
          opacity: 0.24
        },
        '&::placeholder': {
          color: theBodyShopLightColorTokens.colorMediumEmphasis
        },
        '&.MuiInput-inputTypeSearch': {
          paddingRight: sizes.large
        },
        border: sizes?.none,
        boxSizing: 'border-box',
        lineHeight: `${sizes?.standard}px`,
        minHeight: sizes?.mediumX,
        padding: sizes?.small
      },
      inputMultiline: {
        padding: sizes?.small
      },
      inputTypeSearch: {
        '&::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration': {
          display: 'none'
        }
      }
    },
    MuiInputAdornment: {
      root: {
        position: 'absolute',
        right: '0'
      },
      positionEnd: {
        marginRight: spacing.spacingTiny
      }
    },
    MuiInputLabel: {
      formControl: {
        position: 'relative',
        transform: 'none',
        marginTop: '-4px'
      },
      shrink: {
        transform: 'none',
        marginTop: '-4px'
      }
    },
    MuiFormLabel: {
      root: {
        fontSize: fontSize.subtitle2.fontSize,
        '&.Mui-focused': {
          fontSize: fontSize.subtitle2.fontSize,
          color: theBodyShopLightColorTokens.colorMediumEmphasis
        },
        '&.Mui-error': {
          color: theBodyShopLightColorTokens.colorAlert
        }
      }
    },
    MuiSelect: {
      select: {
        '&:focus': {
          backgroundColor: 'transparent'
        },
        '&.Mui-disabled': {
          color: theBodyShopLightColorTokens.colorLowEmphasis
        }
      },
      icon: {
        top: sizes.micro,
        color: theBodyShopLightColorTokens.colorHighEmphasis
      }
    },
    MuiButtonGroup: {
      groupedOutlinedHorizontal: {
        '&:not(:first-child)': {
          marginLeft: 'none'
        }
      },
      groupedContainedPrimary: {
        '&:not(:last-child)': {
          borderColor: theBodyShopLightColorTokens.colorPrimaryDark,
          '&.Mui-disabled': {
            borderColor: `${theBodyShopLightColorTokens.colorHighlight}3D`
          }
        }
      },
      groupedContainedSecondary: {
        '&:not(:last-child)': {
          borderColor: theBodyShopLightColorTokens.colorSecondaryDark,
          '&.Mui-disabled': {
            borderColor: `${theBodyShopLightColorTokens.colorHighlight}3D`
          }
        }
      },
      groupedContainedHorizontal: {
        '&:not(:last-child)': {
          borderRightColor: `${theBodyShopLightColorTokens.colorHighlight}1F`,
          '&.Mui-disabled': {
            borderColor: `${theBodyShopLightColorTokens.colorHighlight}3D`
          }
        }
      },
      groupedTextPrimary: {
        '&:not(:last-child).Mui-disabled': {
          borderColor: `${theBodyShopLightColorTokens.colorHighlight}3D`
        }
      },
      groupedTextSecondary: {
        '&:not(:last-child).Mui-disabled': {
          borderColor: `${theBodyShopLightColorTokens.colorHighlight}3D`
        }
      },
      groupedTextHorizontal: {
        '&:not(:last-child)': {
          borderRightColor: `${theBodyShopLightColorTokens.colorHighlight}1F`,
          '&.Mui-disabled': {
            borderColor: `${theBodyShopLightColorTokens.colorHighlight}3D`
          }
        }
      }
    },
    MuiSvgIcon: {
      root: {}
    },
    MuiAlert: {
      root: {
        width: 278,
        padding: spacing.spacingSmall,
        ...fontSize.body1
      },
      icon: {
        marginRight: spacing.spacingTiny
      },
      message: {
        padding: '5px 0'
      },
      standardSuccess: {
        color: theBodyShopLightColorTokens.colorHighEmphasis,
        backgroundColor: hexToRgba(
          theBodyShopLightColorTokens.colorSuccess,
          0.16
        )
      },
      outlinedSuccess: {
        color: theBodyShopLightColorTokens.colorHighEmphasis
      },
      standardError: {
        color: theBodyShopLightColorTokens.colorHighEmphasis,
        backgroundColor: hexToRgba(
          theBodyShopLightColorTokens.colorAlert,
          0.16
        )
      },
      outlinedError: {
        color: theBodyShopLightColorTokens.colorHighEmphasis
      },
      standardWarning: {
        color: theBodyShopLightColorTokens.colorHighEmphasis,
        backgroundColor: hexToRgba(
          theBodyShopLightColorTokens.colorWarning,
          0.16
        ),
        '& .MuiAlert-icon': {
          color: theBodyShopLightColorTokens.colorWarning
        }
      },
      outlinedWarning: {
        color: theBodyShopLightColorTokens.colorHighEmphasis,
        borderColor: theBodyShopLightColorTokens.colorWarning,
        '& .MuiAlert-icon': {
          color: theBodyShopLightColorTokens.colorWarning
        }
      },
      filledWarning: {
        color: theBodyShopLightColorTokens.colorOnWarning,
        backgroundColor: theBodyShopLightColorTokens.colorWarning
      },
      standardInfo: {
        color: theBodyShopLightColorTokens.colorHighEmphasis,
        backgroundColor: hexToRgba(theBodyShopLightColorTokens.colorLink, 0.16),
        '& .MuiAlert-icon': {
          color: theBodyShopLightColorTokens.colorLink
        }
      },
      outlinedInfo: {
        color: theBodyShopLightColorTokens.colorHighEmphasis,
        borderColor: theBodyShopLightColorTokens.colorLink,
        '& .MuiAlert-icon': {
          color: theBodyShopLightColorTokens.colorLink
        }
      },
      filledInfo: {
        backgroundColor: theBodyShopLightColorTokens.colorLink
      }
    },
    MuiAlertTitle: {
      root: {
        ...fontSize.h6
      }
    },
    MuiTableSortLabel: {
      icon: {
        marginLeft: spacing.spacing
      }
    },
    MuiTablePagination: {
      root: {
        overflow: 'visible',
        '& .MuiSelect-icon': {
          top: 0,
          height: '100%'
        }
      },
      input: {
        flexShrink: 'initial'
      }
    }
  }
}
