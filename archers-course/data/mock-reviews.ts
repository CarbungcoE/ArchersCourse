export type Review = {
  id: string;
  author: string;
  studentId: string;
  date: string;
  course: string;
  title: string;
  courseType: string;
  difficulty: number;
  body: string;
  upvotes: number;
  tags: readonly string[];
};

export const mockReviews: readonly Review[] = [
  {
    id: "data-structures",
    author: "LAST NAME, Firstname M.I",
    studentId: "ID 12X",
    date: "2026-01-01",
    course: "Data Structures",
    title: "Practice before the projects",
    courseType: "Computer Science - General",
    difficulty: 9,
    body: "Tracing the data structures by hand helped me more than rereading the slides. The first machine project looks manageable until you have to handle all the edge cases, so budget a few evenings for testing. I started writing small test cases as soon as we covered each topic and kept them for the next project. The labs build on each other, and asking questions early made the later problem sets much easier to follow.",
    upvotes: 1,
    tags: ["#Prof-dependent", "#Hard_Pre-req", "#2_Hands-on", "#1_MP", "#Needed4Thesis"],
  },
  {
    id: "database-systems",
    author: "DELA CRUZ, Mika A.",
    studentId: "ID 124",
    date: "2026-01-01",
    course: "Database Systems",
    title: "The labs made it click",
    courseType: "Computer Science - General",
    difficulty: 7,
    body: "Try every SQL query on a small dataset before you submit the lab. Joins and aggregation were easier once I could predict the result by hand. The group project takes longer than the individual assignments because you have to agree on the schema first. We set aside time to check the constraints and it saved us a lot of rework toward the end of the term.",
    upvotes: 1,
    tags: ["#SQL", "#Hands-on", "#GroupProject"],
  },
  {
    id: "computer-networks",
    author: "SANTOS, Alex R.",
    studentId: "ID 123",
    date: "2025-12-19",
    course: "Computer Networks",
    title: "Start the labs early",
    courseType: "Computer Science - General",
    difficulty: 8,
    body: "The theory is manageable, but debugging a network setup can take most of a lab session. Keep a checklist for the commands you run and write down what changed when something starts working.",
    upvotes: 4,
    tags: ["#Lab-heavy", "#Hands-on", "#WeeklyQuizzes"],
  },
  {
    id: "technical-writing",
    author: "REYES, Jamie L.",
    studentId: "ID 125",
    date: "2025-12-12",
    course: "Technical Writing",
    title: "Use the revision time",
    courseType: "General Education",
    difficulty: 4,
    body: "The drafts are short. Bring a specific question to peer review and you will get much better feedback.",
    upvotes: 0,
    tags: ["#PeerReview", "#Writing-heavy"],
  },
  {
    id: "software-engineering",
    author: "VILLANUEVA, Joaquin Sebastian M.",
    studentId: "ID 124",
    date: "2025-12-08",
    course: "Software Engineering",
    title: "Keep the group project small",
    courseType: "Computer Science - General",
    difficulty: 6,
    body: "Choose a project you can demonstrate in a few minutes. We spent the first sprint getting everyone set up and agreeing on what the app needed to do, which gave us time for meaningful testing later. Splitting work by feature helped us avoid lengthy handoffs. Make the demo part of your weekly check-in so the whole team knows what is ready and what still needs attention.",
    upvotes: 6,
    tags: ["#GroupProject", "#OneMajorProject", "#Documentation"],
  },
  {
    id: "human-computer-interaction",
    author: "GARCIA, Sam T.",
    studentId: "ID 125",
    date: "2025-12-03",
    course: "Human–Computer Interaction",
    title: "Test the prototype with classmates",
    courseType: "Computer Science - Elective",
    difficulty: 5,
    body: "A quick test with three classmates surfaced the biggest problems in our prototype. Start with a few tasks and ask people to think out loud while they try them.",
    upvotes: 2,
    tags: ["#Design", "#UserTesting", "#Hands-on"],
  },
];
