import React, { FunctionComponent, forwardRef } from "react";
import MaterialBottomNavigationAction, { BottomNavigationActionProps } from "@material-ui/core/BottomNavigationAction";
import { makeStyles, withTheme } from "@material-ui/core/styles";
import { getDefaultTheme } from "./shared";
import { IThemeWeb } from "../Themes";

export interface IBottomNavigationActionProps extends BottomNavigationActionProps {

  /**
   * @optional
   */
  theme?: IThemeWeb | unknown;
}

export const BottomNavigationAction: FunctionComponent<IBottomNavigationActionProps> = forwardRef((
  props: IBottomNavigationActionProps,
  ref: any,
) => {
  const {
    theme: providerTheme,
  } = props;

  const theme = React.useMemo(() => getDefaultTheme(providerTheme), [providerTheme]);

  const useStyles = React.useMemo(() => {

    /**
     * @todo fix(web): TS2571 - Object is of type 'unknown'.
     */
    // @ts-ignore
    const { text } = theme.palette;

    /**
     * @todo fix(web): TS2339 - Property 'typography' does not exist on type 'unknown'.
     */
    const { typography: { caption } } = theme;

    return makeStyles({
      label: {
        "&$selected": {
          fontSize: caption.fontSize,
        },
      },
      selected: {
        color: text.primary,
      },
    });
  }, [theme]);

  const classes = useStyles();

  return <MaterialBottomNavigationAction {...props} classes={classes} ref={ref} />;
});

export default withTheme(BottomNavigationAction);
