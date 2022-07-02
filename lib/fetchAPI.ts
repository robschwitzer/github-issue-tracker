export interface IFetchOptions {
  method?: "GET" | "POST";
  headers?: Headers | { [key: string]: string };
  body?: BodyInit;
  mode?: RequestMode;
  credentials?: RequestCredentials;
}

/**
 * A wrapper on fetch to get repo data from github
 *
 * @param {string} url Path to the repo
 * @param {Object} options Options passed to fetch
 * @returns Parsed API response
 */
export async function fetchAPI<T>(url: string, options: IFetchOptions = {}): Promise<T> {
  const mergedOptions: IFetchOptions = {
    headers: {
      "Content-Type": "application/json",
      accept: "application/vnd.github+json",
    },
    ...options,
  };

  const response: Response = await fetch(url, mergedOptions);

  if (!response.ok) {
    return { error: response.status } as T;
  }

  return await response.json();
}
