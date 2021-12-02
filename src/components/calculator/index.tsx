import React, { memo, useState } from 'react'
import './calculator.styles.css'
import { Numbers } from './numbers'
import { Display } from './display'
import { Operations } from './operations'

enum Ikey {
  firstNumber = 'firstNumber',
  secondNumber = 'secondNumber',
}

const initialState = {
  firstNumber: '',
  secondNumber: '',
  operation: '',
  result: '',
}

export const Calculator: React.FC = memo(() => {
  const [state, setState] = useState(initialState)
  const [key, setKey] = useState<Ikey>(Ikey.firstNumber)

  const updateNumber = (num: string) => {
    const val = state[key] + num
    setState({
      ...state,
      [key]: val,
      result: val,
    })
  }

  const backspace = () => {
    const val = state[key].slice(0, -1)
    if (state[key]) {
      setState({
        ...state,
        [key]: val,
        result: val,
      })
    }
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

  const clear = () => {
    setState({
      ...initialState,
    })
    setKey(Ikey.firstNumber)
  }

  const calculateResult = () => {
    let result = 0
    const firstNumber = parseFloat(state.firstNumber)
    const secondNumber = parseFloat(state.secondNumber)
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
      ...initialState,
      result: result.toString(),
    })
    setKey(Ikey.firstNumber)
  }

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
                    onClick={backspace}
                  >
                    &larr;
                  </button>
                </div>
                <div className='col pe-0'>
                  <button
                    className='btn btn-secondary btn-lg w-100 mb-3'
                    onClick={clear}
                  >
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
