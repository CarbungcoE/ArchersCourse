"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { HomeIcon } from "../../home/home-controls";
import styles from "../courses.module.css";

export default function CourseRequestForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className={styles.formPage} aria-labelledby="request-heading">
      <h1 id="request-heading" className={styles.pageTitle}>Request to add a Course</h1>
      <form className={styles.formCard} onSubmit={handleSubmit} onChange={() => setSubmitted(false)}>
        <div className={styles.requestTopFields}>
          <label className={styles.field}>
            <span>Course Name</span>
            <input name="course" type="text" placeholder="Ex. ST-MATH, GEARTAP, IEFUNDA" required />
          </label>
          <label className={styles.field}>
            <span>College</span>
            <select name="college" required defaultValue="">
              <option value="" disabled>Choose College</option>
              <option>College of Computer Studies</option>
              <option>College of Arts and Sciences</option>
              <option>College of Engineering</option>
            </select>
          </label>
        </div>

        <label className={`${styles.field} ${styles.fullField}`}>
          <span>Course Information</span>
          <textarea name="information" placeholder="What should we know before adding this course?" required />
        </label>
        <label className={`${styles.field} ${styles.fullField}`}>
          <span>Proof of Course Existence</span>
          <input name="proof" type="url" placeholder="Ex. Google Drive Flowchart Link" required />
        </label>

        <div className={styles.formActions}>
          <Link href="/courses" className={styles.cancelButton}>Cancel</Link>
          <button type="submit" className={styles.submitButton}>
            <HomeIcon name="plus" />
            Submit Request
          </button>
        </div>
        {submitted && (
          <p className={styles.formNotice} role="status" aria-live="polite">
            Demo only: this course request has not been submitted or saved.
          </p>
        )}
      </form>
    </section>
  );
}
