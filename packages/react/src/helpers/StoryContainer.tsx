import React from 'react'
import { createUseStyles } from 'react-jss'

interface StoryContainerProps {
  children: React.ReactNode
}

const styles = createUseStyles({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 16,
    maxWidth: 600,
    flexDirection: 'row'
  }
})

const StoryContainer = ({ children }: StoryContainerProps): JSX.Element => {
  const classes = styles()

  return (
    <div className={classes.container}>
      {children}
    </div>
  )
}

export default StoryContainer
