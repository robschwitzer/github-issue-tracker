import IssueCard, { Loading } from "./IssueCard";

import type { GithubIssue } from "types";

interface Props {
  issues: GithubIssue[];
  url: string;
}

const loading: JSX.Element[] = new Array(6)
  .fill(null)
  .map((_, i) => <Loading key={i} />);

function Issues({ issues, url }: Props) {
  const children = issues?.map((issue) => (
    <IssueCard key={issue.id} {...issue} />
  ));

  if (!issues) {
    return <div className="flex flex-row flex-wrap gap-10">{loading}</div>;
  }

  if (issues && !issues.length) {
    return (
      <div className="flex grow self-center p-16">
        <h1 className="text-2xl">
          😁 Looks like there's nothing here.{" "}
          <a
            rel="noopener noreferrer"
            href={`${url}/issues/new`}
            className="underline"
          >
            Create a new issue
          </a>
        </h1>
      </div>
    );
  }

  return <div className="flex flex-row flex-wrap gap-10">{children}</div>;
}

export default Issues;
