import React, { memo } from 'react'

const operations = ['x', '-', '+', '/', '=']

export const Operations: React.FC = memo(() => {
  return (
    <>
      {operations.map((operation, i) => (
        <div className='col' key={i}>
          <button className='btn btn-secondary btn-lg btn-number mb-3'>
            {operation}
          </button>
        </div>
      ))}
    </>
  )
})
