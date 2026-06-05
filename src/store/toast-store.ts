import { create } from 'zustand';

type ToastType = 'error' | 'success' | 'info';

interface ToastState {
  isOpen: boolean;
  message: string | null;
  type: ToastType;
  showToast: (message: string, type?: ToastType) => void;
  hideToast: () => void;
}

export const useToastStore = create<ToastState>((set) => {
  let timeoutId: ReturnType<typeof setTimeout>;

  return {
    isOpen: false,
    message: null,
    type: 'error',
    showToast: (message, type = 'error') => {
      // Clear any existing timeout so it doesn't dismiss the new toast early
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      set({ isOpen: true, message, type });

      // Auto-dismiss after 4 seconds
      timeoutId = setTimeout(() => {
        set({ isOpen: false });
        // Optional: clear message slightly after animation finishes
        setTimeout(() => set({ message: null }), 300);
      }, 4000);
    },
    hideToast: () => {
      if (timeoutId) clearTimeout(timeoutId);
      set({ isOpen: false });
      setTimeout(() => set({ message: null }), 300);
    },
  };
});
