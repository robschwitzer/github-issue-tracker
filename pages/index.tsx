import { useRef, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import SearchField from "components/SearchField";
import { fetchAPI } from "lib/fetchAPI";

import type { NextPage } from "next";
import type { GithubRepo } from "types";

const pageTitle: string = "GitHub Issue Viewer";

function getPathname(url: string): string {
  return new URL(url).pathname;
}

const Home: NextPage = () => {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const timeout = useRef<ReturnType<typeof setTimeout>>();
  const [isValid, setIsValid] = useState<boolean>(false);
  const [errorText, setErrorText] = useState<string>("");

  /* validates whether repo exists on github */
  function debouncedSearch(): void {
    clearTimeout(timeout.current);
    if (isValid) setIsValid(false);
    if (errorText.length) setErrorText("");

    /* Don't issue query if there's no search term  */
    if (inputRef.current && !inputRef.current.value.trim()) return;

    timeout.current = setTimeout(async () => {
      const shouldIssueQuery =
        inputRef.current?.value.includes("github.com/") ?? false;

      if (shouldIssueQuery) {
        const { error } = await fetchAPI<GithubRepo>(
          `https://api.github.com/repos${getPathname(inputRef.current?.value as string)}`
          
        );
        setIsValid(!error);

        if (error) {
          setErrorText(
            "Please check the URL. It might not exist, or it might be entered incorrectly."
          );
        }
      }
    }, 1000);
  }

  function onComplete(): void {
    const pathname = getPathname(inputRef.current?.value as string);
    if (pathname) router.push(pathname);
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>{pageTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-3xl font-bold mb-4">{pageTitle}</h1>
      <SearchField
        errorText={errorText}
        isValid={isValid}
        onChange={debouncedSearch}
        onComplete={onComplete}
        ref={inputRef}
      />
    </div>
  );
};

export default Home;
