import type { Metadata } from "next";
import { mockReviews } from "@/data/mock-reviews";
import { isPagesBuild } from "@/utils/deployment";
import HomeAccount from "./home-account";

export const metadata: Metadata = { title: "Home | ArchersCourse" };

export default function HomePage() {
  const allowAnonymousPreview = isPagesBuild && process.env.NODE_ENV === "development";
  return <HomeAccount reviews={mockReviews} allowAnonymousPreview={allowAnonymousPreview} />;
}
