import React, { memo } from 'react'

export const Display: React.FC = memo(() => {
  return (
    <input
      className='form-control mb-3 calculator-input'
      type='text'
      value='Readonly input here...'
      aria-label='readonly input example'
      readOnly
    />
  )
})
