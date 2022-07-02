import IssueCard, { Loading } from "./IssueCard";

import type { GithubIssue } from "types";

interface Props {
  issues: GithubIssue[];
}

const loading: JSX.Element[] = new Array(6)
  .fill(null)
  .map((_, i) => <Loading key={i} />);

function Issues({ issues }: Props) {
  const children = issues?.map((issue) => (
    <IssueCard key={issue.id} {...issue} />
  ));

  if (!issues) {
    return <div className="flex flex-row flex-wrap gap-10">{loading}</div>;
  }
  return <div className="flex flex-row flex-wrap gap-10">{children}</div>;
}

export default Issues;
