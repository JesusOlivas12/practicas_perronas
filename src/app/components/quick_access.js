import useOrder from '../hooks/use-order'

export default function QuickAccess ({ quickAccessProducts = [] }) {
  return (
    <div className='p-1  '>
      <h1 className='bg-[#CACF85] text-black font-bold py-4 px-8 rounded-lg shadow-lg w-200 h-17 text-center'>Acceso rapido</h1>
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
      className='bg-[#8CBA80] hover:bg-[#c1bdb366] text-black font-bold py-9 px-4 rounded-md shadow-lg btn'
    >
      {product?.name}
    </button>
  )
}
