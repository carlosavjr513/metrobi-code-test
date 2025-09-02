import { useState } from "react"
import { Menu, X as CloseMenu } from "lucide-react"
import TextField from "../components/Label"

function Header() {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <>
      <header className="bg-cyan-400 p-4 flex items-center justify-between">
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Open side menu"
        >
          <Menu size={28} color="white" />
        </button>

        <h1 className="text-center flex-1">
          <TextField text="Header" />
        </h1>
      </header>

      {open && (
        <aside className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-50 p-4 md:hidden">
          <button
            className="mb-4"
            onClick={() => setOpen(false)}
            aria-label="Close side menu"
          >
            <CloseMenu size={28} />
          </button>
          <div className="h-[100%] space-y-4">
            <div className="h-[33%] bg-purple-200 p-4">
              <TextField text="Hero" />
            </div>
            <div className="h-[67%] bg-green-300 p-4">
              <TextField text="Sidebar" />
            </div>
          </div>
        </aside>
      )}
    </>
  )
}

export default Header
