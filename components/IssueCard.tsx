import React from "react";
import Image from "next/image";

import Label from "./Label";
import prIcon from "assets/icons/pull-request.svg";
import closedIcon from "assets/icons/issue-closed.svg";

import type { GithubIssue } from "types";

function IssueCard(issue: GithubIssue) {
  const labels = issue.labels.map((label) => (
    <Label key={label.id} {...label} />
  ));

  if (!issue) return null;
  return (
    <a
      href={issue.html_url}
      className="flex flex-col basis-auto md:basis-1/4 md:grow md:shrink-0 rounded-md border-2 border-slate-700 bg-slate-100 p-2 gap-8 justify-between overflow-hidden text-slate-900 shadow-lg hover:scale-105 transition-all"
    >
      <div className="flex flex-row items-start justify-between">
        <h1 className="text-xl font-bold basis-11/12">{issue.title}</h1>
        {issue.state === "closed" ||
          (issue.pull_request && (
            <Image
              src={issue.pull_request ? prIcon : closedIcon}
              height={25}
              width={25}
            />
          ))}
      </div>
      <h3 className="text-sm flex-wrap truncate">
        {issue.body ?? "No description provided."}
      </h3>
      <div className="flex flex-row flex-wrap gap-2 w-full">{labels}</div>
    </a>
  );
}

export default IssueCard;
