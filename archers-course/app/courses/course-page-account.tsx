import type { ReactNode } from "react";
import { mockReviews } from "@/data/mock-reviews";
import { isPagesBuild } from "@/utils/deployment";
import HomeAccount from "../home/home-account";
import type { HomePage } from "../home/home-role";

type CoursePage = Exclude<HomePage, "home">;

export default function CoursePageAccount({ activePage, children }: {
  activePage: CoursePage;
  children: ReactNode;
}) {
  const allowAnonymousPreview = isPagesBuild && process.env.NODE_ENV === "development";

  return (
    <HomeAccount reviews={mockReviews} allowAnonymousPreview={allowAnonymousPreview} activePage={activePage}>
      {children}
    </HomeAccount>
  );
}
