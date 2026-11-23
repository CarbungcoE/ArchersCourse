"use client";

import { createClient } from "@/utils/supabase/client";
import { basePath, isPagesBuild } from "@/utils/deployment";
import Image from "next/image";

export default function SignInCard() {

  async function handleGoogleSignIn() {
    const supabase = createClient();
    if (!supabase) {
      alert("Google sign-in is unavailable because Supabase hasn’t been configured for this deployment.");
      return;
    }

    const callbackPath = isPagesBuild ? "/auth/callback/" : "/auth/callback";

    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}${basePath}${callbackPath}`,
        queryParams: {
          prompt: "select_account",
          hd: "dlsu.edu.ph",
        },
      },
    });

    if (error) {
      console.error("Google sign-in failed:", error.message);
      alert("Unable to start Google sign-in. Please try again.");
    }
  }

  return (
    <section aria-labelledby="sign-in-heading" className="sign-in-card w-full rounded-[1.25rem] border border-border bg-white px-6 pt-12 pb-14 text-center">
      <Image src={`${basePath}/login/sign-in-book.svg`} width={72} height={72} alt="" className="mx-auto" />
      <h2 id="sign-in-heading" className="mt-4 text-[clamp(1.5rem,2.5vw,2.25rem)] leading-[1.21] font-semibold tracking-[-0.025em]">
        Welcome to ArchersCourse
      </h2>
      <p className="mt-[1.125rem] text-base leading-[1.21] text-muted">
        Sign in using your DLSU Google account.
      </p>
      <button type="button" onClick={handleGoogleSignIn} className="sign-in-button mt-[3.4375rem] flex min-h-[3.625rem] w-full cursor-pointer items-center justify-center gap-3 rounded-[0.625rem] bg-foreground px-4 py-3 text-base leading-tight font-semibold text-background transition-colors hover:bg-zinc-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent active:bg-zinc-700">
        <Image src={`${basePath}/login/google.png`} width={20} height={20} alt="" />
        Continue with Google
      </button>
      <Image src={`${basePath}/login/divider.svg`} width={479} height={1} alt="" className="sign-in-divider mt-[3.5rem] h-px w-full" />
      <p className="sign-in-note mt-[3.0625rem] text-sm leading-[1.21] text-muted">
        Use your school-provided DLSU Google account<br className="block" /> to access ArchersCourse.
      </p>
    </section>
  );
}
