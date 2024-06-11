import { ReactNode } from "react";
import { IconAlertTriangle } from "@tabler/icons-react";
import { iconsSize, iconStroke } from "../../shared";

type props = {
  title: string;
  children: ReactNode;
  className?: string;
};

function Alert({ title, children, className }: props) {
  return (
    <div
      className={`w-full sm:max-w-[400px] bg-pink-100 dark:bg-[#692b58] border-t-4 border-pink-500 dark:border-pink-600 sm:rounded-b-md text-pink-900 dark:text-pink-200 px-4 py-3 shadow-md ${className}`}
      role="alert"
    >
      <div className="flex">
        <div className="py-1 pr-3 text-pink-500 dark:text-pink-500 ">
          <IconAlertTriangle size={iconsSize + 8} stroke={iconStroke} />
        </div>
        <div>
          <p className="font-bold">{title}</p>
          <div className="text-sm">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Alert;
