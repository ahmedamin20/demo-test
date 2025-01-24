import React from "react";
import { Toast, toast } from "react-hot-toast";
import { CiCircleRemove } from "react-icons/ci";

interface ToastProps {
  imageUrl?: string;
  name?: string;
  message: string;
  t: Toast;
  color: string;
  title: string;
  backgroundColor: string;
  titleColor: string;
}

const DynamicToast: React.FC<ToastProps> = ({
  imageUrl,
  message,
  t,
  color,
  title,
  backgroundColor,
  titleColor,
}) => {
  return (
    <div
      className={`${
        t.visible ? "animate-toast-enter" : "animate-toast-leave"
      } max-w-md w-full ${backgroundColor || "bg-white"} shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
    >
      <div className="flex-1 w-0 p-4">
        <div className="flex items-start">
          {imageUrl && (
            <div className="flex-shrink-0 pt-0.5">
              <img
                className="h-10 w-10 rounded-full"
                src={imageUrl}
                alt="Notification"
              />
            </div>
          )}
          <div className="ml-3 flex-1">
            <p
              className={`text-sm font-medium ${
                titleColor || "text-red-500"
              }`}
            >
              {title}
            </p>
            <p className={`mt-1 text-sm ${color || "text-white"}`}>
              {message}
            </p>
          </div>
        </div>
      </div>
      <div className="flex">
        <button
          onClick={() => toast.dismiss(t.id)}
          className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium"
        >
          <CiCircleRemove className="text-red-500" size={25}/>
        </button>
      </div>
    </div>
  );
};

export default DynamicToast;
