import type { Metadata } from "next";
import CoursePageAccount from "../course-page-account";
import NewReviewForm from "./new-review-form";

export const metadata: Metadata = { title: "New Course Review | ArchersCourse" };

export default function NewReviewPage() {
  return (
    <CoursePageAccount activePage="new-review">
      <NewReviewForm />
    </CoursePageAccount>
  );
}
