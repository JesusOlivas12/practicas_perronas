import { products } from '@/utils/const'
import TableProducts from './components/table-products/table-products'

export default function Home () {
  return (
    <main className='flex h-full'>
      <section className='border border-red-500'>
        a
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
