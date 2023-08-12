import { TablerIconsProps } from "@tabler/icons-react";
type props = {
  Icon: (props: TablerIconsProps) => JSX.Element;
  title: string;
} & JSX.IntrinsicElements["button"];

function IconButton({ Icon, title, ...rest }: props) {
  return (
    <button
      title={title}
      className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md bg-pink-100 border border-transparent font-semibold text-pink-500 hover:text-white hover:bg-pink-100 focus:outline-none focus:ring-2 ring-offset-white focus:ring-pink-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800 aspect-square"
      {...rest}
    >
      <Icon />
    </button>
  );
}

export default IconButton;
