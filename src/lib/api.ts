export const API_BASE =
  "https://script.google.com/macros/s/AKfycbyVBeGbRJg-OOudjKp3PpnujhvU2nprBQfLLDVDBrpGRNNXrE_Cwfd52Yj-t7L0HwEH/exec";

export async function apiGet(api: string, params: Record<string, string> = {}) {
  const query = new URLSearchParams({
    api,
    ...params,
  }).toString();

  const res = await fetch(`${API_BASE}?${query}`);
  return res.json();
}
