import React, { forwardRef, MouseEventHandler } from "react";
import Image from "next/image";
import searchIcon from "assets/icons/search.svg";

import type { ChangeEventHandler, ForwardedRef } from "react";

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
  ) => {
    return (
      <div className="flex flex-col h-16 md:h-24 w-11/12 md:w-2/3 ">
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
          {isValid && (
            <button
              className={`hidden md:flex bg-sky-700 text-neutral-50 border-2 border-neutral-900 h-full text-lg items-center rounded-md px-2`}
              onClick={onComplete}
            >
              GO
            </button>
          )}
        </div>
        <p className="text-sm text-red-400 mt-2">{errorText}</p>
        {/* mobile screens */}
        {isValid && (
          <button
            className={`flex md:hidden bg-sky-700 text-neutral-50 border-2 border-neutral-900 h-full text-lg items-center justify-center rounded-md px-2`}
            onClick={onComplete}
          >
            GO
          </button>
        )}
      </div>
    );
  }
);

export default SearchField;
