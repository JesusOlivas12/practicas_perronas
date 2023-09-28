export default function TableProducts ({products = []}) {
    return (
        <table>
            <thead>
                <tr>
                    <th>
                        Lista
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
                        Precio/Uni.
                    </th>
                </tr>
            </thead>
            <tbody>
                {products.map((product,i) => (
                    <tr key={product.key}>
                        <td>
                            {i + 1}
                        </td>
                        <td>
                            {product?.name}
                        </td>
                        <td>
                            {product?.price*product?.quantity} 
                        </td>
                        <td>
                            {product?.quantity} 
                        </td>
                        <td>
                            {product?.price} 
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )

}