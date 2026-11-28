import Link from "next/link";
import { HomeButton, HomeIcon, type HomeIconName } from "./home-controls";
import type { HomePage, HomeRole } from "./home-role";
import styles from "./home.module.css";

const navigation: readonly { label: string; icon: HomeIconName; href: string; page: HomePage }[] = [
  { label: "Courses", icon: "book", href: "/courses", page: "courses" },
  { label: "Add a Course", icon: "plus", href: "/courses/add-course", page: "add-course" },
];

export function HomeSidebar({ role, onNavigate, activePage }: {
  role: HomeRole;
  onNavigate?: () => void;
  activePage: HomePage;
}) {
  return (
    <div className={styles.sidebarContent}>
      <div>
        <div className={styles.compose}>
          <Link href="/courses/new-review" aria-current={activePage === "new-review" ? "page" : undefined}
            className={`${styles.action} ${styles.primary}`} onClick={onNavigate}>
            <HomeIcon name="plus" />
            <span>New Course Review</span>
          </Link>
        </div>
        <nav aria-label="Main navigation" className={styles.navigation}>
          <Link href="/home" aria-current={activePage === "home" ? "page" : undefined}
            className={`${styles.action} ${activePage === "home" ? styles.outline : styles.ghost}`} onClick={onNavigate}>
            <HomeIcon name="home" />
            <span>Home</span>
          </Link>
          {navigation.map(({ label, icon, href, page }) => (
            <Link key={label} href={href} aria-current={activePage === page ? "page" : undefined}
              className={`${styles.action} ${activePage === page ? styles.outline : styles.ghost}`} onClick={onNavigate}>
              <HomeIcon name={icon} />
              <span>{label}</span>
            </Link>
          ))}
          {role === "admin" && <HomeButton icon="list" aria-disabled="true">Admin Management</HomeButton>}
        </nav>
      </div>
      <div className={styles.profile}>
        <span className={styles.avatar} aria-hidden="true" />
        <span className={styles.profileName} title="Firstname Middlename Lastname">Firstname Middlename Lastname</span>
        <HomeIcon name="chevron" className={styles.profileChevron} />
      </div>
    </div>
  );
}
