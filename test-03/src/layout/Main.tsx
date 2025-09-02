import TextField from "../components/Label"

function Main() {
  return (
    <main className="flex-1 grid grid-cols-12 gap-4 py-4">
      <div className="hidden md:grid col-span-4 grid-rows-5 gap-4">
        <section className="hidden md:block row-span-2 bg-purple-200 p-4">
          <TextField text="Hero" />
        </section>
        <aside className="hidden md:block row-span-3 bg-green-300 p-4">
          <TextField text="Sidebar" />
        </aside>
      </div>
      <div className="col-span-12 md:col-span-8 grid grid-rows-3 gap-4">
        <article className="row-span-2 md:col-span-8 bg-yellow-300 p-4">
          <TextField
            text="Main Content"
            subText='if things do not look right, make sure your browser is in "Experimental Mode".'          
          />
        </article>
        <section className="row-span-1 md:col-span-8 bg-gray-400 p-4">
          <TextField text="Extra Content" />
        </section>
      </div>
    </main>
  )
}

export default Main
