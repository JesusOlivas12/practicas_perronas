'use client'

import { useState } from "react"

export default function Counter(){
    const [counter, setCounter] = useState(0)
        
    function increment(){
        setCounter(prev => prev + 1)
    }

    function decrement(){
        setCounter(prev => {
            if (prev === 0) return prev
            return prev - 1
        } )
    }

    return (
        <div className="flex justify-center items-center gap-3">
            <button onClick={decrement} className="bg-red-500 w-8 h-8 rounded-md">
                -
            </button>
            <span>{counter}</span>
            <button onClick={increment} className="bg-blue-600 w-8 h-8 rounded-md">
                +
            </button>
        </div>

    )
}
