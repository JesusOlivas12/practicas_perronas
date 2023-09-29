import { useContext } from 'react'
import { OrderContext } from '../context/order'

export default function useOrder () {
  const { order, setOrder } = useContext(OrderContext)

  return {
    order,
    setOrder
  }
}
