import type { Review } from "@/data/mock-reviews";
import { HomeIcon, HomePopover } from "./home-controls";
import styles from "./home.module.css";

const formatDate = new Intl.DateTimeFormat("en-US", {
  month: "2-digit",
  day: "2-digit",
  year: "2-digit",
  timeZone: "UTC",
});

export function ReviewCard({ review, voted, onVote }: {
  review: Review;
  voted: boolean;
  onVote: () => void;
}) {
  const titleId = `review-${review.id}`;
  const voteCount = review.upvotes + Number(voted);

  return (
    <article aria-labelledby={titleId} className={styles.review}>
      <header className={styles.reviewHeader}>
        <span className={styles.avatar} aria-hidden="true" />
        <div className={styles.byline}>
          <span className={styles.author} title={review.author}>{review.author}</span>
          <span className={styles.studentId}>{review.studentId}</span>
        </div>
        <time dateTime={review.date} className={styles.date}>{formatDate.format(new Date(review.date))}</time>
        <HomePopover label={`Options for ${review.title}`} trigger={<HomeIcon name="ellipsis" />}
          triggerClassName={`${styles.iconButton} ${styles.reviewOptions}`}>
          <p className={styles.reviewOptionsMessage}>Review actions are unavailable.</p>
        </HomePopover>
      </header>

      <h2 id={titleId} className={styles.reviewHeading}>
        <span className={styles.courseName}>{review.course}</span>
        <span className={styles.reviewTitle}>{review.title}</span>
      </h2>

      <div className={styles.reviewMeta}>
        <span className={styles.courseType}><HomeIcon name="book" />{review.courseType}</span>
        <span className={styles.difficulty}><HomeIcon name="difficulty" />Difficulty Level <strong>{review.difficulty}/10</strong></span>
      </div>

      <p className={styles.reviewBody}>{review.body}</p>

      <footer className={styles.reviewFooter}>
        <button type="button" className={styles.vote} aria-label={`Upvote ${review.title}, ${voteCount} ${voteCount === 1 ? "vote" : "votes"}`}
          aria-pressed={voted} onClick={onVote}>
          <HomeIcon name="arrowUp" />
          <span>{voteCount} upvotes</span>
        </button>
        <div className={styles.tags}>
          <span>tags</span>
          <ul aria-label="Tags">{review.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
        </div>
      </footer>
    </article>
  );
}
