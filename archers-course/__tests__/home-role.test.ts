import { describe, expect, it } from "vitest";
import { getHomeRole } from "../app/home/home-role";

describe("Home Page account role", () => {
  it("uses the admin role from trusted account metadata", () => {
    expect(getHomeRole({ app_metadata: { role: "admin" } })).toBe("admin");
  });

  it.each([null, {}, { app_metadata: {} }, { app_metadata: { role: "user" } },
    { app_metadata: { role: "ADMIN" } }, { app_metadata: { role: true } }])(
    "defaults to the regular view for %j",
    (account) => expect(getHomeRole(account)).toBe("user"),
  );

  it("ignores roles supplied in editable profile metadata or the top-level role", () => {
    const account = { role: "admin", user_metadata: { role: "admin" }, app_metadata: {} };
    expect(getHomeRole(account)).toBe("user");
  });
});
