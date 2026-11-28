"use client";

import { useEffect, useState, type ReactNode } from "react";
import type { Review } from "@/data/mock-reviews";
import { basePath } from "@/utils/deployment";
import { createClient } from "@/utils/supabase/client";
import HomeFeed from "./home-feed";
import { getHomeRole, type HomePage, type HomeRole } from "./home-role";

export default function HomeAccount({ reviews, allowAnonymousPreview, activePage = "home", children }: {
  reviews: readonly Review[];
  allowAnonymousPreview: boolean;
  activePage?: HomePage;
  children?: ReactNode;
}) {
  const [role, setRole] = useState<HomeRole>("user");

  useEffect(() => {
    function handleSignedOut() {
      if (!allowAnonymousPreview) window.location.replace(`${basePath}/`);
    }

    const supabase = createClient();
    if (!supabase) {
      handleSignedOut();
      return;
    }

    let verification = 0;
    let timer: ReturnType<typeof setTimeout> | undefined;

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      const currentVerification = ++verification;
      clearTimeout(timer);
      setRole("user");

      if (!session) {
        handleSignedOut();
        return;
      }

      // Let Supabase finish notifying its subscribers before making another auth call.
      timer = setTimeout(async () => {
        try {
          const { data, error } = await supabase.auth.getUser(session.access_token);
          if (currentVerification === verification && !error && data.user?.id === session.user.id) {
            setRole(getHomeRole(data.user));
          }
        } catch {
          // If account verification fails, the regular view stays active.
        }
      }, 0);
    });

    return () => {
      verification += 1;
      clearTimeout(timer);
      subscription.unsubscribe();
    };
  }, [allowAnonymousPreview]);

  return <HomeFeed reviews={reviews} role={role} activePage={activePage}>{children}</HomeFeed>;
}
