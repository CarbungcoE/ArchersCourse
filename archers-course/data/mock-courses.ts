export type Course = {
  id: string;
  code: string;
  college: string;
  reviewCount: number;
};

export const mockCourses: readonly Course[] = [
  {
    id: "ccicomp",
    code: "CCICOMP",
    college: "College of Computer Studies",
    reviewCount: 10,
  },
  {
    id: "ccdsalg",
    code: "CCDSALG",
    college: "College of Computer Studies",
    reviewCount: 12,
  },
];

export function filterCourses(courses: readonly Course[], search: string): Course[] {
  const query = search.trim().toLowerCase();
  if (!query) return [...courses];

  return courses.filter(({ code, college }) => `${code} ${college}`.toLowerCase().includes(query));
}
