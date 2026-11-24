import Link from "next/link";
import { HomeButton, HomeIcon, type HomeIconName } from "./home-controls";
import type { HomeRole } from "./home-role";
import styles from "./home.module.css";

const navigation: readonly { label: string; icon: HomeIconName }[] = [
  { label: "Courses", icon: "book" },
  { label: "Add a Course", icon: "plus" },
];

export function HomeSidebar({ role, onNavigate }: {
  role: HomeRole;
  onNavigate?: () => void;
}) {
  return (
    <div className={styles.sidebarContent}>
      <div>
        <div className={styles.compose}>
          <HomeButton variant="primary" aria-disabled="true">New Course Review</HomeButton>
        </div>
        <nav aria-label="Main navigation" className={styles.navigation}>
          <Link href="/home" aria-current="page" className={`${styles.action} ${styles.outline}`} onClick={onNavigate}>
            <HomeIcon name="home" />
            <span>Home</span>
          </Link>
          {navigation.map(({ label, icon }) => (
            <HomeButton key={label} icon={icon} aria-disabled="true">{label}</HomeButton>
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
