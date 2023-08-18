import { useEffect, useRef, useState } from "react";
import { StringUtils } from "../../shared";

function Letter({
  focus,
  onChange,
}: {
  focus?: boolean;
  onChange: (value: string) => void;
}) {
  const ref = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState("");

  useEffect(() => {
    if (focus) {
      setValue("");
      ref.current?.focus();
    } else {
      ref.current?.blur();
    }
  }, [focus]);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (focus && (e.key === "Backspace" || e.key === "Delete")) {
      // Prevent default Backspace behavior (going back in browser history)
      e.preventDefault();

      if (value) {
        // Delete the letter and keep the focus
        setValue("");
        onChange("delete-value");
      } else if (focus) {
        // No letter to delete, focus the previous cell
        onChange("delete");
      }
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [focus, value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (StringUtils.isAlphabetLetter(inputValue)) {
      setValue(inputValue.toUpperCase());
      onChange(inputValue.toUpperCase());
    } else if (inputValue === "") {
      setValue("");
      onChange("");
    }
  };

  const handleFocus = () => {
    if (ref && ref.current) {
      if (focus) ref.current.focus();
      else ref.current.blur();
    }
  };
  const handleBlur = () => {
    if (ref && ref.current) {
      if (focus) ref.current.focus();
      else ref.current.blur();
    }
  };

  return (
    <input
      ref={ref}
      className="font-bold inter w-full max-w-[48px] text-center inline-flex justify-center items-center gap-2 rounded-md bg-pink-100 dark:hover:bg-[#ec489a68] dark:bg-[#ec489a3c] border border-transparent text-pink-500 dark:text-pink-400  hover:bg-pink-200 text-base sm:text-xl focus:outline-none focus:ring-1 sm:focus:ring-2 ring-offset-white focus:ring-pink-500 focus:ring-offset-2 sm:focus:ring-offset-2 transition-all dark:focus:ring-offset-slate-900 aspect-square"
      value={value}
      role="textbox"
      type="text"
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
  );
}

export default Letter;
