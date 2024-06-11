export function A({ children, ...rest }: JSX.IntrinsicElements["button"]) {
  return (
    <button
      {...rest}
      className="inline-flex justify-center items-center gap-2 rounded-md font-semibold text-pink-500"
    >
      {children}
    </button>
  );
}

export default A;
