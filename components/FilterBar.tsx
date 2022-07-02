import React from "react";
import Image from "next/image";

import closeIcon from "assets/icons/close.svg";

interface Props {
  onClick: Function;
  selectedItem: string;
}

const ISSUE_STATES = [
  { label: "All Issues", state: "all" },
  { label: "Open Issues", state: "open" },
  { label: "Closed Issues", state: "closed" },
  { label: "Pull Requests", state: "pr" },
];

function FilterBar({ onClick, selectedItem }: Props) {
  const listItems = ISSUE_STATES.map((item) => (
    <li
      key={item.label}
      className="whitespace-nowrap text-xs md:text-sm mr-4 cursor-pointer"
      onClick={() => onClick(item.state)}
      style={{
        textDecoration: item.state === selectedItem ? "underline" : "none",
      }}
    >
      {item.label}
    </li>
  ));

  return (
    <div className="flex flex-row justify-between mb-8">
      <ul className="flex flex-row">{listItems}</ul>
      <a className="relative h-6 w-6 cursor-pointer" href="/">
        <Image src={closeIcon} layout="fill" />
      </a>
    </div>
  );
}

export default FilterBar;
