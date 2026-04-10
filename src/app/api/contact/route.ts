import { NextResponse } from "next/server";

type Body = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
};

export async function POST(request: Request) {
  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const name = body.name?.trim();
  const email = body.email?.trim();
  const message = body.message?.trim();
  const phone = body.phone?.trim();

  if (!name || !email || !message) {
    return NextResponse.json({ ok: false, error: "validation" }, { status: 400 });
  }

  const key = process.env.WEB3FORMS_ACCESS_KEY;
  if (!key) {
    return NextResponse.json({ ok: false, error: "missing_config" }, { status: 503 });
  }

  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      access_key: key,
      subject: "CompassPoint Advisory - website inquiry",
      name,
      email,
      phone: phone || "",
      message,
    }),
  });

  const data = (await res.json()) as { success?: boolean };
  if (!res.ok || !data.success) {
    return NextResponse.json({ ok: false, error: "upstream" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
