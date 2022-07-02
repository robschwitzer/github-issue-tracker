import { forwardRef } from "react";
import Image from "next/image";

import searchIcon from "assets/icons/search.svg";

import type { ChangeEventHandler, ForwardedRef, MouseEventHandler } from "react";

interface Props {
  errorText: string;
  isValid: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onComplete: MouseEventHandler<HTMLButtonElement>;
}

const SearchField = forwardRef(
  (
    { errorText, isValid, onChange, onComplete }: Props,
    ref: ForwardedRef<HTMLInputElement>
  ) => (
    <div className="flex flex-col h-16 md:h-24 w-11/12 md:w-2/3">
      <div className="flex flex-row border-2 bg-sky-100 border-stone-900 rounded-md p-4 items-center justify-between">
        <div className="flex flex-row w-full items-center">
          <div className="relative h-8 md:h-12 w-8 md:w-12">
            <Image src={searchIcon} layout="fill" />
          </div>
          <input
            autoFocus
            className="border-none outline-none bg-sky-100 text:sm md:text-xl ml-4 w-full h-full"
            placeholder="Paste a link to a GitHub repo"
            onChange={onChange}
            ref={ref}
            type="text"
          />
        </div>
        <Button
          className="hidden md:flex"
          isValid={isValid}
          onComplete={onComplete}
        />
      </div>
      <p className="text-sm text-red-400 my-2">{errorText}</p>
      {/* mobile screens */}
      <Button
        className="flex md:hidden"
        isValid={isValid}
        onComplete={onComplete}
      />
    </div>
  )
);

type ButtonProps = Omit<Props, "errorText" | "onChange"> & {
  className: string;
};

function Button({ onComplete, isValid, className }: ButtonProps) {
  return (
    <button
      className={`text-neutral-50 border-2 border-neutral-900 h-full text-lg items-center justify-center rounded-md px-8 active:scale-95 transition-all ${className}`}
      disabled={!isValid}
      onClick={onComplete}
      style={{
        opacity: isValid ? 1 : 0.7,
        background: isValid ? "#00bf33" : "#1367ed",
      }}
    >
      GO
    </button>
  );
}

export default SearchField;
