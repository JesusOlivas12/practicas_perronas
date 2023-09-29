'use client'

import { useEffect, useState } from 'react'

export default function Counter ({ onChange }) {
  const [counter, setCounter] = useState(1)

  function increment () {
    setCounter(prev => prev + 1)
  }

  function decrement () {
    setCounter(prev => {
      if (prev === 0) return prev
      return prev - 1
    })
  }

  useEffect(() => {
    onChange && onChange(counter)
  }, [counter, onChange])

  return (
    <div className='flex items-center justify-center gap-3'>
      <button onClick={decrement} className='w-8 h-8 bg-red-500 rounded-md'>
        -
      </button>
      <span>{counter}</span>
      <button onClick={increment} className='w-8 h-8 bg-blue-600 rounded-md'>
        +
      </button>
    </div>
  )
}
