import { useCallback } from "react";
import toast, { ToastOptions } from "react-hot-toast";

const useNotification = () => {
  const notify = useCallback(
    (
      type: "success" | "error" | "loading" | "info",
      content: string,
      options?: ToastOptions
    ) => {
      switch (type) {
        case "success":
          toast.success(content, options);
          break;
        case "error":
          toast.error(content, options);
          break;
        case "loading":
          toast.loading(content, options);
          break;
        case "info":
          toast(content, { icon: "i", ...options });
          break;
        default:
          toast(content, options);
          break;
      }
    },
    []
  );

  return notify;
};

export default useNotification;
