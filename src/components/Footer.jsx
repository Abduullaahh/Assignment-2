const Footer = ({ socialMedia = [] }) => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Copyright */}
          <div className="flex flex-col">
            <div className="text-2xl font-bold mb-4">
              <span className="text-indigo-400">Port</span>folio
            </div>
            <p className="text-gray-400 text-sm">© {currentYear} All rights reserved.</p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-4 text-gray-200">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              <a href="#home" className="text-gray-400 hover:text-indigo-400 transition-colors duration-200">
                Home
              </a>
              <a href="#about" className="text-gray-400 hover:text-indigo-400 transition-colors duration-200">
                About
              </a>
              <a href="#projects" className="text-gray-400 hover:text-indigo-400 transition-colors duration-200">
                Projects
              </a>
              <a href="#contact" className="text-gray-400 hover:text-indigo-400 transition-colors duration-200">
                Contact
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-4 text-gray-200">Connect</h3>
            <div className="flex flex-wrap gap-4">
              {socialMedia.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-indigo-400 transition-colors duration-200 flex items-center"
                >
                  <span>{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>Abdullah Tahir</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer