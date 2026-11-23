import Image from "next/image";

const features = [
  { title: "Read Reviews", description: "Learn from others’ experiences.", icon: "read-reviews.svg", width: 20 },
  { title: "Write Reviews", description: "Share your own course experience.", icon: "write-reviews.svg", width: 20 },
  { title: "Plan Ahead", description: "Get insights on difficulty, workload, and more.", icon: "plan-ahead.svg", width: 16 },
];

export default function LoginIntro() {
  return (
    <section aria-labelledby="intro-heading" className="login-intro min-w-0">
      <h1 id="intro-heading" className="text-[clamp(2.125rem,4.167vw,3.75rem)] leading-[1.217] font-bold tracking-[-0.025em]">
        <span className="block">Review. Discover.</span>
        <span className="block">Plan Your <span className="text-accent">Courses.</span></span>
      </h1>
      <p className="mt-[1.25rem] text-lg leading-[1.21] font-medium text-muted">
        Read and share student experiences to prepare for your courses and make informed academic decisions.
      </p>
      <Image
        src="/login/course-planning-illustration.svg"
        width={800.385}
        height={475.927}
        alt="A student planning courses beside a board of notes."
        priority
        className="login-illustration mx-auto mt-[1.8125rem] h-auto w-[80.63%]"
      />
      <ul className="login-features mt-[2.6875rem] grid grid-cols-3 gap-3">
        {features.map((feature) => (
          <li key={feature.title} className="flex min-h-40 flex-col items-center rounded-[0.3125rem] border border-border bg-white px-2 pt-[1.1875rem] pb-4 text-center">
            <span className="flex size-10 items-center justify-center rounded-[0.3125rem] bg-[#d9d9d9]" aria-hidden="true">
              <Image src={`/login/${feature.icon}`} width={feature.width} height={20} alt="" />
            </span>
            <h2 className="mt-2 text-sm leading-tight font-bold">{feature.title}</h2>
            <p className="mt-1 text-xs leading-[1.21] text-muted">{feature.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
