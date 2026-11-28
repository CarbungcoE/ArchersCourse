"use client";

import Link from "next/link";
import { filterCourses, mockCourses } from "@/data/mock-courses";
import { HomeIcon } from "../home/home-controls";
import { useHomeSearch } from "../home/home-feed";
import styles from "./courses.module.css";

export default function CoursesList() {
  const { query } = useHomeSearch();
  const courses = filterCourses(mockCourses, query);

  return (
    <section className={styles.coursesContent} aria-labelledby="courses-heading">
      <h1 id="courses-heading" className="sr-only">Courses</h1>
      {courses.length ? (
        <ol className={styles.courseList}>
          {courses.map((course) => (
            <li key={course.id}>
              <Link href="/courses/new-review" className={styles.courseCard}
                aria-label={`Write a review for ${course.code}`}>
                <span className={styles.courseDetails}>
                  <span className={styles.courseCode}>{course.code}</span>
                  <span className={styles.college}>
                    <HomeIcon name="book" />
                    {course.college}
                  </span>
                </span>
                <span className={styles.reviewCount}>
                  <strong>{course.reviewCount}</strong>
                  <span> reviews</span>
                </span>
              </Link>
            </li>
          ))}
        </ol>
      ) : (
        <p className={styles.emptyCourses} role="status">No courses match your search.</p>
      )}
    </section>
  );
}
