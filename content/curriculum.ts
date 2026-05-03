export type Lesson = {
  title: string
}

export type Module = {
  id: number
  title: string
  description: string
  lessonCount: number
  lessons: Lesson[]
}

// TODO: Replace with final curriculum copy
export const curriculum: Module[] = [
  {
    id: 1,
    title: "AI Fundamentals for the Workplace",
    description:
      "Understand how modern AI systems work and where they fit in daily workflows — no technical background needed.",
    lessonCount: 6,
    lessons: [
      { title: "What AI can (and can't) do today" },
      { title: "How large language models work" },
      { title: "Prompting basics: inputs and outputs" },
      { title: "Understanding limitations and hallucinations" },
      { title: "Data privacy and responsible use" },
      { title: "Your first AI-assisted task" },
    ],
  },
  {
    id: 2,
    title: "Prompting for Professional Work",
    description:
      "Write clear, effective prompts that produce useful, consistent results across any AI tool.",
    lessonCount: 8,
    lessons: [
      { title: "The anatomy of a great prompt" },
      { title: "Role, context, and format" },
      { title: "Common pitfalls and how to avoid them" },
      { title: "Iterating on outputs" },
      { title: "Multi-step prompting" },
      { title: "Prompts for research and analysis" },
      { title: "Prompts for writing and editing" },
      { title: "Building a personal prompt library" },
    ],
  },
  {
    id: 3,
    title: "AI Tools by Function",
    description:
      "Hands-on walkthroughs of the leading AI tools across email, docs, data, presentations, and more.",
    lessonCount: 7,
    lessons: [
      { title: "AI for email and communication" },
      { title: "AI for document creation and editing" },
      { title: "AI for data analysis and reporting" },
      { title: "AI for research and synthesis" },
      { title: "AI for presentations and visuals" },
      { title: "AI for project planning" },
      { title: "Choosing the right tool for the job" },
    ],
  },
  {
    id: 4,
    title: "Workflow Integration & Automation",
    description:
      "Build repeatable AI-powered workflows that save real time without creating new overhead.",
    lessonCount: 6,
    lessons: [
      { title: "Mapping your current workflow" },
      { title: "Identifying automation opportunities" },
      { title: "No-code AI automation tools" },
      { title: "Building your first AI workflow" },
      { title: "Quality control and review loops" },
      { title: "Scaling across your team" },
    ],
  },
  {
    id: 5,
    title: "AI Strategy for Teams & Leaders",
    description:
      "Roll out AI across your organization thoughtfully — governance, culture change, and measuring ROI.",
    lessonCount: 5,
    lessons: [
      { title: "Building an AI policy that actually works" },
      { title: "Running a pilot with your team" },
      { title: "Measuring AI ROI" },
      { title: "Change management and buy-in" },
      { title: "Staying current as AI evolves" },
    ],
  },
]
