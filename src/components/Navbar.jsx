import { useState, useEffect } from "react"
import { Sun, Moon, Menu, X } from "lucide-react"

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const baseStyles = darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"
  const linkStyles = `transition-colors duration-200 ${
    darkMode ? "hover:bg-gray-800 hover:text-indigo-400" : "hover:bg-gray-100 hover:text-indigo-600"
  }`
  const toggleStyles = `p-2 rounded-full transition-colors duration-200 ${
    darkMode ? "bg-gray-700 hover:bg-gray-600 text-yellow-300" : "bg-gray-100 hover:bg-gray-200 text-indigo-600"
  }`

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${baseStyles} ${scrolled ? "shadow-lg py-2" : "py-4"}`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="font-extrabold text-xl">
            <span className="text-indigo-600">Port</span>folio
          </a>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center">
            {["Home", "About", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`px-4 py-2 rounded-md font-medium text-sm ${linkStyles}`}
              >
                {item}
              </a>
            ))}

            {/* Dark mode toggle */}
            <button onClick={toggleDarkMode} className={`ml-4 ${toggleStyles}`} aria-label="Toggle theme">
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center space-x-3">
            <button onClick={toggleDarkMode} className={toggleStyles} aria-label="Toggle theme">
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button onClick={() => setMenuOpen(!menuOpen)} className={`p-2 rounded-md ${linkStyles}`}>
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${ menuOpen ? "max-h-60 border-t" : "max-h-0" } ${darkMode ? "border-gray-700" : "border-gray-200"}`}>
        <div className="px-2 py-1">
          {["Home", "About", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`block px-4 py-3 rounded-md font-medium ${linkStyles}`}
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar