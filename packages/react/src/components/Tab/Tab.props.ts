import React from 'react'

export interface TabProps {

  /**
   * Optional ID for testing
   */
  testID?: string;

  /**
   * All TabItems component
   */
  children: React.ReactNode

  /**
   * Define icon position relative by text
   */
  iconPosition?: 'left' | 'top'

  /**
   * Define tabs aligns
   */
  itemsPosition?: 'left' | 'center' | 'right'

  /**
   * Define height of container
   */
  size?: 'normal' | 'large'
}
