import { useId, useRef, useState, type ComponentProps, type ReactNode } from "react";
import styles from "./home.module.css";

const icons = {
  home: <path d="m3 10 9-7 9 7v9.5a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 19.5z M9 21v-9h6v9" />,
  plus: <path d="M12 5v14M5 12h14" />,
  pencil: <path d="m4 16 11.5-11.5a2 2 0 0 1 2.8 0l1.2 1.2a2 2 0 0 1 0 2.8L8 20H4z M14 6l4 4" />,
  reply: <path d="m9 5-6 6 6 6m-6-6h11a5 5 0 0 1 5 5v3" />,
  list: <path d="M9 6h12M9 12h12M9 18h12M3 6h.01M3 12h.01M3 18h.01" />,
  bell: <path d="M10 20a2 2 0 0 0 4 0M4 17h16c-2-2-2.5-4-2.5-7a5.5 5.5 0 0 0-11 0c0 3-.5 5-2.5 7z" />,
  book: <path d="M6 3h13v18H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM4 17c0-1.1.9-2 2-2h13" />,
  ellipsis: <><circle cx="12" cy="3" r="1.45" /><circle cx="12" cy="12" r="1.45" /><circle cx="12" cy="21" r="1.45" /></>,
  chevron: <path d="m6 15 6-6 6 6" />,
  arrowUp: <path d="M12 20V4m-7 7 7-7 7 7" />,
  difficulty: <path d="M5 21v-5m7 5V11m7 10V4" />,
  search: <><circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 4 4" /></>,
  menu: <path d="M4 6h16M4 12h16M4 18h16" />,
  close: <path d="m6 6 12 12M18 6 6 18" />,
};

export type HomeIconName = keyof typeof icons;

export function HomeIcon({ name, className }: { name: HomeIconName; className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true" focusable="false">
      {icons[name]}
    </svg>
  );
}

type HomeButtonProps = ComponentProps<"button"> & {
  icon?: HomeIconName;
  variant?: "ghost" | "primary" | "outline";
};

export function HomeButton({ children, className = "", icon = "plus", variant = "ghost", ...props }: HomeButtonProps) {
  return (
    <button type="button" className={`${styles.action} ${styles[variant]} ${className}`} {...props}>
      <HomeIcon name={icon} />
      <span>{children}</span>
    </button>
  );
}

export function HomePopover({ label, trigger, triggerClassName, children }: {
  label: string;
  trigger: ReactNode;
  triggerClassName: string;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);

  return (
    <div className={styles.popover} onBlur={(event) => {
      if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
    }} onKeyDown={(event) => {
      if (open && event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        triggerRef.current?.focus();
      }
    }}>
      <button type="button" ref={triggerRef} className={triggerClassName}
        aria-label={label} aria-controls={panelId} aria-expanded={open}
        onClick={() => setOpen((value) => !value)}>
        {trigger}
      </button>
      <div id={panelId} className={styles.popoverPanel} hidden={!open}>{children}</div>
    </div>
  );
}
