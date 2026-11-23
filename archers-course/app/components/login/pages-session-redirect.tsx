"use client";

import { useEffect } from "react";
import { basePath } from "@/utils/deployment";
import { createClient } from "@/utils/supabase/client";

export default function PagesSessionRedirect({ requireSession }: { requireSession: boolean }) {
  useEffect(() => {
    let active = true;

    async function checkSession() {
      const supabase = createClient();
      const result = await supabase?.auth.getClaims();
      const signedIn = Boolean(result?.data?.claims);

      if (active && signedIn !== requireSession) {
        window.location.replace(`${basePath}${requireSession ? "/" : "/home/"}`);
      }
    }

    void checkSession();
    return () => { active = false; };
  }, [requireSession]);

  return null;
}
