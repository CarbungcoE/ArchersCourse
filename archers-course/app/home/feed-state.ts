import type { Review } from "@/data/mock-reviews";

export function filterReviews(reviews: readonly Review[], search: string) {
  const query = search.trim().toLowerCase();
  if (!query) return reviews;

  return reviews.filter((review) =>
    [review.course, review.title, review.author, review.courseType, review.body, ...review.tags]
      .some((field) => field.toLowerCase().includes(query)),
  );
}

export function toggleReviewVote(votedReviews: ReadonlySet<string>, id: string) {
  const next = new Set(votedReviews);
  if (next.has(id)) {
    next.delete(id);
  } else {
    next.add(id);
  }
  return next;
}
