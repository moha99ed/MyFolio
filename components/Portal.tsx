// components/Portal.tsx
import { createPortal } from "preact/compat";

export function Portal({ children }: { children: any }) {
  return createPortal(children, document.body);
}