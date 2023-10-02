'use client'

import { useState } from 'react'

export default function Counter ({ onChange }) {
  const [counter, setCounter] = useState(1)

  function increment () {
    setCounter(prev => {
      const newCounter = prev + 1
      onChange && onChange(newCounter)

      return newCounter
    })
  }

  function decrement () {
    setCounter(prev => {
      if (prev === 0) return prev
      const newCounter = prev - 1

      onChange && onChange(newCounter)

      return newCounter
    })
  }

  return (
    <div className='flex items-center justify-center gap-3'>
      <button onClick={decrement} className='px-4 py-2 font-bold text-white transition duration-300 ease-in-out bg-red-500 rounded-full hover:bg-red-600'>
        -
      </button>
      <span>{counter}</span>
      <button onClick={increment} className='px-4 py-2 font-bold text-white transition duration-300 ease-in-out bg-green-500 rounded-full hover:bg-green-600'>
        +
      </button>
    </div>
  )
}
