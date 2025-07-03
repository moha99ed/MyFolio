// islands/PdfModal.tsx
import { useState, useEffect } from "preact/hooks";
import { Portal } from "../components/Portal.tsx";

interface PdfModalProps {
  pdfUrl: string;
  title: string;
  children: any;
}

export function FullScreenPdfModal({ pdfUrl, title, children }: PdfModalProps) {
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
        {children}
      </div>

      {isOpen && (
        <Portal>
          {/* Backdrop with blur */}
          <div
            class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm p-4"
            onClick={closeModal}
          >
            {/* Modal content box */}
            <div
              class="relative w-full max-w-5xl h-[85vh] bg-white rounded-xl shadow-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
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

              {/* PDF content */}
              <iframe
                src={`${pdfUrl}#toolbar=1&view=FitH`}
                title={title}
                class="w-full h-full border-0"
              />
            </div>
          </div>
        </Portal>
      )}
    </>
  );
}
