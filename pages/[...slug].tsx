import React, { useMemo, useState } from "react";

import PageHeader from "components/PageHeader";
import FilterBar from "components/FilterBar";
import Issues from "components/Issues";
import { fetchAPI } from "lib/fetchAPI";

import type { GetStaticProps, GetStaticPaths } from "next";
import type { GithubRepo, GithubIssue } from "types";

interface Props {
  has_issues: GithubRepo["has_issues"];
  html_url: GithubRepo["html_url"];
  open_issue_count: GithubRepo["open_issues_count"];
  issues: GithubIssue[];
}

const baseUrl: string = "https://api.github.com/repos";

function IssuesPage(props: Props) {
  const [filterBy, setFilterBy] = useState<GithubIssue["state"] | "all" | "pr">(
    "all"
  );

  const issues: GithubIssue[] = useMemo(() => {
    return props.issues?.filter((issue) => {
      if (filterBy === "open") return issue.state === "open";
      if (filterBy === "closed") return issue.state === "closed";
      if (filterBy === "pr") return issue.pull_request;
      return issue;
    });
  }, [filterBy, props.issues]);

  return (
    <div
      className={`flex flex-col w-full min-h-screen h-full p-6`}
    >
      <PageHeader url={props.html_url} />
      <FilterBar onClick={setFilterBy} selectedItem={filterBy} />
      <Issues issues={issues} />
    </div>
  );
}

export default IssuesPage;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string[];
  const [{ has_issues, open_issues_count, html_url }, issues] =
    await Promise.all([
      fetchAPI<GithubRepo>(`${baseUrl}/${slug.join("/")}`),
      fetchAPI<GithubIssue[]>(`${baseUrl}/${slug.join("/")}/issues`),
    ]);

  return {
    props: {
      has_issues,
      html_url,
      open_issues_count,
      issues,
    },
    revalidate: 1000,
  };
};
