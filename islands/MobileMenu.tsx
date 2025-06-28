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
       class="md:hidden text-gray-600 hover:text-gray-900 z-[999] relative" 
       onClick={toggleMenu}
     >
       <div class={`hamburger text-gray-700 ${isOpen ? 'open' : ''}`}>
         <div class="hamburger-top"></div>
         <div class="hamburger-middle"></div>
         <div class="hamburger-bottom"></div>
       </div>
     </button>

     {/* Mobile menu overlay */}
     {isOpen && (
       <div 
         class="fixed inset-0 w-screen h-screen bg-white/90 backdrop-blur-lg z-[9999] md:hidden"
         style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
       >
         {/* Menu content */}
         <div class="relative w-full h-full flex flex-col px-6 z-[9999]">
           {/* Header section */}
           <div class="flex justify-between items-center pt-6 pb-8">
             {/* Brand/Logo */}
             <div class="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg">
               <h2 class="text-lg font-bold text-gray-900">Mohammed Sebbagh</h2>
             </div>
             
             {/* Close button */}
             <button 
               onClick={closeMenu}
               class="text-gray-700 hover:text-gray-900 text-3xl font-light w-10 h-10 flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-full"
             >
               ×
             </button>
           </div>
           
           {/* Menu items - positioned right below header */}
           <div class="flex flex-col space-y-4 max-w-sm mx-auto w-full">
             <a 
               href="/" 
               class="text-2xl font-semibold text-blue-600 hover:text-blue-700 transition-colors py-4 px-6 bg-white/70 backdrop-blur-sm rounded-xl hover:bg-white/90 shadow-lg text-center" 
               onClick={closeMenu}
             >
               Home
             </a>
             <a 
               href="/philosophy" 
               class="text-xl font-medium text-gray-700 hover:text-blue-600 transition-colors py-4 px-6 bg-white/70 backdrop-blur-sm rounded-xl hover:bg-white/90 shadow-lg text-center" 
               onClick={closeMenu}
             >
               Teaching Philosophy
             </a>
             <a 
               href="/resume" 
               class="text-2xl font-medium text-gray-700 hover:text-blue-600 transition-colors py-4 px-6 bg-white/70 backdrop-blur-sm rounded-xl hover:bg-white/90 shadow-lg text-center" 
               onClick={closeMenu}
             >
               Resume
             </a>
             <a 
               href="/growth-plan" 
               class="text-xl font-medium text-gray-700 hover:text-blue-600 transition-colors py-4 px-6 bg-white/70 backdrop-blur-sm rounded-xl hover:bg-white/90 shadow-lg text-center" 
               onClick={closeMenu}
             >
               Growth Plan
             </a>
           </div>
           
           {/* Contact info at bottom */}
           <div class="mt-auto mb-6 text-center text-gray-600 bg-white/80 backdrop-blur-sm px-4 py-3 rounded-lg shadow-lg mx-auto">
             <p class="text-sm font-medium">Physics Teacher & Educational Technology Developer</p>
             <p class="text-xs mt-1">mohammedsebbagh@gmail.com</p>
           </div>
         </div>
       </div>
     )}
   </>
 );
}
