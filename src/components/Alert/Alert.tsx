import { IconAlertTriangle } from "@tabler/icons-react";
import { iconsSize, iconStroke } from "../../shared";

type props = {
  title: string;
  description: string;
  className?: string;
} & JSX.IntrinsicElements["div"];

function Alert({ title, description, className }: props) {
  return (
    <div
      className={`max-w-[400px] bg-pink-100 dark:bg-[#ec489a68] border-t-4 border-pink-500 dark:border-pink-600 rounded-b-md text-pink-900 dark:text-pink-200 px-4 py-3 shadow-md ${className}`}
      role="alert"
    >
      <div className="flex">
        <div className="py-1 pr-4 text-pink-500 dark:text-pink-500 ">
          <IconAlertTriangle size={iconsSize + 8} stroke={iconStroke} />
        </div>
        <div>
          <p className="font-bold">{title}</p>
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Alert;
