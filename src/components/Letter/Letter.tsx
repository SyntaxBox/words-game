import { useEffect, useRef, useState } from "react";

function Letter({
  focus,
  Value,
}: {
  focus?: boolean;
  Value: (value: string) => unknown;
}) {
  const ref = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState("");
  if (ref && ref.current) {
    if (focus) ref.current.focus();
    else ref.current.blur();
  }

  useEffect(() => {
    Value(value);
  }, [value, Value]);
  return (
    <input
      ref={ref}
      className="inter w-[48px] text-center inline-flex justify-center items-center gap-2 rounded-md bg-pink-100 dark:hover:bg-[#ec489a68] dark:bg-[#ec489a3c] border border-transparent text-pink-500 dark:text-pink-400  hover:bg-pink-200 text-xl focus:outline-none focus:ring-2 ring-offset-white focus:ring-pink-500 focus:ring-offset-2 transition-all dark:focus:ring-offset-slate-900 aspect-square"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}

export default Letter;
