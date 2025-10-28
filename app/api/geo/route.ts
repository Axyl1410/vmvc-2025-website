import { NextResponse } from "next/server";

export function GET(request: Request) {
  // Check if request is from Vietnam
  const countryHeader =
    request.headers.get("x-vercel-ip-country") ||
    request.headers.get("x-country-code") ||
    request.headers.get("cf-ipcountry") ||
    "";

  let country = countryHeader.toUpperCase();

  // Default to Vietnam for SEO targeting Vietnamese market
  if (!country) {
    country = "VN";
  }

  // Always return Vietnam settings for SEO
  const currency = "VND";
  const region = "VIETNAM";

  return NextResponse.json({
    country: country || "VN",
    region,
    currency,
  });
}
