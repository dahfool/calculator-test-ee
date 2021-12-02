import React, { memo } from 'react'

const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.']

interface Props {
  updateNumber: (x: string) => void
}

export const Numbers: React.FC<Props> = memo(({ updateNumber }) => {
  return (
    <>
      {numbers.map((number) => (
        <div className='col col-4' key={number}>
          <button
            className='btn btn-secondary btn-lg btn-number mb-3'
            onClick={() => updateNumber(number)}
          >
            {number}
          </button>
        </div>
      ))}
    </>
  )
})
