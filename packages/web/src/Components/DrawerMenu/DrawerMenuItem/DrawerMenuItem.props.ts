import * as React from 'react'
import { IconName } from '@naturacosmeticos/natds-icons'
import { IThemeWeb } from '../../../Themes'

export interface IDrawerMenuItemProps {
  badge?: string;
  icon?: IconName;
  list?: Array<unknown>;
  name?: string;
  onSelect?: (event: React.SyntheticEvent, name?: string) => void;
  onToggle?: (event: React.SyntheticEvent, state: boolean, name?: string) => void;
  opened?: boolean;
  section?: string;
  selected?: boolean;
  href?: string

  /**
   * @deprecated `theme` property is deprecated since 0.22
   *
   * Please wrap your application with `<Provider>` component.
   */
  theme?: IThemeWeb | unknown
}
