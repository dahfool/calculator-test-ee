import React, { memo } from 'react'

interface Props {
  result: string
}

export const Display: React.FC<Props> = memo(({ result }) => {
  return (
    <input
      className='form-control mb-3 calculator-input'
      type='text'
      value={result}
      aria-label='readonly input example'
      readOnly
      data-testid='result'
    />
  )
})
