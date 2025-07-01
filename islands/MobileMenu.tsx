// islands/MobileMenu.tsx
import { useState } from "preact/hooks";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile menu button */}
      <button
        class="md:hidden text-gray-600 hover:text-gray-900 relative z-50"
        onClick={toggleMenu}
        style={{ padding: '8px' }}
        aria-label="Toggle mobile menu"
        aria-expanded={isOpen}
      >
        <div style={{ width: '24px', height: '24px', position: 'relative' }}>
          <span
            style={{
              position: 'absolute',
              left: 0,
              width: '24px',
              height: '2px',
              backgroundColor: 'currentColor',
              transition: 'all 0.3s ease',
              transformOrigin: 'center',
              top: isOpen ? '11px' : '4px',
              transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)'
            }}
          ></span>
          <span
            style={{
              position: 'absolute',
              left: 0,
              width: '24px',
              height: '2px',
              backgroundColor: 'currentColor',
              transition: 'all 0.3s ease',
              top: '11px',
              opacity: isOpen ? 0 : 1
            }}
          ></span>
          <span
            style={{
              position: 'absolute',
              left: 0,
              width: '24px',
              height: '2px',
              backgroundColor: 'currentColor',
              transition: 'all 0.3s ease',
              transformOrigin: 'center',
              top: isOpen ? '11px' : '18px',
              transform: isOpen ? 'rotate(-45deg)' : 'rotate(0deg)'
            }}
          ></span>
        </div>
      </button>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div class="fixed inset-0 bg-white bg-opacity-95 z-40 md:hidden">
          {/* Menu content */}
          <div class="relative w-full h-full flex flex-col px-6">
            {/* Header section */}
            <div class="flex justify-between items-center pt-6 pb-8">
              {/* Brand/Logo */}
              <div class="bg-white bg-opacity-80 px-4 py-2 rounded-lg shadow-md">
                <h2 class="text-lg font-bold text-gray-900">Mohammed Sebbagh</h2>
              </div>
              
              {/* Close button */}
              <button
                onClick={closeMenu}
                class="text-gray-700 hover:text-gray-900 text-3xl w-10 h-10 flex items-center justify-center bg-white bg-opacity-80 rounded-full shadow-md z-50"
                aria-label="Close mobile menu"
              >
                ×
              </button>
            </div>
            
            {/* Menu items */}
            <div class="flex flex-col space-y-4 max-w-sm mx-auto w-full">
              <a
                href="/"
                class="text-2xl font-semibold text-blue-600 hover:text-blue-700 py-4 px-6 bg-white bg-opacity-70 rounded-xl shadow-lg text-center transition-colors"
                onClick={closeMenu}
              >
                Home
              </a>
              <a
                href="/philosophy"
                class="text-xl font-medium text-gray-700 hover:text-blue-600 py-4 px-6 bg-white bg-opacity-70 rounded-xl shadow-lg text-center transition-colors"
                onClick={closeMenu}
              >
                Teaching Philosophy
              </a>
              <a
                href="/resume"
                class="text-xl font-medium text-gray-700 hover:text-blue-600 py-4 px-6 bg-white bg-opacity-70 rounded-xl shadow-lg text-center transition-colors"
                onClick={closeMenu}
              >
                Resume
              </a>
              <a
                href="/growth-plan"
                class="text-xl font-medium text-gray-700 hover:text-blue-600 py-4 px-6 bg-white bg-opacity-70 rounded-xl shadow-lg text-center transition-colors"
                onClick={closeMenu}
              >
                Growth Plan
              </a>
              <a
                href="/artifacts"
                class="text-xl font-medium text-gray-700 hover:text-blue-600 py-4 px-6 bg-white bg-opacity-70 rounded-xl shadow-lg text-center transition-colors"
                onClick={closeMenu}
              >
                Artifacts
              </a>
            </div>
            
            {/* Contact info at bottom */}
            <div class="mt-auto mb-6 text-center text-gray-600 bg-white bg-opacity-80 px-4 py-3 rounded-lg shadow-lg mx-auto">
              <p class="text-sm font-medium">Physics Teacher & Educational Technology Developer</p>
              <p class="text-xs mt-1">mohammedsebbagh@gmail.com</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}