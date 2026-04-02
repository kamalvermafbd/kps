import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";

export default async function handler(req, res) {
  try {
    const auth = new JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID, auth);
    await doc.loadInfo();

    const sheet = doc.sheetsByTitle["services"];
    const rows = await sheet.getRows();

    const services = rows.map((row) => ({
      slug: row.get("slug"),
      service_name: row.get("service_name"),
      short_summary: row.get("short_summary"),
      symptoms: row.get("symptoms")?.split(",") || [],
      seo_title: row.get("seo_title"),
      seo_description: row.get("seo_description"),
      city: row.get("city"),
      is_active: row.get("is_active") === "TRUE",
    }));

    res.status(200).json(services.filter((s) => s.is_active));
  } catch (e) {
    res.status(500).json({ error: String(e) });
  }
}
