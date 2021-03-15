import * as React from 'react'
import * as TestRenderer from 'react-test-renderer'
import { TableContainer } from '../TableContainer'
import { Table } from '../Table'
import { TableBody } from '../TableBody'
import { TableRow } from '../TableRow'
import { TableCell } from './TableCell'

describe('TableCell component', () => {
  describe('rendering', () => {
    test('should match to snapshot - standard TableCellComponent', () => {
      const testRenderer = TestRenderer.create(
        <TableContainer>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>Test header cell</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      )

      expect(testRenderer).toMatchSnapshot('TableCellComponent standard')
    })
  })
})
