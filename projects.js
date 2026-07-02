import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const LEADS_FILE = path.join(process.cwd(), "data", "leads.json");

async function readLeads() {
  try {
    const raw = await fs.readFile(LEADS_FILE, "utf-8");
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

async function writeLeads(leads) {
  await fs.writeFile(LEADS_FILE, JSON.stringify(leads, null, 2), "utf-8");
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, company, budget, message } = body || {};

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  }

  const lead = {
    id: Date.now().toString(36) + Math.random().toString(36).slice(2, 7),
    name: String(name).slice(0, 200),
    email: String(email).slice(0, 200),
    company: company ? String(company).slice(0, 200) : "",
    budget: budget ? String(budget).slice(0, 100) : "",
    message: String(message).slice(0, 5000),
    createdAt: new Date().toISOString(),
  };

  try {
    const leads = await readLeads();
    leads.push(lead);
    await writeLeads(leads);
  } catch (err) {
    console.error("Failed to persist lead:", err);
    return NextResponse.json(
      { error: "Could not save your message right now. Please try again." },
      { status: 500 }
    );
  }

  // Hook point: send email notification / push to CRM / trigger marketing
  // automation (e.g. Engage) here using the `lead` object above.

  return NextResponse.json({ success: true, id: lead.id }, { status: 201 });
}

export async function GET() {
  // Simple admin listing endpoint. Protect this in production
  // (auth header, IP allowlist, etc.) before deploying.
  const leads = await readLeads();
  return NextResponse.json({ leads });
}
