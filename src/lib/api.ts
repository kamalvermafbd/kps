export const API_BASE =
  "https://script.google.com/macros/s/AKfycbxVLEpdShlzJAcSWjUH2QYneZ_j30zlkNQNDRhKVZcnOWGK5q6CYxYpXPdurDmngKbM/exec";

export async function apiGet(api: string, params: Record<string, string> = {}) {
  const query = new URLSearchParams({
    api,
    ...params,
  }).toString();

  const res = await fetch(`${API_BASE}?${query}`);
  return res.json();
}


export async function apiPost(api: string, body: Record<string, any> = {}) {
  const res = await fetch(API_BASE, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      api,
      ...body,
    }),
  });

  return res.json();
}
