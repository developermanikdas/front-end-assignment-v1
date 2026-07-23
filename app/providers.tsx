"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import { ThemeProvider } from "next-themes";
import { AnimatePresence } from "framer-motion";
import { Toast } from "./components/ui/toast";

type ToastType = "success" | "error" | "info";

interface ToastMessage {
  id: string;
  type: ToastType;
  message: string;
  duration?: number;
}

interface ToastContextType {
  toast: (message: string, type?: ToastType, duration?: number) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}

export function Providers({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const toast = useCallback((message: string, type: ToastType = "info", duration = 4000) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, type, message, duration }]);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={true}>
      <ToastContext.Provider value={{ toast }}>
        {children}
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 pointer-events-none max-w-md w-full px-4 sm:px-0">
          <AnimatePresence>
            {toasts.map((t) => (
              <Toast
                key={t.id}
                type={t.type}
                message={t.message}
                duration={t.duration}
                onClose={() => removeToast(t.id)}
              />
            ))}
          </AnimatePresence>
        </div>
      </ToastContext.Provider>
    </ThemeProvider>
  );
}
