export const API_BASE =
  "https://script.google.com/macros/s/AKfycbwVv_54zJfXa8-4-zDp23EwSSVzekIXmzTxB8oXS9VlYytRRF5-DSw_8yjS4EXdK8dN/exec";

export async function apiGet(api: string, params: Record<string, string> = {}) {
  const query = new URLSearchParams({
    api,
    ...params,
  }).toString();

  const res = await fetch(`${API_BASE}?${query}`);
  return res.json();
}
