export const API_BASE =
  "https://script.google.com/macros/s/AKfycbzVTR5MTdCF1aCRLr5E0AcoSselGHtaKiPgovEHMrvqpv9oDQ23FLw7SXy54k2NFMM/exec";

export async function apiGet(api: string, params: Record<string, string> = {}) {
  const query = new URLSearchParams({
    api,
    ...params,
  }).toString();

  const res = await fetch(`${API_BASE}?${query}`);
  return res.json();
}
