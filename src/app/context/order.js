'use client'
const { createContext, useState } = require('react')

export const OrderContext = createContext()

export default function OrderContextProvider ({ children }) {
  const [order, setOrder] = useState([])

  return (
    <OrderContext.Provider value={{ order, setOrder }}>
      {children}
    </OrderContext.Provider>
  )
}
