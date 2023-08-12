import { useEffect, useRef, useState } from "react";

function Letter({
  focus,
  onChange,
}: {
  focus?: boolean;
  onChange: (value: string) => void;
}) {
  const ref = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState("");
  if (ref && ref.current) {
    if (focus) ref.current.focus();
    else ref.current.blur();
    if (value) ref.current.blur();
  }

  useEffect(() => {
    if (ref && ref.current) if (focus) ref.current.focus();
  }, [ref]);

  const handleFocus = () => {
    if (ref && ref.current) {
      if (value) ref.current.blur();
      else ref.current.focus();
    }
  };

  const handleBlur = () => {
    if (ref && ref.current) {
      if (value) ref.current.blur();
      else ref.current.focus();
    }
  };

  useEffect(() => {
    onChange(value);
  }, [value]);
  return (
    <input
      ref={ref}
      onFocus={handleFocus}
      onBlur={handleBlur}
      className="inter w-[48px] text-center inline-flex justify-center items-center gap-2 rounded-md bg-pink-100 dark:hover:bg-[#ec489a68] dark:bg-[#ec489a3c] border border-transparent text-pink-500 dark:text-pink-400  hover:bg-pink-200 text-xl focus:outline-none focus:ring-2 ring-offset-white focus:ring-pink-500 focus:ring-offset-2 transition-all dark:focus:ring-offset-slate-900 aspect-square"
      value={value}
      onChange={(e) => setValue(e.target.value.toUpperCase())}
    />
  );
}

export default Letter;
