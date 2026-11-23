"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { basePath } from "@/utils/deployment";
import { createClient } from "@/utils/supabase/client";

async function completeSignIn() {
  const params = new URLSearchParams(window.location.search);
  const code = params.get("code");
  const supabase = createClient();
  if (!code || params.has("error") || !supabase) return false;

  const { data, error } = await supabase.auth.exchangeCodeForSession(code);
  return !error && Boolean(data.session);
}

export default function PagesAuthCallback() {
  const exchange = useRef<Promise<boolean> | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let active = true;
    // A PKCE authorization code can only be exchanged once.
    exchange.current ??= completeSignIn().catch(() => false);
    void exchange.current.then((signedIn) => {
      if (!active) return;

      if (signedIn) {
        window.location.replace(`${basePath}/home/`);
      } else {
        setFailed(true);
      }
    });

    return () => { active = false; };
  }, []);

  return (
    <main className="login-shell mx-auto py-10">
      <p role="status">{failed ? "Unable to complete Google sign-in." : "Completing Google sign-in…"}</p>
      {failed && <Link href="/" className="underline">Return to sign in</Link>}
    </main>
  );
}
