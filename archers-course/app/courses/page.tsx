import type { Metadata } from "next";
import CoursePageAccount from "./course-page-account";
import CoursesList from "./courses-list";

export const metadata: Metadata = { title: "Courses | ArchersCourse" };

export default function CoursesPage() {
  return (
    <CoursePageAccount activePage="courses">
      <CoursesList />
    </CoursePageAccount>
  );
}
