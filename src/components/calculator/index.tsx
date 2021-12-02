import React, { memo, useState } from 'react'
import './calculator.styles.css'
import { Numbers } from './numbers'
import { Display } from './display'
import { Operations } from './operations'

enum Ikey {
  firstNumber = 'firstNumber',
  secondNumber = 'secondNumber',
}

export const Calculator: React.FC = memo(() => {
  const [state, setState] = useState({
    firstNumber: '',
    secondNumber: '',
    operation: '',
    result: 0,
  })
  const [key, setKey] = useState<Ikey>(Ikey.firstNumber)

  const updateNumber = (num: string) => {
    setState({
      ...state,
      [key]: state[key] + num,
    })
  }

  const setOperation = (op: string) => {
    if (state.firstNumber) {
      setKey(Ikey.secondNumber)
      setState({
        ...state,
        operation: op,
      })
    }

    if (op === '=') {
      calculateResult()
    }
  }

  const calculateResult = () => {
    let result = 0
    const firstNumber = parseInt(state.firstNumber)
    const secondNumber = parseInt(state.secondNumber)
    switch (state.operation) {
      case '+':
        result = firstNumber + secondNumber
        break
      case '-':
        result = firstNumber - secondNumber
        break
      case 'x':
        result = firstNumber * secondNumber
        break
      case '/':
        result = firstNumber / secondNumber
        break
      default:
        result = 0
    }

    setState({
      ...state,
      result,
    })
  }

  console.log(state)

  return (
    <div className='calculator m-auto mt-4'>
      <div className='container'>
        <div className='col col-12'>
          <Display result={state.result} />
        </div>
        <div className='row'>
          <div className='col-8'>
            <div className='container p-0'>
              <div className='row'>
                <Numbers updateNumber={updateNumber} />
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
            <Operations setOperation={setOperation} />
          </div>
        </div>
      </div>
    </div>
  )
})
