import * as React from 'react';
import { Button as PaperButton, withTheme } from 'react-native-paper';
import { Surface, StyleProp, ViewStyle, TextStyle } from 'react-native';
import { IconSource } from 'react-native-paper/lib/typescript/src/components/Icon';
import { IThemeShape } from 'Provider/IThemeShape';
import { IButtonSize } from '@naturacosmeticos/natds-styles';

type ColorType = 'primary' | 'secondary' | 'default';
type ButtonSize = 'small' | 'medium' | 'large';

declare type ButtonProps = React.ComponentProps<typeof Surface> & {
  /**
   * Custom flag to change color.
   */
  colorType?: ColorType;
  /**
   * Mode of the button. You can change the mode to adjust the styling to give it desired emphasis.
   * - `text` - flat button without background or outline (low emphasis)
   * - `outlined` - button with an outline (medium emphasis)
   * - `contained` - button with a background color and elevation shadow (high emphasis)
   */
  mode?: 'text' | 'outlined' | 'contained';
  /**
   * Custom text color for flat button, or background color for contained button.
   */
  color?: string;
  /**
   * Icon to display for the `Button`.
   */
  icon?: IconSource;
  /**
   * Whether the button is disabled. A disabled button is greyed out and `onPress` is not called on touch.
   */
  disabled?: boolean;
  /**
   * Label text of the button.
   */
  children: React.ReactNode;
  /**
   * Make the label text uppercased. Note that this won't work if you pass React elements as children.
   */
  uppercase?: boolean;
  /**
   * Accessibility label for the button. This is read by the screen reader when the user taps the button.
   */
  accessibilityLabel?: string;
  /**
   * Function to execute on press.
   */
  onPress?: () => void;
  /**
   * Style of button's inner content.
   * Use this prop to apply custom height and width.
   */
  contentStyle?: StyleProp<ViewStyle>;
  /**
   * React Native style object.
   */
  style?: StyleProp<ViewStyle>;
  /**
   * Style for the button text.
   */
  labelStyle?: StyleProp<TextStyle>;
  /**
   * @optional
   */
  theme: IThemeShape;
  /**
   * Shadow depth, using to ios/web.
   */
  elevation?: number;
  /**
   * Default sizes (small, medium and large).
   */
  size?: ButtonSize;
};

function elevationShadowStyle(elevation: number) {
  return {
    elevation,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0.5 * elevation },
    shadowOpacity: 0.3,
    shadowRadius: 0.8 * elevation,
  };
}

function withSizes(size: ButtonSize | undefined = 'medium', theme: any) {
  const { buttonSize }: { buttonSize: IButtonSize } = theme;
  if (!buttonSize) return {};

  return buttonSize[size];
}

const Button: React.FunctionComponent<Omit<ButtonProps, 'height' | 'width'>> = (
  props: Omit<ButtonProps, 'height' | 'width'>
) => {
  const {
    theme,
    icon,
    colorType,
    mode,
    elevation,
    disabled,
    size: propsSize,
  } = props;

  const themeColors = {
    primary: theme.colors.primary,
    secondary: theme.colors.secondary,
    disabled: theme.colors.disabled,
    text: theme.colors.text,
    default: '#E0E0E0',
  };

  const margin = {
    default: 0,
    reduceFromIcon: -4,
  };

  const color = React.useMemo(() => {
    let colorReturn = themeColors.primary;

    if (colorType) {
      colorReturn = themeColors[colorType];
    }

    if (mode === 'outlined' || (mode === 'text' && colorType === 'default')) {
      colorReturn = themeColors.text;
    }

    if (disabled) {
      colorReturn = themeColors.disabled;
    }

    return colorReturn;
  }, [colorType, mode, disabled]);

  const borderColor = React.useMemo(() => {
    let borderColorReturn = theme.colors.primary;

    if (colorType) {
      borderColorReturn = themeColors[colorType];
    }

    if (disabled) {
      borderColorReturn = themeColors.disabled;
    }

    return borderColorReturn;
  }, [colorType, disabled]);

  const style = React.useMemo(() => {
    return elevation && !disabled ? elevationShadowStyle(elevation) : {};
  }, [elevation, disabled]);

  const labelStyleMargin = React.useMemo(
    () => ({
      marginTop: 0,
      marginRight: 0,
      marginBottom: 0,
      marginLeft: icon ? margin.reduceFromIcon : margin.default,
    }),
    [icon]
  );

  const contentStyleMargin = React.useMemo(
    () => ({
      marginLeft:
        icon && propsSize === 'small' ? margin.reduceFromIcon : margin.default,
    }),
    [icon, propsSize]
  );

  const size = React.useMemo(() => withSizes(propsSize, theme), [
    propsSize,
    theme,
  ]);

  return (
    <PaperButton
      uppercase={true}
      {...props}
      color={color}
      style={{ ...style, borderColor }}
      contentStyle={{ ...contentStyleMargin }}
      labelStyle={{
        ...size,
        ...labelStyleMargin,
        fontWeight: theme.fonts.regular.fontWeight,
      }}
    />
  );
};

export default withTheme(Button);
