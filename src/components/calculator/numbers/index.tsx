import React, { memo } from 'react'

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '.']

export const Numbers: React.FC = memo(() => {
  return (
    <>
      {numbers.map((number) => (
        <div className='col col-4' key={number}>
          <button className='btn btn-secondary btn-lg btn-number mb-3'>
            {number}
          </button>
        </div>
      ))}
    </>
  )
})
