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
      <button onClick={decrement} className='bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out'>
        -
      </button>
      <span>{counter}</span>
      <button onClick={increment} className='bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out'>
        +
      </button>
    </div>
  )
}
