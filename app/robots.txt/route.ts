export async function GET(request: Request) {
  const { origin } = new URL(request.url);

  const lines = [
    "# robots.txt for Viet My Vibe Code 2025 — Vietnam Programming Competition",
    "User-agent: *",
    "Allow: /",
    "Disallow: /api/",
    "Disallow: /admin/",
    "Disallow: /private/",
    "",
    "User-agent: Googlebot",
    "Allow: /",
    "",
    "User-agent: GPTBot",
    "Allow: /",
    "User-agent: ChatGPT-User",
    "Allow: /",
    "",
    "User-agent: ClaudeBot",
    "Allow: /",
    "",
    `Sitemap: ${origin}/sitemap.xml`,
  ].join("\n");

  return new Response(lines, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
