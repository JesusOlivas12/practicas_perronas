import Counter from "./components/counter";

export default function Home() {
  return (
    <main className=" flex h-full">
      <section className="border border-red-500">
        <Counter/>
      </section>
      <section className="flex-1 border border-red-500">
        a
        <Counter/>
      </section>
      <section className="border border-red-500">
        a
      </section>
    </main>
  )
}
