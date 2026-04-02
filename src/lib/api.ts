export const API_BASE =
  "https://script.google.com/macros/s/AKfycbzLQa8L82671U9UTd30slnjEBReI7fHrMxe9cZ6BrSHYK2hpLNFNDeQdtSliQbdKDRA/exec";

export async function apiGet(api: string, params: Record<string, string> = {}) {
  const query = new URLSearchParams({
    api,
    ...params,
  }).toString();

  const res = await fetch(`${API_BASE}?${query}`);
  return res.json();
}
