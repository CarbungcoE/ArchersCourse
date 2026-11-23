import { isPagesBuild } from "@/utils/deployment";
import PagesSessionRedirect from "../components/login/pages-session-redirect";

export default function HomePage() {
  return <main>{isPagesBuild && <PagesSessionRedirect requireSession />}</main>;
}
