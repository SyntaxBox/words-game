type props = {
  children: React.ReactNode;
  title: string;
} & JSX.IntrinsicElements["button"];

function IconButton({ children, title, ...rest }: props) {
  return (
    <button
      title={title}
      className="w-[48px] inline-flex justify-center items-center gap-2 rounded-md bg-pink-100 border border-transparent font-semibold text-pink-500  hover:bg-pink-200 focus:outline-none focus:ring-2 ring-offset-white focus:ring-pink-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800 aspect-square"
      {...rest}
    >
      {children}
    </button>
  );
}

export default IconButton;
