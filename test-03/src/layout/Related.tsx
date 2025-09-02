import TextField from "../components/Label"

function Related() {
  return (
    <section className="grid grid-cols-12 gap-4 pb-4">
      <div className="col-span-12 md:col-span-8 bg-green-500 p-4">
        <TextField text="Related Images" />
      </div>
      <div className="col-span-12 md:col-span-4 bg-pink-200 p-4">
        <TextField text="Related Posts" />
      </div>
    </section>
  )
}

export default Related