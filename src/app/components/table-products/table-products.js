import useOrder from '@/app/hooks/use-order'
import ProductEntity from './product-entity'

export default function TableProducts () {
  const { order } = useOrder()

  return (
    <table className='w-full min-w-full bg-white shadow-md rounded-lg overflow-hidden'>
      <thead className='bg-emerald-500 text-white '>
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
