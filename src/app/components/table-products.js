import Counter from "./counter";
export default function TableProducts ({products = []}) {
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
                {products.map((product,i) => (
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
                            <Counter setCounter={product?.quantity} /> : {product?.quantity}
                        
                        </td>
                        <td>
                            
                            {product?.price*<Counter/>}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )

}