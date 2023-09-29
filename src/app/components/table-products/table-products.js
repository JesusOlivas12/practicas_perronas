import ProductEntity from './product-entity'

export default function TableProducts ({ products = [] }) {
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
        {products.map((product, i) => <ProductEntity key={product?.key} i={i} product={product} />)}
      </tbody>
    </table>
  )
}
