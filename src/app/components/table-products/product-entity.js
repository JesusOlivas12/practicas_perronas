'use client'

import { useState } from 'react'
import Counter from '../counter'
import useOrder from '@/app/hooks/use-order'

export default function ProductEntity ({ product, i }) {
  const [quantity, setQuantity] = useState(1)
  const { setOrder } = useOrder()

  function handleSetQuantity (quantity) {
    if (quantity === 0) {
      setOrder(products => {
        const newProducts = [...products]

        newProducts.splice(i, 1)

        return newProducts
      })
    }
    setQuantity(quantity)
  }

  return (
    <tr key={product.key}>
      <td>
        {i + 1}
      </td>
      <td>
        {product?.name}
      </td>
      <td>
        {product?.price}
      </td>
      <td>
        <Counter onChange={handleSetQuantity} />
      </td>
      <td>
        {product?.price * quantity}
      </td>
    </tr>
  )
}
