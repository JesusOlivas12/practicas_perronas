import useOrder from '../hooks/use-order'

export default function QuickAccess ({ quickAccessProducts = [] }) {
  return (
    <div className='p-2'>
      <h1 className='text-center'>Acceso rapido</h1>
      <div className='grid grid-cols-2 gap-3 '>
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
      className='w-20 h-20 bg-red-400 rounded-md'
    >
      {product?.name}
    </button>
  )
}
