import { LearningItem } from "@/types";

export const LEARNING_DATA: LearningItem[] = [
  {
    title: "Production Agents with the Anthropic SDK",
    date: "Apr 2026",
    note: "Built a multi-step agent using tool use, prompt caching, and the Files API. Learned how to design tools, manage context windows, and keep long-running agent loops stable in production.",
    tags: ["Anthropic SDK", "Agents", "Tool Use", "Prompt Caching"],
  },
  {
    title: "RAG with pgvector + Embeddings",
    date: "Mar 2026",
    note: "Implemented retrieval-augmented generation over technical docs using Postgres pgvector. Compared chunking strategies and added hybrid search to balance semantic + keyword recall.",
    tags: ["pgvector", "Embeddings", "RAG", "Postgres"],
  },
  {
    title: "Streaming UIs with the Vercel AI SDK",
    date: "Feb 2026",
    note: "Shipped a chat interface with streamed structured output, generative UI, and client-side tool calling. Learned how to keep token-by-token UIs responsive without flicker.",
    tags: ["AI SDK", "Streaming", "RSC", "Generative UI"],
  },
  {
    title: "Edge APIs with Hono on Cloudflare Workers",
    date: "Dec 2025",
    note: "Migrated a Node + Express API to Hono running on Cloudflare Workers. Worked through cold-start tradeoffs, Durable Objects for stateful endpoints, and edge-friendly database patterns.",
    tags: ["Hono", "Cloudflare Workers", "Edge", "Durable Objects"],
  },
  {
    title: "Bun + Drizzle for Type-Safe Backends",
    date: "Oct 2025",
    note: "Replaced Node + Prisma with Bun + Drizzle on a side project. Cut cold start in half, kept end-to-end type safety, and got cleaner SQL out of the deal.",
    tags: ["Bun", "Drizzle", "TypeScript", "SQL"],
  },
  {
    title: "Background Workers for Monitoring",
    date: "Aug 2025",
    note: "Experimented with uptime monitoring by scheduling background jobs in Node.js.",
    tags: ["Node.js", "Monitoring", "Workers", "Cron Jobs"],
  },
  {
    title: "Single Monorepo for Multiple Apps",
    date: "June 2025",
    note: "Learned how to use a single monorepo as backend for multiple apps, including React.js, React Native, and Expo.",
    tags: ["Monorepo", "Express.js", "React Native", "Bun"],
  },
  {
    title: "Prisma + Clerk Auth Integration",
    date: "Apr 2025",
    note: "Learned how to set up relational user data with Prisma while using Clerk for authentication in Next.js apps.",
    tags: ["Next.js", "Prisma", "Clerk"],
  },
];