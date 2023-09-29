import Counter from "./components/counter";
import TableProducts from "./components/table-products";

const products = [
  {
    key: 1,
    name: 'Taco de asada',
    price: 20,
    quantity: '',
  },
  {
    key: 1,
    name: 'Taco de pastor',
    price: 20,
    quantity: '',
  },
  {
    key: 1,
    name: 'Taco de adobada',
    price: 20,
    quantity: '',
  },
  {
    key: 1,
    name: 'Taco de piña',
    price: 20,
    quantity:'',
  },
  {
    key: 1,
    name: 'Taco de rata',
    price: 5,
    quantity:'',
    
  },
]

export default function Home() {
  return (
    <main className="flex h-full">
      <section className="border border-red-500">
        <Counter/>
      </section>
      <section className="flex-1 border border-red-500">
        <TableProducts products={products}/>
      </section>
      <section className="border border-red-500">
        a
      </section>
    </main>
  )
}
