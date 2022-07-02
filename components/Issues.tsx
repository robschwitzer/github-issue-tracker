import React from "react";

import type { GithubIssue } from "types";
import IssueCard from "./IssueCard";

interface Props {
  issues: GithubIssue[];
}

function Issues({ issues }: Props) {
  const children = issues?.map((issue) => <IssueCard key={issue.id} {...issue} />);
  return <div className="flex flex-row flex-wrap gap-10">{children}</div>;
}

export default Issues;
