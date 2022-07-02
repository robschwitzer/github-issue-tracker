import { useMemo } from "react";

import type { GithubLabel } from "types";

function Label(label: GithubLabel) {
  const name: string = useMemo(() => {
    if (label.name.includes(":")) {
      return label.name.split(":")[1];
    }
    return label.name;
  }, [label.name]);

  return (
    <div
      className="flex flex-row py-1 px-2 rounded-lg items-center"
      style={{ background: `#${label.color}` }}
    >
      <span className="w-2 h-2 mr-2 rounded-full bg-slate-900" />
      <p className="text-xs font-bold text-slate-900">{name}</p>
    </div>
  );
}

export default Label;
