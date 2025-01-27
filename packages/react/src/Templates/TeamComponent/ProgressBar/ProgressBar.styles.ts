/* eslint-disable max-len */
import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'

type typeRuler = 'container'
| 'box'
| 'boxProgress'
| 'boxChip'
| 'footer'

interface StyleProps {
  point: number
}
const styles = createUseStyles<typeRuler, StyleProps, Theme>((theme: Theme) => ({

  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '276px',
    width: '100%',
    fontFamily: `"${theme.typography.body.regular.fontFamily}"`,
    // border: '1px solid green',
    gap: 8,
    height: 30,
    transition: 'ease-in-out .6s'
  },
  box: {
    display: 'flex',
    justifyContent: 'start',
    position: 'relative',
    alignItems: 'center',
    backgroundColor: theme.color.lowEmphasis,
    minHeight: 8,
    height: 8,
    width: '100%',
    borderRadius: 4,
    // boder: '1px solid red',
    transition: 'ease-in-out .6s'

  },
  boxProgress: {
    display: 'flex',
    width: ({ point }) => (point ? `${(point + 5)}%` : '0%'),
    height: '100%',
    backgroundColor: theme.color.success,
    boxSizing: 'border-box',
    padding: 2,
    borderRadius: 4,
    fontSize: 10,
    // border: '1px solid red',
    color: theme.color.onSuccess,
    transition: 'ease-in-out .6s'
  },
  boxChip: {
    display: 'flex',
    position: 'absolute',
    right: '-5px',
    left: ({ point }) => (point ? `${Math.min(Math.max(point, 0), 100) - 10}%` : '0%'),
    top: '-8px',
    width: 56,
    height: 24,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.color.success,
    transition: 'ease-in-out .6s'
  },
  footer: {
    display: 'flex',
    width: '100%',
    fontSize: 10,
    justifyContent: 'space-between',
    color: theme.color.highlight
  }
}))

export default styles
