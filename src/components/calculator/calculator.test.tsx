import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { Calculator } from './'

const setup = () => {
  const utils = render(<Calculator />)

  return {
    ...utils,
  }
}

describe('Calculator', () => {
  describe('Calculate', () => {
    it('Should add two numbers', () => {
      const { getByText, getByTestId } = setup()
      fireEvent.click(getByText(1))
      fireEvent.click(getByText('+'))
      fireEvent.click(getByText(2))
      fireEvent.click(getByText('='))
      expect(getByTestId('result')).toHaveValue('3')
    })

    it('Should subtract two numbers', () => {
      const { getByText, getByTestId } = setup()
      fireEvent.click(getByText(5))
      fireEvent.click(getByText('-'))
      fireEvent.click(getByText(3))
      fireEvent.click(getByText('='))
      expect(getByTestId('result')).toHaveValue('2')
    })

    it('Should multiply two numbers', () => {
      const { getByText, getByTestId } = setup()
      fireEvent.click(getByText(4))
      fireEvent.click(getByText('x'))
      fireEvent.click(getByText(2))
      fireEvent.click(getByText('='))
      expect(getByTestId('result')).toHaveValue('8')
    })

    it('Should divide two numbers', () => {
      const { getByText, getByTestId } = setup()
      fireEvent.click(getByText(8))
      fireEvent.click(getByText('/'))
      fireEvent.click(getByText(4))
      fireEvent.click(getByText('='))

      expect(getByTestId('result')).toHaveValue('2')
    })
  })

  describe('Operations', () => {
    it('Should clear result', () => {
      const { getByText, getByTestId } = setup()
      fireEvent.click(getByText(1))
      fireEvent.click(getByText('+'))
      fireEvent.click(getByText(2))
      fireEvent.click(getByText('='))
      fireEvent.click(getByText('clear'))
      expect(getByTestId('result')).toHaveValue('')
    })

    it('Should delete last character', () => {
      const { getByText, getByTestId } = setup()
      fireEvent.click(getByText(1))
      fireEvent.click(getByText(2))
      fireEvent.click(getByTestId('delete'))
      expect(getByTestId('result')).toHaveValue('1')
    })
  })
})
