'use client'

import { products, quickAccessProducts } from '@/utils/const'
import TableProducts from './components/table-products/table-products'
import QuickAccess from './components/quick_access'
import AddProduct from './components/add-product'
import Buy from './components/table-products/confirm-buy'

export default function Home () {
  return (
    <main className='flex h-full bg-emerald-200 '>
      <section className='border border-red-500'>
        <QuickAccess quickAccessProducts={quickAccessProducts} />
      </section>
      <section className='flex-1 border border-red-500'>
        <TableProducts products={products} />
      </section>
      <section className='border border-red-500 h-full flex flex-col overflow-hidden'>
        <AddProduct products={products} />
        <Buy />
      </section>
    </main>
  )
}
