import Counter from "./components/counter";

export default function Home() {
  return (
    <main className="grid grid-cols-3 h-full">
      <section className="border border-red-500">
        <Counter/>
      </section>
      <section className="border border-red-500">
        a
        <Counter/>
      </section>
      <section className="border border-red-500">
        a
      </section>
    </main>
  )
}
