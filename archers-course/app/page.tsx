import Image from "next/image";
import { basePath, isPagesBuild } from "@/utils/deployment";
import LoginIntro from "./components/login/login-intro";
import PagesSessionRedirect from "./components/login/pages-session-redirect";
import SignInCard from "./components/login/sign-in-card";

export default function LoginPage() {
  return (
    <div className="login-shell mx-auto min-h-dvh">
      {isPagesBuild && <PagesSessionRedirect requireSession={false} />}
      <header className="flex items-center gap-[0.9375rem] pt-[1.125rem]" aria-label="ArchersCourse">
        <Image src={`${basePath}/login/brand-book.svg`} width={50} height={50} alt="" priority className="shrink-0" />
        <span className="text-2xl font-extrabold">ArchersCourse</span>
      </header>
      <main className="login-main grid items-start">
        <LoginIntro />
        <SignInCard />
      </main>
    </div>
  );
}
