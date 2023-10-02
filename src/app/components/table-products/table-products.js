'use client'
import useOrder from '@/app/hooks/use-order'
import ProductEntity from './product-entity'

export default function TableProducts () {
  const { order } = useOrder()

  return (
    <table className='w-full min-w-full overflow-hidden bg-white rounded-lg shadow-md'>
      <thead className='bg-[#4D5382] text-white '>
        <tr>
          <th className='border border-amber-500'>
            Lista.
          </th>
          <th className='border border-amber-500'>
            Productos.
          </th>
          <th className='border border-amber-500'>
            Precio.
          </th>
          <th className='border border-amber-500'>
            Cantidad.
          </th>
          <th className='border border-amber-500'>
            Total.
          </th>
        </tr>
      </thead>
      <tbody>
        {order.map((product, i) => <ProductEntity key={product?.key} i={i} product={product} />)}
      </tbody>
    </table>
  )
}
