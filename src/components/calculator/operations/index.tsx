import React, { memo } from 'react'

const operations = ['x', '-', '+', '/', '=']

interface Props {
  setOperation: (x: string) => void
}

export const Operations: React.FC<Props> = memo(({ setOperation }) => {
  return (
    <>
      {operations.map((operation, i) => (
        <div className='col' key={i}>
          <button
            className='btn btn-secondary btn-lg btn-number mb-3'
            onClick={() => setOperation(operation)}
          >
            {operation}
          </button>
        </div>
      ))}
    </>
  )
})
