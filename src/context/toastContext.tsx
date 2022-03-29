import {
  createContext,
  useState,
  useEffect,
  useCallback,
  useContext,
} from "react";

interface ToastContextType {
  addToast: (toast: string) => void;
}

// const initialState = {
//   addToast: () => void
// }

const ToastContext = createContext<ToastContextType>({ addToast: () => {} });

const ToastContextProvider: React.FC = ({ children }) => {
  const [toasts, setToasts] = useState<string[]>([]);

  useEffect(() => {
    if (toasts.length > 0) {
      const timer = setTimeout(
        () => setToasts((toasts) => toasts.slice(1)),
        2000
      );
      return () => clearTimeout(timer);
    }
  }, [toasts]);

  const addToast = useCallback(
    function (toast: string) {
      setToasts((toasts: string[]) => [...toasts, toast]);
    },
    [setToasts]
  );

  const ctx: ToastContextType = {
    addToast,
  };

  return (
    <ToastContext.Provider value={ctx}>
      {children}
      <div className="toastContainer">
        {toasts.map((toast) => (
          <div className="toast" key={toast}>
            {toast}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export default ToastContextProvider;

export const useToast = () => useContext(ToastContext);
