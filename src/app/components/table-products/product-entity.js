'use client'

import { useState } from 'react'
import Counter from '../counter'

export default function ProductEntity ({ product, i }) {
  const [quantity, setQuantity] = useState(0)

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
        <Counter onChange={setQuantity} />
      </td>
      <td>
        {product?.price * quantity}
      </td>
    </tr>
  )
}
