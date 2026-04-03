export const API_BASE =
  "https://script.google.com/macros/s/AKfycbx3sJivGE9FlSk4F-0EC-dwMvHf0mFPNRb75f21Bs23ViL--ZlyPuS-PpjDDuRkyzpV/exec";

export async function apiGet(api: string, params: Record<string, string> = {}) {
  const query = new URLSearchParams({
    api,
    ...params,
  }).toString();

  const res = await fetch(`${API_BASE}?${query}`);
  return res.json();
}

export async function apiPost(api: string, body: Record<string, any> = {}) {
  const params = new URLSearchParams({
    api,
    ...Object.fromEntries(
      Object.entries(body).map(([k, v]) => [k, String(v)])
    ),
  });

  const res = await fetch(API_BASE, {
    method: "POST",
    body: params,
  });

  return res.json();
}
