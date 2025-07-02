// islands/MobileMenu.tsx - Flowbite-style collapsible menu
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
      {/* Mobile menu button - Flowbite style */}
      <button
        onClick={toggleMenu}
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-colors"
        aria-controls="navbar-mobile"
        aria-expanded={isOpen}
        aria-label="Toggle navigation menu"
      >
        <span class="sr-only">Open main menu</span>
        <svg 
          class="w-5 h-5" 
          aria-hidden="true" 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 17 14"
        >
          <path 
            stroke="currentColor" 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            stroke-width="2" 
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>

      {/* Mobile navigation menu - Collapsible */}
      <div 
        class={`${isOpen ? 'block' : 'hidden'} absolute top-full left-0 right-0 w-full md:hidden z-50`}
        id="navbar-mobile"
      >
        <div class="modern-card mx-4 mt-2 rounded-xl shadow-xl border border-gray-100 overflow-hidden backdrop-blur-md">
          <ul class="font-medium flex flex-col">
            <li>
              <a 
                href="/" 
                class="flex items-center py-4 px-6 text-blue-600 bg-blue-50 hover:bg-blue-100 transition-colors group"
                onClick={closeMenu}
                aria-current="page"
              >
                <span class="text-2xl mr-4 group-hover:scale-110 transition-transform">🏠</span>
                <div>
                  <div class="font-semibold">Home</div>
                  <div class="text-sm text-blue-500">Portfolio Overview</div>
                </div>
              </a>
            </li>
            
            <li class="border-t border-gray-100">
              <a 
                href="/philosophy" 
                class="flex items-center py-4 px-6 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors group"
                onClick={closeMenu}
              >
                <span class="text-2xl mr-4 group-hover:scale-110 transition-transform">🎓</span>
                <div>
                  <div class="font-semibold">Teaching Philosophy</div>
                  <div class="text-sm text-gray-500 group-hover:text-blue-500">Educational Beliefs</div>
                </div>
              </a>
            </li>
            
            <li class="border-t border-gray-100">
              <a 
                href="/resume" 
                class="flex items-center py-4 px-6 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors group"
                onClick={closeMenu}
              >
                <span class="text-2xl mr-4 group-hover:scale-110 transition-transform">📄</span>
                <div>
                  <div class="font-semibold">Resume</div>
                  <div class="text-sm text-gray-500 group-hover:text-blue-500">Experience & Qualifications</div>
                </div>
              </a>
            </li>
            
            <li class="border-t border-gray-100">
              <a 
                href="/growth-plan" 
                class="flex items-center py-4 px-6 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors group"
                onClick={closeMenu}
              >
                <span class="text-2xl mr-4 group-hover:scale-110 transition-transform">🌱</span>
                <div>
                  <div class="font-semibold">Growth Plan</div>
                  <div class="text-sm text-gray-500 group-hover:text-blue-500">Professional Development</div>
                </div>
              </a>
            </li>
            
            <li class="border-t border-gray-100">
              <a 
                href="/artifacts" 
                class="flex items-center py-4 px-6 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors group"
                onClick={closeMenu}
              >
                <span class="text-2xl mr-4 group-hover:scale-110 transition-transform">📚</span>
                <div>
                  <div class="font-semibold">Teaching Artifacts</div>
                  <div class="text-sm text-gray-500 group-hover:text-blue-500">Lesson Plans & Assessments</div>
                </div>
              </a>
            </li>
            
            {/* Contact footer */}
            <li class="border-t border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50">
              <div class="py-3 px-6 text-center">
                <p class="text-sm font-medium text-gray-700">Physics Teacher & Educational Technology Developer</p>
                <p class="text-xs text-blue-600 mt-1">mohammedsebbagh@gmail.com</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Backdrop overlay when menu is open */}
      {isOpen && (
        <div 
          class="fixed inset-0 bg-black bg-opacity-25 z-40 md:hidden"
          onClick={closeMenu}
        ></div>
      )}
    </>
  );
}