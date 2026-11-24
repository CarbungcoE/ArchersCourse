"use client";

import Image from "next/image";
import { useId, useRef, useState } from "react";
import type { Review } from "@/data/mock-reviews";
import { basePath } from "@/utils/deployment";
import { filterReviews, toggleReviewVote } from "./feed-state";
import { HomeIcon } from "./home-controls";
import type { HomeRole } from "./home-role";
import { HomeSidebar } from "./home-sidebar";
import styles from "./home.module.css";
import { ReviewCard } from "./review-card";

export default function HomeFeed({ reviews, role }: {
  reviews: readonly Review[];
  role: HomeRole;
}) {
  const [search, setSearch] = useState("");
  const [votedReviews, setVotedReviews] = useState<ReadonlySet<string>>(() => new Set());
  const [drawerOpen, setDrawerOpen] = useState(false);
  const drawer = useRef<HTMLDialogElement>(null);
  const drawerId = useId();
  const visibleReviews = filterReviews(reviews, search);

  function openDrawer() {
    drawer.current?.showModal();
    setDrawerOpen(true);
  }

  function closeDrawer() {
    drawer.current?.close();
  }

  return (
    <div className={styles.shell}>
      <header className={styles.topBar}>
        <div className={styles.brand}>
          <button type="button" className={`${styles.iconButton} ${styles.drawerTrigger}`} aria-label="Open navigation"
            aria-controls={drawerId} aria-expanded={drawerOpen} onClick={openDrawer}>
            <HomeIcon name="menu" />
          </button>
          <Image src={`${basePath}/login/brand-book.svg`} width={50} height={50} alt="" />
          <span>ArchersCourse</span>
        </div>
        <div className={styles.search} role="search">
          <HomeIcon name="search" />
          <input type="search" aria-label="Search ArchersCourse" placeholder="Search ArchersCourse"
            value={search} onChange={(event) => setSearch(event.target.value)} />
        </div>
      </header>

      <aside className={styles.desktopSidebar}><HomeSidebar role={role} /></aside>

      <main className={styles.feed}>
        <h1 className="sr-only">Home</h1>
        {visibleReviews.length ? (
          <ol aria-label="Course reviews" className={styles.reviewList}>
            {visibleReviews.map((review) => (
              <li key={review.id}>
                <ReviewCard review={review} voted={votedReviews.has(review.id)}
                  onVote={() => setVotedReviews((current) => toggleReviewVote(current, review.id))} />
              </li>
            ))}
          </ol>
        ) : <p role="status" className={styles.empty}>No reviews match your search.</p>}
      </main>

      <dialog id={drawerId} ref={drawer} aria-label="Navigation" className={styles.drawer}
        onClose={() => setDrawerOpen(false)} onClick={(event) => {
          if (event.target === event.currentTarget) closeDrawer();
        }}>
        <div className={styles.drawerInner}>
          <button type="button" className={`${styles.iconButton} ${styles.drawerClose}`} aria-label="Close navigation" onClick={closeDrawer}>
            <HomeIcon name="close" />
          </button>
          <HomeSidebar role={role} onNavigate={closeDrawer} />
        </div>
      </dialog>
    </div>
  );
}
