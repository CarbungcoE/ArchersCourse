import { describe, expect, it } from "vitest";
import { filterCourses, mockCourses } from "../data/mock-courses";

describe("filterCourses", () => {
  it("matches course codes and college names without case sensitivity", () => {
    expect(filterCourses(mockCourses, "ccicomp").map(({ code }) => code)).toEqual(["CCICOMP"]);
    expect(filterCourses(mockCourses, "computer studies")).toHaveLength(2);
  });

  it("returns all courses for an empty query and none for an unmatched query", () => {
    expect(filterCourses(mockCourses, "  ")).toEqual(mockCourses);
    expect(filterCourses(mockCourses, "biology")).toEqual([]);
  });
});
