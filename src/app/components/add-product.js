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
      <div className='border h-100 p-3'>

        <input
          onChange={handleSearchProduct}
          type='text'
          placeholder='Buscar...'
          className='w-full h-full pl-2 bg-black opacity-60
        outline-none rounded-md italic font-style: italic;
        ;color text-slate-200'
        />
      </div>
      <div className='flex-col flex border-l-pink-800 border   '>

        {searchProduct.map(product => (

          <span key={product?.key}>
            {product?.name}
          </span>
        ))}

      </div>
    </div>
  )
}
