import { SmtpClient } from "npm:smtp@0.1.2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

const TO_EMAIL = "themudflapguy@gmail.com";

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  try {
    const quote = await req.json();

    const client = new SmtpClient({
      connection: {
        hostname: Deno.env.get("SMTP_HOST") ?? "",
        port: Number(Deno.env.get("SMTP_PORT") ?? "587"),
        tls: true,
      },
      content_encoding: "7bit",
    });

    await client.connect();
    await client.auth({
      username: Deno.env.get("SMTP_USER") ?? "",
      password: Deno.env.get("SMTP_PASS") ?? "",
    });

    const vehicleLabel: Record<string, string> = {
      "heavy-duty-truck": "Heavy-duty Truck",
      "light-duty-truck": "Light Duty Truck",
      "box-truck": "Box Truck",
      "trailer": "Trailer",
      "other": "Other",
    };

    const timelineLabel: Record<string, string> = {
      asap: "ASAP",
      "1-2-weeks": "1-2 Weeks",
      "1-month": "Within 1 Month",
      flexible: "Flexible",
    };

    const htmlBody = `
      <h2>New Quote Request</h2>
      <table style="border-collapse:collapse;width:100%;max-width:500px">
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Name</td><td style="padding:8px;border:1px solid #ddd">${quote.name ?? ""}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Email</td><td style="padding:8px;border:1px solid #ddd">${quote.email ?? ""}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Phone</td><td style="padding:8px;border:1px solid #ddd">${quote.phone ?? ""}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Company</td><td style="padding:8px;border:1px solid #ddd">${quote.company ?? "—"}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Vehicle Type</td><td style="padding:8px;border:1px solid #ddd">${vehicleLabel[quote.vehicleType ?? ""] ?? quote.vehicleType ?? "—"}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Quantity</td><td style="padding:8px;border:1px solid #ddd">${quote.quantity ?? "—"}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Material</td><td style="padding:8px;border:1px solid #ddd">${quote.customBranding ?? "—"}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Timeline</td><td style="padding:8px;border:1px solid #ddd">${timelineLabel[quote.timeline ?? ""] ?? quote.timeline ?? "—"}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Message</td><td style="padding:8px;border:1px solid #ddd">${quote.message ?? "—"}</td></tr>
      </table>
      <p style="margin-top:16px;color:#666">Submitted at ${new Date().toLocaleString()}</p>
    `;

    await client.send({
      from: Deno.env.get("SMTP_FROM") ?? Deno.env.get("SMTP_USER") ?? "",
      to: TO_EMAIL,
      subject: `New Quote Request from ${quote.name ?? "Unknown"}`,
      content: htmlBody,
      html: htmlBody,
    });

    await client.close();

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Email send error:", err);
    return new Response(JSON.stringify({ error: "Failed to send email" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
