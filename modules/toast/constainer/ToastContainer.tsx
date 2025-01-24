import toast from "react-hot-toast";
import DynamicToast from "../views/ToastViews";
interface ToastProps {
    imageUrl?: string;
    title: string;
    message: string;
    color: string;
    titleColor: string;
    backgroundColor: string;
}
const showToast = ({imageUrl, title, message, color, backgroundColor, titleColor} : ToastProps) => {
  toast.custom((t) => (
    <DynamicToast
      imageUrl={imageUrl}
      backgroundColor={backgroundColor}
      title={title}
      titleColor={titleColor}
      message={message}
      t={t}
      color={color}
    />
  ));
};

export default showToast;
