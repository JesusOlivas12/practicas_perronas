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
      return
    }
    setOrder(products => {
      const newProducts = [...products]

      newProducts[i].quantity = quantity

      return newProducts
    })
    setQuantity(quantity)
  }

  return (
    <tr key={product.key} className='decoration-clone bg-gradient-to-b from-[#CACF85] to-[#658E9C] text-white  '>
      <td className='text-center border border-amber-500'>
        {i + 1}
      </td>
      <td className='text-center border border-amber-500'>
        {product?.name}
      </td>
      <td className='text-center border border-amber-500'>
        {product?.price.toLocaleString('es-MX', {
          style: 'currency',
          currency: 'MXN'
        })}
      </td>
      <td className='py-2 text-center border border-amber-500'>
        <Counter onChange={handleSetQuantity} />
      </td>
      <td className='text-center border border-amber-500'>
        {(product?.price * quantity).toLocaleString('es-MX', {
          style: 'currency',
          currency: 'MXN'
        })}
      </td>
    </tr>
  )
}
