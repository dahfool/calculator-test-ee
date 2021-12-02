import React, { memo } from 'react'

interface Props {
  result: number
}

export const Display: React.FC<Props> = memo(({ result }) => {
  return (
    <input
      className='form-control mb-3 calculator-input'
      type='number'
      value={result}
      aria-label='readonly input example'
      readOnly
    />
  )
})
