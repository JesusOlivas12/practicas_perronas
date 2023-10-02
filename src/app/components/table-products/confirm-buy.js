'use client'

import useOrder from '@/app/hooks/use-order'

export default function Buy () {
  const { total } = useOrder()

  return (
    <div className='h-[15%]'>
      <span className=''>
        Total:
        <span className='font-bold'>
          {total.toLocaleString('es-MX', {
            style: 'currency',
            currency: 'MXN'
          })}
        </span>
      </span>
      <div className='flex gap-10'>
        <button className='bg-[#8CBA80] hover:bg-[#c1bdb366] text-black font-bold py-9 px-4 rounded-md shadow-lg btn'>
          Domicilio
        </button>
        <button className='bg-[#8CBA80] hover:bg-[#c1bdb366] text-black font-bold py-9 px-4 rounded-md shadow-lg btn'>
          Comprar
        </button>
      </div>
    </div>
  )
}
