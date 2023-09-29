import useOrder from '@/app/hooks/use-order'
import ProductEntity from './product-entity'

export default function TableProducts () {
  const { order } = useOrder()

  return (
    <table>
      <thead>
        <tr>
          <th>
            Lista.
          </th>
          <th>
            Productos.
          </th>
          <th>
            Precio.
          </th>
          <th>
            Cantidad.
          </th>
          <th>
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
