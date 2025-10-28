// Registration form URL from environment variables
export const REGISTRATION_URL =
  process.env.NEXT_PUBLIC_REGISTRATION_URL || "#register";

// Check if registration URL is external (starts with http:// or https://)
export const isExternalRegistration = REGISTRATION_URL.startsWith("http");
