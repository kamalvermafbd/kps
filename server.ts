import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Google Sheets Setup
  const getSheet = async () => {
    const serviceAccountEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
    const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");
    const sheetId = process.env.GOOGLE_SHEET_ID;

    if (!serviceAccountEmail || !privateKey || !sheetId) {
      return null;
    }

    const serviceAccountAuth = new JWT({
      email: serviceAccountEmail,
      key: privateKey,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const doc = new GoogleSpreadsheet(sheetId, serviceAccountAuth);
    await doc.loadInfo();
    return doc;
  };

  // API Routes
  app.get("/api/services", async (req, res) => {
    try {
      const doc = await getSheet();
      if (!doc) {
        // Fallback to mock data if sheet is not configured
        return res.json(MOCK_SERVICES);
      }
      const sheet = doc.sheetsByTitle["services"];
      const rows = await sheet.getRows();
      const services = rows.map((row) => ({
        slug: row.get("slug"),
        service_name: row.get("service_name"),
        short_summary: row.get("short_summary"),
        symptoms: row.get("symptoms")?.split(",").map((s: string) => s.trim()) || [],
        hero_image_prompt: row.get("hero_image_prompt"),
        card_image_prompt: row.get("card_image_prompt"),
        faq_json: JSON.parse(row.get("faq_json") || "[]"),
        seo_title: row.get("seo_title"),
        seo_description: row.get("seo_description"),
        city: row.get("city"),
        is_active: row.get("is_active") === "TRUE",
      }));
      res.json(services.filter(s => s.is_active));
    } catch (error) {
      console.error("Error fetching services:", error);
      res.json(MOCK_SERVICES);
    }
  });

  app.post("/api/appointments", async (req, res) => {
    try {
      const doc = await getSheet();
      if (!doc) {
        console.log("Mock Appointment Saved:", req.body);
        return res.json({ success: true, message: "Appointment saved (mock)" });
      }
      const sheet = doc.sheetsByTitle["appointments"];
      await sheet.addRow({
        ...req.body,
        timestamp: new Date().toISOString(),
      });
      res.json({ success: true });
    } catch (error) {
      console.error("Error saving appointment:", error);
      res.status(500).json({ success: false, error: "Failed to save appointment" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

const MOCK_SERVICES = [
  {
    slug: "sports-injuries-rehab",
    service_name: "Sports Injuries Rehab & Prevention",
    short_summary: "Specialized recovery for athletes to return to peak performance safely.",
    symptoms: ["Ligament Tears", "Muscle Strains", "Joint Pain"],
    hero_image_prompt: "Realistic medical scene: athlete receiving knee injury rehabilitation from a physiotherapist on a sports field, Indian setting, professional equipment, high detail",
    card_image_prompt: "Athlete knee injury rehab on sports field",
    faq_json: [{ q: "How long does recovery take?", a: "It depends on the severity of the injury." }],
    seo_title: "Sports Injury Rehabilitation Faridabad | KRP Healthcare",
    seo_description: "Expert sports injury rehab in Faridabad. Recover faster and prevent future injuries.",
    city: "Faridabad",
    is_active: true
  },
  {
    slug: "neurological-rehabilitation",
    service_name: "Neurological Rehabilitation",
    short_summary: "Comprehensive care for stroke, Parkinson's, and other neurological conditions.",
    symptoms: ["Balance Issues", "Muscle Weakness", "Coordination Loss"],
    hero_image_prompt: "Realistic medical scene: elderly patient practicing hand coordination with a physiotherapist in a modern clinic, Indian setting, gentle care, high detail",
    card_image_prompt: "Elderly patient hand coordination physiotherapy",
    faq_json: [],
    seo_title: "Neurological Rehab Faridabad | Stroke Recovery",
    seo_description: "Specialized neuro rehab in Faridabad for stroke and nerve injuries.",
    city: "Faridabad",
    is_active: true
  },
  {
    slug: "chronic-pain-management",
    service_name: "Chronic Pain Management",
    short_summary: "Effective strategies to manage and reduce long-term pain for a better quality of life.",
    symptoms: ["Back Pain", "Neck Pain", "Arthritis"],
    hero_image_prompt: "Realistic medical scene: physiotherapist treating upper back and neck pain of a patient in a professional clinic, Indian setting, therapeutic atmosphere",
    card_image_prompt: "Therapist treating upper back and neck pain",
    faq_json: [],
    seo_title: "Chronic Pain Management Faridabad | Back & Neck Pain",
    seo_description: "Relieve chronic pain with expert physiotherapy in Faridabad.",
    city: "Faridabad",
    is_active: true
  },
  {
    slug: "pre-post-surgery-rehab",
    service_name: "Pre & Post Surgery Rehabilitation",
    short_summary: "Optimizing surgical outcomes through targeted pre-hab and post-operative recovery.",
    symptoms: ["Post-Op Stiffness", "Reduced Mobility", "Muscle Atrophy"],
    hero_image_prompt: "Realistic medical scene: physiotherapist helping a senior patient with leg movement exercises after surgery, Indian clinic setting, supportive environment",
    card_image_prompt: "Therapist helping senior patient leg movement after surgery",
    faq_json: [],
    seo_title: "Post Surgery Rehab Faridabad | Knee & Hip Replacement Recovery",
    seo_description: "Fast-track your recovery after surgery with specialized rehab in Faridabad.",
    city: "Faridabad",
    is_active: true
  },
  {
    slug: "orthopedic-rehabilitation",
    service_name: "Orthopedic Rehabilitation",
    short_summary: "Restoring function and mobility for bone, joint, and soft tissue conditions.",
    symptoms: ["Fractures", "Joint Replacements", "Spinal Issues"],
    hero_image_prompt: "Realistic medical scene: knee joint mobility physiotherapy treatment in a modern Indian clinic, professional therapist, high detail",
    card_image_prompt: "Knee joint mobility physiotherapy treatment",
    faq_json: [],
    seo_title: "Orthopedic Physiotherapy Faridabad | Joint & Bone Care",
    seo_description: "Expert orthopedic rehab in Faridabad for fractures and joint issues.",
    city: "Faridabad",
    is_active: true
  }
];

startServer();
