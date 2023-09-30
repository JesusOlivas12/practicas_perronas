'use client'
import { useState } from 'react'

export default function AddProduct ({ products = [] }) {
  const [searchProduct, setSearchProduct] = useState(products)

  function handleSearchProduct (e) {
    setSearchProduct(() => {
      const productsFiltered = products.filter(p => p?.name?.toLowerCase().includes(e.target.value.toLowerCase()))

      if (e.target.value === '' || e.target.value == null) {
        return products
      }

      return productsFiltered
    })
  }

  console.log(searchProduct)

  return (
    <div>
      <div className=' max-w-md mx-auto rounded-lg p-4 shadow-lg'>

        <input
          onChange={handleSearchProduct}
          type='text'
          placeholder='Buscar...'
          className='w-full py-2 px-4 rounded-full focus:outline-none focus:ring focus:border-blue-300'
        />
      </div>
      <div className='flex-col flex'>

        {searchProduct.map(product => (

          <span key={product?.key}>
            {product?.name}
          </span>
        ))}

      </div>
    </div>
  )
}
