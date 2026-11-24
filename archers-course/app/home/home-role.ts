export type HomeRole = "user" | "admin";

export function getHomeRole(account: { app_metadata?: Record<string, unknown> } | null): HomeRole {
  return account?.app_metadata?.role === "admin" ? "admin" : "user";
}
