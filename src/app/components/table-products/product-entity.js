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
      <td className='border border-amber-500 text-center'>
        {i + 1}
      </td>
      <td className='border border-amber-500 text-center'>
        {product?.name}
      </td>
      <td className='border border-amber-500 text-center'>
        {product?.price}
      </td>
      <td className='border border-amber-500 text-center py-2'>
        <Counter onChange={handleSetQuantity} />
      </td>
      <td className='border border-amber-500 text-center'>
        {product?.price * quantity}
      </td>
    </tr>
  )
}
