import { NextResponse } from "next/server";

const SOUTH_ASIA = new Set(["IN", "PK", "BD"]);
const VIETNAM = new Set(["VN"]);

export async function GET(request: Request) {
  // Prefer Vercel country header; fall back to Accept-Language / timezone heuristics.
  const countryHeader =
    request.headers.get("x-vercel-ip-country") ||
    request.headers.get("x-country-code") ||
    request.headers.get("cf-ipcountry") ||
    "";

  let country = countryHeader.toUpperCase();

  // If no server-provided country, use very light heuristics from headers
  if (!country) {
    const acceptLang = request.headers.get("accept-language") || "";
    if (/-(IN|PK|BD|VN)\b/i.test(acceptLang)) {
      country = acceptLang.match(/-(IN|PK|BD|VN)\b/i)?.[1]?.toUpperCase() || "";
    }
  }

  const isVietnam = VIETNAM.has(country);
  const isSouthAsia = SOUTH_ASIA.has(country);

  let currency = "USD";
  let region = "OTHER";

  if (isVietnam) {
    currency = "VND";
    region = "VIETNAM";
  } else if (isSouthAsia) {
    currency = "INR";
    region = "SOUTH_ASIA";
  }

  return NextResponse.json({
    country: country || null,
    region,
    currency, // "VND", "INR", or "USD"
  });
}
