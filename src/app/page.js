'use client'

import { products, quickAccessProducts } from '@/utils/const'
import TableProducts from './components/table-products/table-products'
import QuickAccess from './components/quick_access'

export default function Home () {
  return (
    <main className='flex h-full'>
      <section className='border border-red-500'>
        <QuickAccess quickAccessProducts={quickAccessProducts} />
      </section>
      <section className='flex-1 border border-red-500'>
        <TableProducts products={products} />
      </section>
      <section className='border border-red-500'>
        a
      </section>
    </main>
  )
}
