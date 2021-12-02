import React, { memo } from 'react'
import './calculator.styles.css'
import { Numbers } from './numbers'
import { Display } from './display'
import { Operations } from './operations'

export const Calculator: React.FC = memo(() => {
  return (
    <div className='calculator m-auto mt-4'>
      <div className='container'>
        <div className='col col-12'>
          <Display />
        </div>
        <div className='row'>
          <div className='col-8'>
            <div className='container p-0'>
              <div className='row'>
                <Numbers />
                <div className='col col-4'>
                  <button
                    className='btn btn-secondary btn-lg btn-number mb-3'
                    data-testid='delete'
                  >
                    &larr;
                  </button>
                </div>
                <div className='col pe-0'>
                  <button className='btn btn-secondary btn-lg w-100 mb-3'>
                    clear
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='col-4 w-auto pe-0'>
            <Operations />
          </div>
        </div>
      </div>
    </div>
  )
})
