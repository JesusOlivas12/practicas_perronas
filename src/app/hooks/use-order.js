'use client'
import { useContext, useEffect, useState } from 'react'
import { OrderContext } from '../context/order'

export default function useOrder () {
  const { order, setOrder } = useContext(OrderContext)

  const [total, setTotal] = useState(0)

  useEffect(() => {
    const total = order.reduce((prev, curr) => {
      return prev + (curr.price * curr.quantity)
    }, 0)

    setTotal(total)
  }, [order])

  return {
    order,
    setOrder,
    total
  }
}
