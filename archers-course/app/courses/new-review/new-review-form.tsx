"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { HomeIcon } from "../../home/home-controls";
import styles from "../courses.module.css";

const courseOptions = ["CCICOMP", "CCDSALG"];
const difficultyOptions = Array.from({ length: 10 }, (_, index) => index + 1);

export default function NewReviewForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className={styles.formPage} aria-labelledby="review-heading">
      <h1 id="review-heading" className={styles.pageTitle}>Create Course Review</h1>
      <form className={styles.formCard} onSubmit={handleSubmit} onChange={() => setSubmitted(false)}>
        <div className={styles.reviewTopFields}>
          <label className={styles.field}>
            <span>Course Name</span>
            <select name="course" required defaultValue="">
              <option value="" disabled>Choose a Course</option>
              {courseOptions.map((course) => <option key={course} value={course}>{course}</option>)}
            </select>
          </label>
          <label className={styles.field}>
            <span>Review Title</span>
            <input name="title" type="text" placeholder="Set Review Title" required />
          </label>
        </div>

        <div className={styles.reviewMetaFields}>
          <label className={styles.field}>
            <span>College</span>
            <select name="college" required defaultValue="">
              <option value="" disabled>Choose College</option>
              <option>College of Computer Studies</option>
              <option>College of Arts and Sciences</option>
              <option>College of Engineering</option>
            </select>
          </label>
          <label className={styles.field}>
            <span>Difficulty Rating</span>
            <select name="difficulty" required defaultValue="">
              <option value="" disabled>Set Difficulty Rating</option>
              {difficultyOptions.map((rating) => <option key={rating} value={rating}>{rating}</option>)}
            </select>
          </label>
        </div>

        <label className={`${styles.field} ${styles.fullField}`}>
          <span>Review</span>
          <textarea name="review" placeholder="What do you wanna let others know?" required />
        </label>
        <label className={`${styles.field} ${styles.fullField}`}>
          <span>Tags</span>
          <input name="tags" type="text" placeholder="#Example_tag, #example_tag_2" />
        </label>

        <div className={styles.formActions}>
          <Link href="/courses" className={styles.cancelButton}>Cancel</Link>
          <button type="submit" className={styles.submitButton}>
            <HomeIcon name="plus" />
            Create Review
          </button>
        </div>
        {submitted && (
          <p className={styles.formNotice} role="status" aria-live="polite">
            Demo only: this review has not been submitted or saved.
          </p>
        )}
      </form>
    </section>
  );
}
