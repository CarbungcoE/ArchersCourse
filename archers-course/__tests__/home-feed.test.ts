import { describe, expect, it } from "vitest";
import { filterReviews, toggleReviewVote } from "../app/home/feed-state";
import { mockReviews } from "../data/mock-reviews";

describe("home feed", () => {
  it("matches course names and tags without regard to case or surrounding spaces", () => {
    expect(filterReviews(mockReviews, "  DATABASE SYSTEMS  ").map(({ id }) => id)).toEqual(["database-systems"]);
    expect(filterReviews(mockReviews, "#groupProject").map(({ id }) => id))
      .toEqual(["database-systems", "software-engineering"]);
    expect(filterReviews(mockReviews, "")).toBe(mockReviews);
  });

  it("adds and removes a single vote without changing the previous state", () => {
    const original = new Set(["database-systems"]);
    const voted = toggleReviewVote(original, "data-structures");

    expect([...voted]).toEqual(["database-systems", "data-structures"]);
    expect([...toggleReviewVote(voted, "data-structures")]).toEqual(["database-systems"]);
    expect([...original]).toEqual(["database-systems"]);
  });
});
