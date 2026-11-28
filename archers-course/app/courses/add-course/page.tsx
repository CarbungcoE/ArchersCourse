import type { Metadata } from "next";
import CoursePageAccount from "../course-page-account";
import CourseRequestForm from "./course-request-form";

export const metadata: Metadata = { title: "Add a Course | ArchersCourse" };

export default function AddCoursePage() {
  return (
    <CoursePageAccount activePage="add-course">
      <CourseRequestForm />
    </CoursePageAccount>
  );
}
