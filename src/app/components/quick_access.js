import useOrder from '../hooks/use-order'

export default function QuickAccess ({ quickAccessProducts = [] }) {
  return (
    <div className='p-1  '>
      <h1 className='bg-yellow-500 text-white font-bold py-4 px-8 rounded-lg shadow-lg w-200 h-17'>Acceso rapido</h1>
      <div className='p-3 grid grid-cols-2 gap-4  '>
        {quickAccessProducts.map(product => <ProductAccessEntity key={product?.key} product={product} />)}
      </div>
    </div>
  )
}

function ProductAccessEntity ({ product }) {
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
    <button
      onClick={handleAddProduct}
      className='bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-9 px-4 rounded-md shadow-lg btn'
    >
      {product?.name}
    </button>
  )
}
