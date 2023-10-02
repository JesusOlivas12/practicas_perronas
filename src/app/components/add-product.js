import React, { useState } from 'react';
import useOrder from '../hooks/use-order';

export default function AddProduct({ products = [] }) {
  const [searchProduct, setSearchProduct] = useState(products);

  function handleSearchProduct(e) {
    const searchTerm = e.target.value.toLowerCase();
    const productsFiltered = products.filter(
      (p) => p?.name?.toLowerCase().includes(searchTerm)
    );

    setSearchProduct(productsFiltered);
  }

  return (
    <div>
      <div className='max-w-md mx-auto rounded-lg p-4 shadow-lg'>
        <input
          onChange={handleSearchProduct}
          type='text'
          placeholder='Buscar...'
          className='w-full py-2 px-4 rounded-full focus:outline-none focus:ring focus:border-blue-300'
        />
      </div>
      <div className='flex-col flex border-l-pink-800 border'>
        {searchProduct.length >0 ? (
          searchProduct.map((product) => (
            <ProductEntity key={product?.key} product={product} />
          ))
        ) : (
          
          <p>No se encontraron productos.</p>
        )}
      </div>
    </div>
  );
}

function ProductEntity ({ product = {} }) {
  const { setOrder } = useOrder()

  function handleAddProduct () {
    setOrder(prev => {
      const copy = [...prev]

      const index = copy.findIndex(p => p?.id === product?.id)

      if (index === -1) {
        copy.push(product)
      }

      return copy
    })
  }

  return (
    <div className=" flex justify-center items-center p-1 h-full ">
      <button
        className="bg-[#518988]  font-bold py-4 px-4 rounded-lg w-60 h-15 text-center shadow-md border border-[#514663] opacity-55"
        onClick={handleAddProduct}
      >
        {product?.name}
      </button>
    </div>
  )
}

