// components/Layout.tsx
import { Head } from "$fresh/runtime.ts";
import MobileMenu from "../islands/MobileMenu.tsx";

interface LayoutProps {
  title: string;
  description: string;
  children: any;
  currentPath?: string;
}

export default function Layout({ title, description, children, currentPath = "" }: LayoutProps) {
  const isActive = (path: string) => currentPath === path;

  return (
    <>
      
      <div class="min-h-screen bg-gray-50 moroccan-bg body-font">
        {/* Header */}
        <header class="bg-white/90 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50 content-layer">
          <div class="container mx-auto px-4 sm:px-6 py-4 max-w-6xl">
            <div class="flex justify-between items-center">
              <div class="text-left">
                <h1 class="text-xl sm:text-2xl font-bold heading-font text-gray-900">
                  Mohammed Sebbagh
                </h1>
                <p class="text-sm text-gray-600 hidden sm:block">
                  Physics Teacher & Educational Technology Developer
                </p>
                <p class="text-sm text-gray-600 hidden sm:block">Submitted: 06/27/2025</p>
              </div>

              {/* Desktop Navigation */}
              <nav class="hidden md:flex space-x-8">
                <a 
                  href="/" 
                  class={`font-medium px-3 py-2 transition-colors ${
                    isActive("/") 
                      ? "text-blue-600 font-semibold border-b-2 border-blue-600" 
                      : "text-gray-600 hover:text-blue-600"
                  }`}
                >
                  Home
                </a>
                <a 
                  href="/philosophy" 
                  class={`font-medium px-3 py-2 transition-colors ${
                    isActive("/philosophy") 
                      ? "text-blue-600 font-semibold border-b-2 border-blue-600" 
                      : "text-gray-600 hover:text-blue-600"
                  }`}
                >
                  Philosophy
                </a>
                <a 
                  href="/resume" 
                  class={`font-medium px-3 py-2 transition-colors ${
                    isActive("/resume") 
                      ? "text-blue-600 font-semibold border-b-2 border-blue-600" 
                      : "text-gray-600 hover:text-blue-600"
                  }`}
                >
                  Resume
                </a>
                <a 
                  href="/growth-plan" 
                  class={`font-medium px-3 py-2 transition-colors ${
                    isActive("/growth-plan") 
                      ? "text-blue-600 font-semibold border-b-2 border-blue-600" 
                      : "text-gray-600 hover:text-blue-600"
                  }`}
                >
                  Growth Plan
                </a>
                <a 
                  href="/artifacts" 
                  class={`font-medium px-3 py-2 transition-colors ${
                    isActive("/artifacts") 
                      ? "text-blue-600 font-semibold border-b-2 border-blue-600" 
                      : "text-gray-600 hover:text-blue-600"
                  }`}
                >
                  Artifacts
                </a>
              </nav>

              {/* Mobile menu component */}
              <MobileMenu />
            </div>
          </div>
        </header>

        {/* Main content */}
        <main class="container mx-auto px-4 sm:px-6 max-w-6xl content-layer">
          {children}
        </main>

        {/* Footer */}
        <footer class="bg-white/80 backdrop-blur-md border-t border-gray-200/50 py-8 sm:py-12 mt-16 sm:mt-24 content-layer no-print">
          <div class="container mx-auto px-4 sm:px-6 max-w-6xl text-center">
            <div class="geometric-divider w-16 sm:w-24 mx-auto mb-4 sm:mb-6"></div>
            <div class="space-y-2">
              <p class="text-gray-500 text-sm sm:text-base font-medium">
                &copy; 2025 Mohammed Sebbagh | Professional Teaching Portfolio
              </p>
              <p class="text-gray-400 text-xs sm:text-sm italic">
                Dedicated to fostering scientific literacy, critical thinking, and lifelong learning in all students
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}