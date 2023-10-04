

'use client'

import useOrder from '@/app/hooks/use-order'
import Link from 'next/link'

export default function F() {
  const { total } = useOrder()
  return (
    <main className='flex flex-col items-start justify-end h-screen'>
      <div className='mt-auto mb-4'>
        <span className=''>
          Total:
          <span className='font-bold'>
            {total.toLocaleString('es-MX', {
              style: 'currency',
              currency: 'MXN'
            })}
          </span>
        </span>
        <div className='flex gap-10 mt-4'>
          <Link href={'/'} className='bg-[#8CBA80] hover:bg-[#c1bdb366] text-black font-bold py-6 px-4 rounded-md shadow-lg btn'>
          Cancelar Pedido
          </Link>
          <Link href={'/'} className=' bg-[#8CBA80] hover:bg-[#c1bdb366] text-black font-bold py-6 px-4 rounded-md shadow-lg btn '>
            Finalizar Compra
          </Link>
        </div>
      </div>
    </main>
  )
}

  