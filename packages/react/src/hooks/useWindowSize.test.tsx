import React from 'react'
import {
  act, fireEvent, render, screen
} from '@testing-library/react'
// import { renderHook } from '@testing-library/react-hooks'
import useWindowSize from './useWindowSize'

const TestSizeComponent = (): JSX.Element => {
  const { width, height } = useWindowSize()
  return <div>{`Width: ${width}, Height: ${height}`}</div>
}

jest.useFakeTimers('legacy')

describe('hooks/useWindowSize', () => {
  beforeEach(() => {
    global.innerWidth = 768
    global.innerHeight = 664
    fireEvent(window, new Event('resize'))
  })

  it('should read initial innerWidth and innerHeight values from window', () => {
    // const { result } = renderHook(() => useWindowSize())

    render(<TestSizeComponent />)

    expect(screen.getByText(/Width:/)).toHaveTextContent(`Width: ${window.innerWidth}`)
    expect(screen.getByText(/Height:/)).toHaveTextContent(`Height: ${window.innerHeight}`)

    // Simule a mudança do tamanho da janela

    // act(() => {
    //   window.innerWidth = 500
    //   window.innerHeight = 300
    //   window.dispatchEvent(new Event('resize'))
    // })
    // Verifique se os valores foram atualizados
    // expect(screen.getByText(/Width:/)).toHaveTextContent('Width: 500')
    // expect(screen.getByText(/Height:/)).toHaveTextContent('Height: 300')

    // expect(result.current.width).toEqual(768)
    // expect(result.current.height).toEqual(664)
    // expect(setTimeout).toHaveBeenCalledTimes(1)
  })

  it('should update innerWidth and innerHeight values when window resizes', () => {
    // const { result } = renderHook(() => useWindowSize())

    // expect(result.current.width).toEqual(768)
    // expect(result.current.height).toEqual(664)
    render(<TestSizeComponent />)
    act(() => {
      global.innerWidth = 320
      global.innerHeight = 664
      fireEvent(window, new Event('resize'))
    })

    jest.advanceTimersByTime(500)

    // expect(result.current.width).toBe(320)
    // expect(result.current.height).toBe(664)

    expect(screen.getByText(/Width:/)).toHaveTextContent(`Width: ${window.innerWidth}`)
    expect(screen.getByText(/Height:/)).toHaveTextContent(`Height: ${window.innerHeight}`)
    expect(setTimeout).toHaveBeenCalledTimes(1)
  })
})
