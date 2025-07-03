// islands/ArtifactModal.tsx
import { useState, useEffect } from "preact/hooks";
import { Portal } from "../components/Portal.tsx";

interface ArtifactModalProps {
  title: string;
  children: any;
}

export function ArtifactModal({ title, children }: ArtifactModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = "unset";
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    
    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
      return () => {
        window.removeEventListener("keydown", handleEscape);
      };
    }
  }, [isOpen]);

  return (
    <>
      <div onClick={openModal} style={{ cursor: "pointer" }}>
        <button
          class="text-white px-6 py-2 rounded-lg font-semibold inline-flex items-center gap-2 text-sm"
          style="background: linear-gradient(135deg, #10b981 0%, #059669 100%)"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
          </svg>
          View Artifact
        </button>
      </div>

      {isOpen && (
        <Portal>
          <div
            class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm p-4"
            onClick={closeModal}
          >
            <div
              class="relative w-full max-w-5xl h-[85vh] bg-white rounded-xl shadow-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div class="flex justify-between items-center p-4 border-b bg-white">
                <h2 class="text-lg font-semibold text-gray-800">{title}</h2>
                <button
                  onClick={closeModal}
                  class="text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Close"
                >
                  <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24">
                    <path
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div class="w-full h-full overflow-y-auto p-6 pb-20">
                {children}
              </div>
            </div>
          </div>
        </Portal>
      )}
    </>
  );
}