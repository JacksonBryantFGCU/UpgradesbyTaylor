import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, phone, project, timeline, message } = req.body ?? {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: `"UBT Website" <${process.env.GMAIL_USER}>`,
    to: "upgradesbytaylor@gmail.com",
    replyTo: email,
    subject: `New inquiry from ${name} — ${project}`,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || "—"}`,
      `Project type: ${project}`,
      `Timeline: ${timeline}`,
      ``,
      message,
    ].join("\n"),
  });

  return res.status(200).json({ ok: true });
}
