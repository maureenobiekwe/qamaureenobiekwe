import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import {
  Linkedin,
  Github,
  Mail,
  Download,
  ArrowRight,
  Lock,
  Quote,
  ChevronDown,
  ExternalLink,
  Menu,
  X,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maureen K. Obiekwe — Expert QA Engineer" },
      {
        name: "description",
        content:
          "QA Engineer specializing in marketplace platforms, AI products, API automation, performance, security and accessibility testing.",
      },
      { property: "og:title", content: "Kosisochukwu Maureen Obiekwe — Expert QA Engineer" },
      {
        property: "og:description",
        content:
          "I find the bugs that cost you users, revenue, and trust before your customers do.",
      },
    ],
    links: [
      {
        rel: "icon",
        type: "image/svg+xml",
        href: `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 36 36'><circle cx='18' cy='18' r='18' fill='%2314b8a6'/><text x='18' y='23' font-family='system-ui,sans-serif' font-size='13' font-weight='700' fill='white' text-anchor='middle'>MO</text></svg>`,
      },
    ],
  }),
  component: Portfolio,
});

const LINKEDIN = "https://www.linkedin.com/in/maureen-obiekwe/";
const GITHUB = "https://github.com/maureenobiekwe";
const EMAIL = "obiekwekosi32@gmail.com";
const RESUME =
  "https://docs.google.com/document/d/1ip9KjN6VKWRu6nRSZxCHHgvbZvQ5IvlfAfPO_apVgjk/edit?usp=sharing";

function ext(href: string) {
  return { href, target: "_blank", rel: "noopener noreferrer" } as const;
}

function SectionBanner({ title, id }: { title: string; id?: string }) {
  return (
    <div id={id} className="relative w-full teal-banner py-10 md:py-14 my-16">
      <div className="absolute inset-0 opacity-20 bg-dots pointer-events-none" />
      <h2 className="relative text-center text-3xl md:text-5xl font-bold tracking-tight">
        {title}
      </h2>
    </div>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#tools", label: "Tools" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border">
      <nav className="mx-auto max-w-7xl px-4 md:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <span className="size-9 rounded-full teal-banner grid place-items-center font-bold text-sm">
            MO
          </span>
          <span className="hidden sm:inline text-sm font-semibold">Maureen Obiekwe</span>
        </a>
        <ul className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-primary transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden md:flex items-center gap-3">
          <a
            {...ext(RESUME)}
            className="text-sm px-4 py-2 rounded-md border border-primary/50 text-primary hover:bg-primary/10 transition-colors inline-flex items-center gap-2"
          >
            <Download className="size-4" /> Resume
          </a>
          <a
            {...ext(LINKEDIN)}
            className="text-sm px-4 py-2 rounded-md teal-banner font-semibold hover:opacity-90 transition-opacity"
          >
            Hire Me
          </a>
        </div>
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 rounded-md hover:bg-secondary"
          aria-label="Toggle menu"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-4 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm py-1"
              >
                {l.label}
              </a>
            ))}
            <a {...ext(RESUME)} className="text-sm py-2 text-primary">
              Download Resume
            </a>
            <a {...ext(LINKEDIN)} className="text-sm py-2 teal-banner rounded-md text-center font-semibold">
              Hire Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  const stats = [
    "40+ Products Tested End-to-End",
    "4000+ Test Cases Written",
    "1k+ Bugs Documented",
    "6+ Years Experience",
  ];
  return (
    <section id="top" className="relative overflow-hidden pt-20 pb-24 md:pt-28 md:pb-32">
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="absolute inset-0 -z-10 bg-dots opacity-40" />
      <div className="mx-auto max-w-5xl px-4 md:px-8 text-center animate-fade-up">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-xs text-primary mb-6">
          <span className="size-2 rounded-full bg-primary animate-pulse" />
          Available for QA Engineer roles
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight">
          Kosisochukwu Maureen <span className="text-primary">Obiekwe</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-muted-foreground font-medium">
          Expert QA Engineer
        </p>
        <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-foreground/85 leading-relaxed">
          I find the bugs that cost you users, revenue, and trust before your customers do.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-2 md:gap-3">
          {stats.map((s) => (
            <span
              key={s}
              className="text-xs md:text-sm px-3 py-1.5 rounded-full glass text-foreground/90"
            >
              {s}
            </span>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#projects"
            className="px-6 py-3 rounded-md teal-banner font-semibold inline-flex items-center gap-2 hover:opacity-90 transition-opacity"
          >
            View Projects <ArrowRight className="size-4" />
          </a>
          <a
            {...ext(RESUME)}
            className="px-6 py-3 rounded-md border border-primary/50 text-primary hover:bg-primary/10 transition-colors inline-flex items-center gap-2"
          >
            <Download className="size-4" /> Download Resume
          </a>
          <a
            {...ext(LINKEDIN)}
            aria-label="LinkedIn"
            className="size-12 grid place-items-center rounded-md border border-border hover:border-primary hover:text-primary transition-colors"
          >
            <Linkedin className="size-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

function About() {
  const tools = [
    "Playwright","Postman","Newman","k6","Chrome DevTools","Lighthouse","axe DevTools",
    "WAVE","GitHub Actions","ClickUp","Jira","Linear","TestRail","BrowserStack",
    "Jam.dev","OWASP","SQL","curl","Google Sheets",
  ];
  return (
    <section id="about" className="mx-auto max-w-5xl px-4 md:px-8 py-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">About</h2>
      <p className="text-base md:text-lg leading-relaxed text-foreground/85">
        Detail-oriented QA Engineer with hands-on experience testing peer-to-peer marketplace
        platforms, AI-powered tools, and business advisory web products across web and mobile.
        I work across the full testing lifecycle from understanding FRD, TRD, PRDs to finding
        ambiguities before a line of code is written, to running k6 load tests against production
        APIs. Skilled in writing structured test cases with full requirements traceability,
        executing functional, regression, exploratory, API, security, accessibility, and
        performance testing, and logging clear, reproducible defects. Comfortable working
        directly with developers, PMs, and designers in Agile/Scrum environments to surface risk
        early, validate fixes, and protect the user experience before release. I also built a
        reusable QA methodology framework (the QA Master Guide) that any engineer can use to run
        quality on any product without a task brief.
      </p>
      <div className="mt-8 flex flex-wrap gap-2">
        {tools.map((t) => (
          <span
            key={t}
            className="text-xs px-3 py-1.5 rounded-full border border-border bg-secondary/40 text-foreground/80"
          >
            {t}
          </span>
        ))}
      </div>
    </section>
  );
}

type Job = { company: string; role: string; date: string; summary: string };
const JOBS: Job[] = [
  {
    company: "AfroTape Marketplace",
    role: "QA Engineer",
    date: "May 2026 – June 2026",
    summary: "Sole QA on a two-sided music industry marketplace handling real payments via Paystack.",
  },
  {
    company: "SharePact",
    role: "QA Engineer",
    date: "Jan 2025 – Feb 2026",
    summary: "End-to-end QA ownership for a P2P rental marketplace across web, iOS, and Android.",
  },
  {
    company: "Fate Round",
    role: "QA Engineer",
    date: "Jun 2023 – Present",
    summary: "Owned end-to-end QA for a real-time multiplayer party game platform with 24 browser-based game modes, WebSocket room synchronization, and zero-auth join flow.",
  },
  {
    company: "Anvila (HNG Internship)",
    role: "QA Engineer",
    date: "Mar 2026 – Jun 2026",
    summary: "Full QA lifecycle on an AI agent scaffolding platform with performance, security, and accessibility testing.",
  },
];

function Experience() {
  return (
    <section className="mx-auto max-w-5xl px-4 md:px-8">
      <SectionBanner id="experience" title="Work Experience" />
      <div className="relative pl-8 md:pl-12">
        <div className="absolute left-2 md:left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-border to-transparent" />
        {JOBS.map((j) => (
          <div key={j.company} className="relative mb-10">
            <div className="absolute -left-[26px] md:-left-[34px] top-1.5 size-3.5 rounded-full bg-primary ring-4 ring-background" />
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3 className="text-lg md:text-xl font-semibold">{j.company}</h3>
              <span className="text-primary text-sm font-medium">{j.role}</span>
              <span className="text-xs text-muted-foreground ml-auto">{j.date}</span>
            </div>
            <p className="mt-2 text-foreground/75">{j.summary}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

type Bug = { severity: "CRITICAL" | "HIGH"; text: string };
type DetailLink = { label: string; href: string };
type DetailBlock = { title: string; body: string; links?: DetailLink[]; bugs?: Bug[] };
type Project = {
  name: string;
  badge: string;
  description: string;
  types: string[];
  stats: string[];
  details: DetailBlock[];
  nda?: boolean;
};

const PROJECTS: Project[] = [
  {
    name: "AfroTape Marketplace",
    badge: "Professional",
    description:
      "Sole QA engineer on a two-sided marketplace connecting African music creatives with buyers, handling real Paystack payments, escrow, legally binding contracts, and provider payouts. Tested on production with no staging environment.",
    types: ["Functional", "API", "Security", "Performance", "Exploratory", "Regression"],
    stats: [
      "189 Requirements Extracted",
      "115 Test Cases",
      "25 Bugs (5 Critical)",
      "16 Modules Covered",
    ],
    details: [
      {
        title: "Test Plan & Requirements",
        body: "Self-directed the entire QA lifecycle from scratch: extracted 189 testable requirements from 4 product documents (PRD, FRD, TRD, Testing Guide), created 102 ClickUp tickets across 16 modules, and built a requirements traceability matrix with 100% coverage (189 requirements → 115 test cases).",
        links: [
          { label: "View Validation Sheet", href: "https://docs.google.com/spreadsheets/d/145fg5pGLGmH6otLHhmTP81bjGhYJuK4Qd6ewEglXaqo/edit?usp=drive_link" },
          { label: "View Performance Test Plan", href: "https://docs.google.com/document/d/1T6UX1fhmVOcH7awvgK-BU4IiG-WkP_5ASiVA2aueQd4/edit?usp=drive_link" },
          { label: "View Test Plan", href: "https://docs.google.com/document/d/1U1wnPgrjK2UFO8znBAI_hxiu_ey3iqTHo7-fNfncOSo/edit?usp=drive_link" },
        ],
      },
      {
        title: "Critical Bugs Found",
        body: "",
        bugs: [
          { severity: "CRITICAL", text: "Paystack card charge fails with 504 Gateway Timeout — blocks ALL payment testing" },
          { severity: "CRITICAL", text: "Booking amount sent to Paystack doesn't match checkout total (₦500 vs ₦21,800)" },
          { severity: "CRITICAL", text: "Contract not auto-generated after payment — entire fulfillment flow blocked" },
          { severity: "CRITICAL", text: "Studio calendar allows double-booking same room at same time" },
          { severity: "CRITICAL", text: "Split sheet submissions timeout on both Send and Save" },
        ],
        links: [
          { label: "View All Bug Reports", href: "https://docs.google.com/spreadsheets/d/1FiT15dYyOcaHge6iiW3YwBvxKQnVxi6P7J6sgCIGkWU/edit?usp=drive_link" },
        ],
      },
      {
        title: "Security Testing",
        body: "Cross-user authorization bypass attempts via URL manipulation and API probing (RLS confirmed), XSS injection testing in bio/listing/search fields, SQL injection in search, JWT decoded at jwt.io confirming no sensitive data leakage, multi-tab session invalidation testing (found zombie session state after logout), and identified email enumeration vulnerability in signup API.",
      },
      {
        title: "Performance",
        body: "Lighthouse audit: 33/100 score, 16.1s LCP (5× over FRD target), 5,630 KiB saveable image optimization, 251 KiB unused JavaScript, 10.5s main-thread blocking.",
      },
      {
        title: "Impact Story",
        body: "Traced a single Paystack payment bug to 30+ downstream blocked test cases across fulfillment, contracts, escrow, and withdrawals, documented each with root-cause traceability rather than marking them as untested.",
      },
    ],
  },
  {
    name: "Anvila — AI Agent Platform",
    badge: "Volunteer / Internship",
    description:
      "QA Engineer on Anvila, a platform that turns plain-English descriptions into structured, GitHub-ready AI agent packages with public registry browsing and a paid private-package tier via Stripe.",
    types: [
      "Functional","API","Security (OWASP)","Performance (k6)",
      "Accessibility (WCAG 2.1 AA)","Exploratory","Regression",
    ],
    stats: [
      "224 Test Cases",
      "90 Bugs Across 5 Categories",
      "15 OWASP Security Findings",
      "22 WCAG Accessibility Issues",
    ],
    details: [
      {
        title: "Test Plan",
        body: "Authored the MVP Test Plan covering 6 milestones: Authentication, Agent Generation Pipeline, GitHub Auto-Publishing, Registry & Explore, Privacy Tier (Stripe), and Skill Registry integration.",
        links: [{ label: "View Full Test Plan", href: "https://docs.google.com/document/d/18tTk4PZT2afN2N4xyB1gN-FeHTK0pmBxR4AhlT-ktvU/edit?usp=drive_link" }],
      },
      {
        title: "Requirements & Traceability",
        body: "Wrote 92 functional and security test cases for auth alone (AUTH-REQ-001 to 092), each mapped to a requirement ID and ClickUp ticket. Surfaced a release-blocking ambiguity between the TRD and ticket AC on cross-provider OAuth before testing began.",
        links: [{ label: "View Validation Sheet", href: "https://docs.google.com/spreadsheets/d/1Er1IRWFdcj09jjpYFSaAmAd89qN5Us6rq76y4PlzBZs/edit?usp=drive_link" }],
      },
      {
        title: "Bug Reports",
        body: "",
        bugs: [
          { severity: "HIGH", text: "Server accepts malformed email format (a@g.combj)" },
          { severity: "CRITICAL", text: "OAuth buttons completely unresponsive — authentication dead end" },
          { severity: "CRITICAL", text: "503 server crash from oversized payloads" },
          { severity: "HIGH", text: "JWT and internal UUIDs exposed in API response bodies" },
        ],
        links: [{ label: "View All Bug Reports", href: "https://docs.google.com/spreadsheets/d/1ztu8ehRV8C0TJfDVFrSjEdH4-3pxlvpDaXLEkauzoKA/edit?usp=drive_link" }],
      },
      {
        title: "API Automation & CI/CD",
        body: "Built an automated API regression suite in Postman with 14 chained requests across 4 end-to-end flows, runnable via Newman CLI with HTML reporting, integrated into GitHub Actions CI to run on every push.",
        links: [
          { label: "View Postman Collection", href: "https://docs.google.com/document/d/1CEnUaL6Poq06jXSZDrvMoXzkPMPa2syb8PaftUFejNA/edit?usp=drive_link" },
          { label: "View GitHub Repo", href: "https://github.com/maureenobiekwe/k6script" },
        ],
      },
      {
        title: "Security (OWASP)",
        body: "Independent API security assessment against the OWASP API Top 10 with 15 reproducible findings: missing rate limiting, stored XSS, SQL syntax in inputs, 503 crash from oversized payloads, JWT/UUID exposure. Anti-enumeration timing tests via curl on login, forgot-password, and resend-verification endpoints.",
      },
      {
        title: "Performance (k6)",
        body: "k6 load/stress/spike tests (50–100 concurrent users). Found: login API p95 of 7s at 50 users scaling linearly to 15s at 100 users. Lighthouse: 910ms TBT traced to a 69KB unsplit JS chunk.",
        links: [{ label: "View Performance Report", href: "https://docs.google.com/document/d/15qusHGrzjYGImeGzqFwIV21wSxvsvYfhfqWgm53XCMI/edit?usp=drive_link" }],
      },
      {
        title: "Accessibility (WCAG 2.1 AA)",
        body: "22 documented issues using axe DevTools, WAVE, keyboard navigation, and screen-reader testing. Each mapped to its WCAG criterion with impact per user group.",
      },
      {
        title: "Exploratory Testing",
        body: "10+ functional bugs, 5+ UI/UX defects, 5+ data/validation defects with Jam.dev evidence and risk-prioritisation report.",
        links: [{ label: "View Exploratory Notes", href: "https://docs.google.com/document/d/1GpkuNiIgQT-hqrAbtxIVLEAvldbsVp2c3BO96U0kLBI/edit?usp=drive_link" }],
      },
    ],
  },
  {
    name: "SharePact — P2P Rental Marketplace",
    badge: "Professional",
    nda: true,
    description:
      "Owned end-to-end QA for a peer-to-peer rental marketplace with listings across Sports, Outdoors, Tools, Electronics, Kitchen, Clothing, and Party & Events — covering web, iOS, and Android.",
    types: ["Functional","API","Regression","Cross-Browser","Mobile (iOS/Android)","Exploratory","Localization"],
    stats: [
      "13 Months of QA Ownership",
      "30+ Usability Bugs",
      "Web + iOS + Android",
      "6 Languages Tested",
    ],
    details: [
      { title: "Test Coverage", body: "Built and maintained a test case repository with full traceability between requirement IDs, ClickUp tickets, and test runs across sign-up, ID verification, listing creation, search/geolocation, rental booking, payment, and insurance flows." },
      { title: "Critical Bug Found", body: "Caught a P0 defect in the rental checkout flow where booking confirmation could trigger before the payment status returned, preventing released-but-unpaid bookings from reaching production." },
      { title: "API Testing", body: "Postman testing against listing, booking, messaging, and payment endpoints, asserting status codes, response shape, error handling, and rate limiting. Documented contract mismatches between frontend and backend." },
      { title: "Localization & Responsiveness", body: "Verified multi-language experience (English, French, Italian, Dutch, German) across core flows. Surfaced layout breaks, untranslated strings, and currency formatting issues at 375px, 768px, and 1440px viewports." },
      { title: "Security", body: "Tested ID verification and KYC flows for renters and owners. Validated edge cases on document upload (file size limits, unsupported formats, expired IDs). Flagged anti-enumeration gaps on login and forgot-password endpoints." },
      { title: "Regression Discipline", body: "Wrote regression suites tied to each milestone and re-ran after every fix. Bugs linked to parent tickets with reproduction steps, Jam.dev recordings, screenshots, severity, and priority." },
      { title: "Mobile Testing", body: "Tested across Android Studio Emulator, Xcode Simulator, and BrowserStack for cross-device coverage." },
    ],
  },
  {
    name: "Fate Round — Online Party Games",
    badge: "In Progress",
    description:
      "QA Engineer testing a real-time multiplayer party game platform with 24 browser-based game modes, WebSocket-driven room synchronization, and a zero-auth join flow. Focused on real-time state consistency, concurrent player edge cases, and cross-device gameplay.",
    types: ["Functional", "Real-Time", "Cross-Browser", "Accessibility", "Performance", "Exploratory"],
    stats: [
      "12 Game Modes Tested",
      "68 Test Cases",
      "22 Bugs (1 P0)",
      "4 Browsers Covered",
    ],
    details: [
      {
        title: "Test Coverage",
        body: "Built and executed 68 test cases across 12 game modes covering room creation, code sharing, player joining, live voting, host reveal, score tracking, game completion, and room teardown — with full traceability to feature requirements and reported defects.",
      },
      {
        title: "Critical Bug Found",
        body: "Caught a P0 race condition in the voting system where near-simultaneous vote submissions from multiple players caused the round to advance prematurely, displaying phantom 'no vote' entries on the host's reveal screen and corrupting round results for all participants.",
      },
      {
        title: "Real-Time Synchronization",
        body: "Tested sync by running 4 concurrent browser sessions in the same room, verifying that vote events, player join/leave broadcasts, host transfers on disconnect, and round state transitions propagated to all clients within 200ms with zero dropped frames. Performed WebSocket frame inspection via DevTools Network tab — monitoring real-time payloads for vote events, room state diffs, and player presence pings, and flagging uncompressed frame sizes exceeding 4KB during 8+ player rounds that degraded sync performance on slower connections.",
      },
      {
        title: "Room Lifecycle Edge Cases",
        body: "Validated: expired and invalid room codes returning clear error messages, host disconnect triggering graceful transfer to the next player, browser refresh mid-vote restoring session state, duplicate display names being appended with a suffix, and max player capacity enforced with a 'room full' message.",
      },
      {
        title: "Cross-Browser & Responsive",
        body: "Tested on Chrome, Firefox, Safari, and Edge at 375px, 768px, and 1440px. Surfaced card overflow during Monopoly board rendering on mobile, voting button tap targets below the 48px accessibility minimum, and game mode selection grid collapsing incorrectly on tablet viewports.",
      },
      {
        title: "Accessibility (WCAG 2.1 AA)",
        body: "Executed testing using axe DevTools and keyboard-only navigation, identifying 9 WCAG 2.1 AA violations including missing focus indicators on game cards, color contrast failures on the dark theme voting UI (3.2:1 vs required 4.5:1), and modal dialogs trapping keyboard focus without an escape path.",
      },
      {
        title: "Performance",
        body: "Ran Lighthouse audits on the landing page (78/100) and active gameplay views (42/100), pinpointing a 3.8s LCP regression during gameplay caused by WebSocket reconnection polling and render-blocking animation scripts loading synchronously.",
      },
    ],
  },
];

function ProjectCard({ p }: { p: Project }) {
  const [open, setOpen] = useState(false);
  return (
    <article className="group relative rounded-2xl border border-border bg-card p-6 md:p-8 hover-glow flex flex-col">
      <div className="absolute top-0 left-6 right-6 h-1 rounded-b-full teal-banner" />
      <div className="flex items-start justify-between gap-3 mb-3 mt-2">
        <span className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-full border border-primary/40 text-primary bg-primary/5">
          {p.badge}
        </span>
        {p.nda && (
          <span className="inline-flex items-center gap-1 text-[10px] text-muted-foreground">
            <Lock className="size-3" /> Artifacts under NDA
          </span>
        )}
      </div>
      <h3 className="text-xl md:text-2xl font-bold">{p.name}</h3>
      <p className="mt-3 text-sm md:text-base text-foreground/75 leading-relaxed">
        {p.description}
      </p>

      <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
        {p.stats.map((s) => {
          const [num, ...rest] = s.split(" ");
          return (
            <div key={s} className="rounded-lg border border-border bg-secondary/30 p-3">
              <div className="text-lg md:text-xl font-bold text-primary leading-tight">{num}</div>
              <div className="text-[11px] text-muted-foreground leading-snug mt-0.5">
                {rest.join(" ")}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {p.types.map((t) => (
          <span key={t} className="text-[11px] px-2 py-1 rounded-md bg-secondary text-foreground/70">
            {t}
          </span>
        ))}
      </div>

      <button
        onClick={() => setOpen((v) => !v)}
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all self-start"
      >
        {open ? "Hide details" : "Explore Project"}
        <ChevronDown className={`size-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="mt-6 border-t border-border pt-6 space-y-6 animate-fade-up">
          {p.details.map((d) => (
            <div key={d.title}>
              <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                {d.title}
              </h4>
              {d.body && (
                <p className="text-sm text-foreground/80 leading-relaxed">{d.body}</p>
              )}
              {d.bugs && (
                <ul className="space-y-2 mt-2">
                  {d.bugs.map((b, i) => (
                    <li key={i} className="flex gap-2 items-start text-sm">
                      <span
                        className={`shrink-0 mt-0.5 text-[10px] font-bold px-1.5 py-0.5 rounded ${
                          b.severity === "CRITICAL"
                            ? "bg-destructive/20 text-destructive"
                            : "bg-amber-500/20 text-amber-400"
                        }`}
                      >
                        {b.severity}
                      </span>
                      <span className="text-foreground/80">{b.text}</span>
                    </li>
                  ))}
                </ul>
              )}
              {d.links && (
                <div className="mt-3 flex flex-wrap gap-3">
                  {d.links.map((l) => (
                    <a
                      key={l.href}
                      {...ext(l.href)}
                      className="text-xs inline-flex items-center gap-1.5 text-primary hover:underline"
                    >
                      {l.label} <ExternalLink className="size-3" />
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </article>
  );
}

function Projects() {
  return (
    <section className="mx-auto max-w-7xl px-4 md:px-8">
      <SectionBanner id="projects" title="Projects" />
      <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-start">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.name} p={p} />
        ))}
      </div>
    </section>
  );
}

function MasterGuide() {
  const phases = [
    "Discovery","Requirements Analysis","Test Planning","Test Design",
    "Test Execution","Bug Reporting","Signoff","Continuous Improvement",
  ];
  return (
    <section className="mx-auto max-w-6xl px-4 md:px-8 py-20">
      <div
        className="relative overflow-hidden rounded-3xl border border-primary/30 p-8 md:p-12"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.73 0.13 180 / 0.15), oklch(0.265 0.038 257) 60%)",
        }}
      >
        <div className="absolute inset-0 bg-dots opacity-25 pointer-events-none" />
        <div className="relative">
          <span className="text-xs uppercase tracking-widest text-primary font-semibold">
            Featured Framework
          </span>
          <h2 className="mt-2 text-3xl md:text-5xl font-bold">The QA Master Guide</h2>
          <p className="mt-2 text-lg md:text-xl text-foreground/80">
            A Reusable System for Self-Directed Quality Engineering on Any Product
          </p>
          <p className="mt-5 max-w-3xl text-foreground/75 leading-relaxed">
            A comprehensive methodology framework I built covering the full QA lifecycle,
            designed so any QA engineer can pick up any product, with or without a task brief,
            and run professional quality assurance from day one. Born from real project
            experience where no one told me what to test or how to test it.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-2 gap-y-3">
            {phases.map((ph, i) => (
              <div key={ph} className="flex items-center gap-2">
                <span className="text-xs md:text-sm px-3 py-2 rounded-lg border border-primary/40 bg-background/60 font-medium">
                  {ph}
                </span>
                {i < phases.length - 1 && (
                  <ArrowRight className="size-3.5 text-primary/60" />
                )}
              </div>
            ))}
          </div>

          <a
            {...ext("https://docs.google.com/document/d/1isj4O4CLg7ngXq3hphbnTXYTTe0DMfJT3u4OWZCVeBk/edit?usp=drive_link")}
            className="mt-8 inline-flex items-center gap-2 px-5 py-3 rounded-md teal-banner font-semibold hover:opacity-90 transition-opacity"
          >
            Read the Full Guide <ArrowRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Recommendation() {
  return (
    <section className="mx-auto max-w-3xl px-4 md:px-8 py-12">
      <div className="glass rounded-2xl p-8 md:p-10 text-center">
        <Quote className="size-8 text-primary mx-auto" />
        <h2 className="mt-4 text-2xl md:text-3xl font-bold">Recommendation</h2>
        <p className="mt-3 text-foreground/75">
          Professional recommendation from a previous employer attesting to my QA skills,
          work ethic, and contributions.
        </p>
        <a
          {...ext("https://drive.google.com/file/d/1ROAfFW_l7739RJGmA8EtScQXZMQjAFam/view?usp=drive_link")}
          className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-primary/50 text-primary hover:bg-primary/10 transition-colors"
        >
          View Recommendation Letter <ArrowRight className="size-4" />
        </a>
      </div>
    </section>
  );
}

// ─── PASTE THIS TO REPLACE: the TOOL_CARDS const, ToolCardView function, and Tools function ───

// Inline SVG blobs for brand icons
const SVG_PLAYWRIGHT = (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="size-10 object-contain" fill="currentColor">
    <path d="M7.99585 13.141725c-0.87725 0.248975 -1.452775 0.685475 -1.8319 1.12165 0.363125 -0.317775 0.849525 -0.609425 1.505675 -0.795425 0.6711 -0.1902 1.243625 -0.188825 1.7167 -0.09755v-0.369925c-0.40355 -0.0369 -0.866225 -0.0075 -1.390475 0.14125Zm-1.872 -3.109775 -3.25795 0.858325s0.059375 0.083875 0.1693 0.195775l2.76235 -0.727875s-0.03915 0.5044 -0.379075 0.9556c0.643 -0.486475 0.705375 -1.281825 0.705375 -1.281825Zm2.727125 7.65675C4.26615 18.923575 1.8404825 13.61025 1.1060875 10.852425c-0.3393 -1.273 -0.487415 -2.2371 -0.5268925 -2.859275 -0.0042425 -0.0646 -0.0022825 -0.11905 0.002285 -0.16895 -0.237835 0.01435 -0.3517015 0.137975 -0.328535 0.49525 0.0394775 0.621825 0.187595 1.585875 0.526895 2.859275C1.5139075 13.936125 3.9399 19.24945 8.52475 18.0146c0.99795 -0.26885 1.747675 -0.758525 2.310475 -1.383625 -0.51875 0.468525 -1.168 0.8375 -1.98425 1.057725Zm0.861575 -10.90855v0.3263h1.79835c-0.0369 -0.115525 -0.074075 -0.219625 -0.110975 -0.3263h-1.687375Z" fill="#2D4552"/>
    <path d="M11.9129 9.46735c0.80875 0.229675 1.2365 0.7967 1.462575 1.2985l0.90175 0.2561s-0.123 -1.756175 -1.711525 -2.2074c-1.486075 -0.422225 -2.400575 0.8257 -2.5118 0.9872 0.4323 -0.308 1.063575 -0.56015 1.859 -0.3344Zm7.178175 1.3066c-1.487425 -0.424125 -2.401575 0.8264 -2.511175 0.985625 0.432625 -0.307625 1.063575 -0.559875 1.85865 -0.3331 0.80745 0.23005 1.23485 0.796375 1.461625 1.298525l0.90305 0.25705s-0.125 -1.756525 -1.71215 -2.2081Zm-0.8959 4.6305 -7.501475 -2.097125s0.0812 0.411725 0.3928 0.94485l6.3159 1.765675c0.519975 -0.30085 0.792775 -0.6134 0.792775 -0.6134ZM12.994375 19.918475C7.054675 18.326 7.77275 10.758025 8.733875 7.171825c0.395725 -1.4779 0.802575 -2.576375 1.13995 -3.312725 -0.2013 -0.041425 -0.368025 0.0646 -0.532775 0.39965 -0.358225 0.726575 -0.8163 1.90955 -1.259625 3.5656 -0.96085 3.586125 -1.67895 11.15385 4.2605 12.746325 2.79955 0.75 4.980475 -0.3899 6.60625 -2.18005 -1.543175 1.3977 -3.513425 2.181325 -5.9538 1.52785Z" fill="#2D4552"/>
    <path d="M9.7126 15.915175V14.388l-4.243175 1.2032s0.313525 -1.82175 2.526475 -2.4495c0.6711 -0.1902 1.2437 -0.1889 1.7167 -0.09755V6.780125h2.124575c-0.231325 -0.714825 -0.4551 -1.26515 -0.64305 -1.64755 -0.310925 -0.632925 -0.62965 -0.21335 -1.35325 0.39185 -0.50965 0.425775 -1.797675 1.33405 -3.7359 1.85635 -1.938275 0.522625 -3.50525 0.384025 -4.15906 0.2708 -0.9268825 -0.1599 -1.4116925 -0.36345 -1.3663375 0.34155 0.03947 0.621825 0.187595 1.58595 0.5268925 2.859275C1.8405325 13.609875 4.266525 18.9232 8.85135 17.68835c1.197625 -0.3227 2.04295 -0.960525 2.6289 -1.7735h-1.76765v0.000325ZM2.865625 10.89025l3.258275 -0.858325s-0.094975 1.25345 -1.31645 1.57545c-1.2218 0.321675 -1.941825 -0.717125 -1.941825 -0.717125Z"/>
    <path d="M21.975075 6.8525c-0.84695 0.148475 -2.878875 0.33345 -5.389975 -0.339625 -2.5118 -0.672675 -4.17835 -1.849175 -4.838625 -2.402175 -0.936 -0.783975 -1.347725 -1.328825 -1.752925 -0.5047 -0.358225 0.726875 -0.816325 1.909875 -1.259725 3.565925 -0.960775 3.586125 -1.67885 11.15385 4.260525 12.7463 5.938125 1.591125 9.09945 -5.322175 10.0603 -8.908625 0.4434 -1.655725 0.637825 -2.9095 0.691325 -3.717925 0.061 -0.915775 -0.568025 -0.64995 -1.7709 -0.439175ZM10.0418 9.81945s0.936 -1.45575 2.523525 -1.00455c1.588525 0.451225 1.711525 2.207425 1.711525 2.207425l-4.23505 -1.202875ZM13.917 16.352c-2.79235 -0.817975 -3.223 -3.04465 -3.223 -3.04465l7.501125 2.0972c0 -0.00035 -1.5141 1.755175 -4.278125 0.94745Zm2.6521 -4.57605s0.9347 -1.45475 2.521925 -1.00225c1.587175 0.4519 1.71215 2.2081 1.71215 2.2081l-4.234075 -1.20585Z"/>
  </svg>
);

const SVG_CYPRESS = (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="size-10" fill="#69D3A7">
    <path d="M11.998.0195c-.8642 0-1.6816.1101-2.1445.1934v.002C4.1731 1.2283 0 6.1368 0 12.0018c0 1.1265.1573 2.2328.4648 3.3028.0387.1453.0915.2993.1368.4473 1.607 4.865 6.2245 8.226 11.3925 8.2285.0651 0 .2518-.0003.502-.0118.8564-.0353 1.6228-.5734 1.9512-1.369l.4736-1.1544L20.4258 8.043H18.621l-2.3164 5.871-2.334-5.871h-1.9082l3.2734 8.0117c-.8115 1.9702-1.6252 3.9395-2.4355 5.9101-.0808.1945-.2655.3284-.4727.336-.144.005-.285.0098-.4316.0098-4.5848 0-8.6672-3.0695-9.9277-7.4649a10.3058 10.3058 0 0 1-.3985-2.8437c0-5.0887 3.6521-9.3404 8.6035-10.164.2214-.037.8885-.1446 1.7246-.1446 4.4166 0 8.269 2.732 9.7305 6.8476.0558.144.0977.293.1465.4395.299.9746.4531 1.9887.4531 3.0215 0 4.5696-2.9413 8.5326-7.3164 9.8613l.4863 1.5996c5.085-1.546 8.4995-6.1518 8.502-11.459 0-1.5491-.2983-2.8706-.6504-3.8926-.0432-.1212-.0873-.2422-.1309-.3633h-.002C21.4577 3.0954 17.0444.0195 11.998.0195ZM8.4336 7.8906c-1.1999 0-2.1747.3852-2.9805 1.1758-.8007.7856-1.205 1.7736-1.205 2.9356 0 1.1544.4068 2.1368 1.205 2.9199.8058.7906 1.7806 1.1738 2.9805 1.1738 1.705 0 3.1556-.955 3.7871-2.4883l.0332-.082-1.6289-.5547c-.168.4563-.7552 1.4883-2.1914 1.4883-.6745 0-1.2437-.2344-1.6934-.6992-.4572-.4699-.6875-1.0632-.6875-1.7578 0-.6998.2253-1.2809.6875-1.7735.4522-.4648 1.019-.7012 1.6934-.7012 1.438 0 2.0238 1.0815 2.1934 1.4883l1.627-.5527-.0333-.084c-.629-1.5358-2.082-2.4883-3.7871-2.4883Z"/>
  </svg>
);

const SVG_POSTMAN = (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="size-10" fill="#FF6C37">
    <path d="M13.527.099C6.955-.744.942 3.9.099 10.473c-.843 6.572 3.8 12.584 10.373 13.428 6.573.843 12.587-3.801 13.428-10.374C24.744 6.955 20.101.943 13.527.099zm2.471 7.485a.855.855 0 0 0-.593.25l-4.453 4.453-.307-.307-.643-.643c4.389-4.376 5.18-4.418 5.996-3.753zm-4.863 4.861l4.44-4.44a.62.62 0 1 1 .847.903l-4.699 4.125-.588-.588zm.33.694l-1.1.238a.06.06 0 0 1-.067-.032.06.06 0 0 1 .01-.073l.645-.645.512.512zm-2.803-.459l1.172-1.172.879.878-1.979.426a.074.074 0 0 1-.085-.039.072.072 0 0 1 .013-.093zm-3.646 6.058a.076.076 0 0 1-.069-.083.077.077 0 0 1 .022-.046h.002l.946-.946 1.222 1.222-2.123-.147zm2.425-1.256a.228.228 0 0 0-.117.256l.203.865a.125.125 0 0 1-.211.117h-.003l-.934-.934-.294-.295 3.762-3.758 1.82-.393.874.874c-1.255 1.102-2.971 2.201-5.1 3.268zm5.279-3.428h-.002l-.839-.839 4.699-4.125a.952.952 0 0 0 .119-.127c-.148 1.345-2.029 3.245-3.977 5.091zm3.657-6.46l-.003-.002a1.822 1.822 0 0 1 2.459-2.684l-1.61 1.613a.119.119 0 0 0 0 .169l1.247 1.247a1.817 1.817 0 0 1-2.093-.343zm2.578 0a1.714 1.714 0 0 1-.271.218h-.001l-1.207-1.207 1.533-1.533c.661.72.637 1.832-.054 2.522z"/>
  </svg>
);

const SVG_K6 = (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="size-10" fill="#F46800">
    <path d="M24 23.646H0L7.99 6.603l4.813 3.538L19.08.354Zm-8.8-3.681h.052a2.292 2.292 0 0 0 1.593-.64 2.088 2.088 0 0 0 .685-1.576 1.912 1.912 0 0 0-.66-1.511 2.008 2.008 0 0 0-1.37-.59h-.04a.716.716 0 0 0-.199.027l1.267-1.883-1.01-.705-.477.705-1.22 1.864c-.21.31-.386.582-.495.77-.112.2-.21.41-.29.625a1.942 1.942 0 0 0-.138.719 2.086 2.086 0 0 0 .676 1.558c.422.411.989.641 1.578.64Zm-5.365-2.027 1.398 1.978h1.496l-1.645-2.295 1.46-2.029-.97-.671-.427.565-1.314 1.853v-3.725l-1.31-1.068v7.37h1.31v-1.98Zm5.367.792a.963.963 0 1 1 0-1.927h.009a.941.941 0 0 1 .679.29.897.897 0 0 1 .29.668.978.978 0 0 1-.977.967Z"/>
  </svg>
);

const SVG_GITHUB = (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="size-10" fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

const SVG_GITLAB = (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="size-10" fill="#FC6D26">
    <path d="m23.6004 9.5927-.0337-.0862L20.3.9814a.851.851 0 0 0-.3362-.405.8748.8748 0 0 0-.9997.0539.8748.8748 0 0 0-.29.4399l-2.2055 6.748H7.5375l-2.2057-6.748a.8573.8573 0 0 0-.29-.4412.8748.8748 0 0 0-.9997-.0537.8585.8585 0 0 0-.3362.4049L.4332 9.5015l-.0325.0862a6.0657 6.0657 0 0 0 2.0119 7.0105l.0113.0087.03.0213 4.976 3.7264 2.462 1.8633 1.4995 1.1321a1.0085 1.0085 0 0 0 1.2197 0l1.4995-1.1321 2.4619-1.8633 5.006-3.7489.0125-.01a6.0682 6.0682 0 0 0 2.0094-7.003z"/>
  </svg>
);

const SVG_JIRA = (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="size-10" fill="#0052CC">
    <path d="M11.571 11.513H0a5.218 5.218 0 0 0 5.232 5.215h2.13v2.057A5.215 5.215 0 0 0 12.575 24V12.518a1.005 1.005 0 0 0-1.004-1.005zm5.241-5.232H5.234a5.215 5.215 0 0 0 5.215 5.215h2.129v2.057a5.215 5.215 0 0 0 5.215 5.215V7.295a1.005 1.005 0 0 0-1.001-1.014zm5.23-5.231H10.478A5.215 5.215 0 0 0 15.693 6.265h2.131v2.056a5.215 5.215 0 0 0 5.215 5.215V2.062a1.005 1.005 0 0 0-1.001-1.012z"/>
  </svg>
);

const SVG_BROWSERSTACK = (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="size-10" fill="#F5A623">
    <path d="M11.923 0C5.937 0 .976 4.384.07 10.115a11.943 11.943 0 0 1 7.645-2.754 11.982 11.982 0 0 1 9.43 4.58 11.942 11.942 0 0 0 1.015-8.769 12.066 12.066 0 0 0-.626-1.772l-.003-.008A11.968 11.968 0 0 0 11.923 0Zm7.721 2.754A12.002 12.002 0 0 1 9.398 16.521a12.082 12.082 0 0 0 9.02 5.617c.24-.119.766-.51 1.224-.89A11.971 11.971 0 0 0 23.995 12a11.98 11.98 0 0 0-4.35-9.247zM9.33 7.557a12.159 12.159 0 0 0-2.647.401A11.944 11.944 0 0 0 .01 12.595l-.005.006c.021.427.065.853.131 1.275C1.037 19.61 6 24 11.991 24c1.45 0 2.887-.26 4.243-.773a12 12 0 0 1-6.905-15.67z"/>
  </svg>
);

const SVG_REACT = (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="size-10" fill="#61DAFB">
    <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/>
  </svg>
);

const ICON = (name: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}.svg`;

// ─── Tool item types ───────────────────────────────────────────────────────
type ToolItem =
  | { kind: "svg"; name: string; svg: ReactNode }
  | { kind: "icon"; name: string; src: string }
  | { kind: "text"; name: string };

const sv = (name: string, svg: ReactNode): ToolItem => ({ kind: "svg", name, svg });
const ic = (name: string, path: string): ToolItem => ({ kind: "icon", name, src: ICON(path) });
const tx = (name: string): ToolItem => ({ kind: "text", name });

// ─── Tool card definitions ─────────────────────────────────────────────────
type ToolCard = { title: string; tools: ToolItem[] };

const TOOL_CARDS: ToolCard[] = [
  {
    title: "Programming Languages",
    tools: [
      ic("JavaScript", "javascript/javascript-original"),
      ic("TypeScript", "typescript/typescript-original"),
      ic("Python", "python/python-original"),
      ic("SQL", "azuresqldatabase/azuresqldatabase-original"),
    ],
  },
  {
    title: "UI Test Automation",
    tools: [
      sv("Playwright", SVG_PLAYWRIGHT),
      sv("Cypress", SVG_CYPRESS),
      ic("Selenium", "selenium/selenium-original"),
    ],
  },
  {
    title: "Mobile Test Automation",
    tools: [
      sv("BrowserStack", SVG_BROWSERSTACK),
      tx("Android Studio Emulator"),
      tx("Xcode Simulator"),
    ],
  },
  {
    title: "API Testing Tools",
    tools: [
      sv("Postman", SVG_POSTMAN),
      tx("Newman"),
      tx("curl"),
    ],
  },
  {
    title: "Load Testing Tools",
    tools: [
      sv("k6", SVG_K6),
      tx("GTmetrix"),
    ],
  },
  {
    title: "Frameworks",
    tools: [
      sv("React", SVG_REACT),
      ic("Node.js", "nodejs/nodejs-original"),
      tx("Cucumber"),
    ],
  },
  {
    title: "DevOps & CI/CD",
    tools: [
      sv("GitHub", SVG_GITHUB),
      sv("GitLab", SVG_GITLAB),
      ic("GitHub Actions", "githubactions/githubactions-original"),
      ic("Docker", "docker/docker-original"),
      tx("Lighthouse"),
    ],
  },
  {
    title: "Cloud Platforms",
    tools: [
      ic("AWS", "amazonwebservices/amazonwebservices-plain-wordmark"),
      ic("GCP", "googlecloud/googlecloud-original"),
      ic("Azure", "azure/azure-original"),
      ic("Docker", "docker/docker-original"),
    ],
  },
  {
    title: "Test Management & Docs",
    tools: [
      tx("TestRail"),
      ic("Google Sheets", "google/google-original"),
      ic("Google Docs", "google/google-original"),
      ic("Markdown", "markdown/markdown-original"),
    ],
  },
  {
    title: "Project & Defect Management",
    tools: [
      sv("Jira", SVG_JIRA),
      tx("ClickUp"),
      tx("Linear"),
    ],
  },
  {
    title: "Accessibility & Security",
    tools: [
      tx("OWASP"),
      tx("axe DevTools"),
      tx("WAVE"),
    ],
  },
  {
    title: "Performance & Diagnostics",
    tools: [
      tx("GTmetrix"),
      tx("Lighthouse"),
      tx("Jam.dev"),
      tx("Chrome DevTools"),
    ],
  },
];

// ─── Single card component ─────────────────────────────────────────────────
function ToolCardView({ card }: { card: ToolCard }) {
  return (
    <div className="rounded-2xl border border-border bg-[#1E293B] p-6 flex flex-col min-h-[200px] transition-colors hover:border-primary/70 hover:shadow-[0_0_0_1px_rgba(20,184,166,0.35),0_10px_40px_-10px_rgba(20,184,166,0.35)]">
      {/* Title */}
      <div className="mb-4">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground/90">
          {card.title}
        </h3>
        <div className="w-10 h-px bg-primary/60 mt-2" />
      </div>

      {/* Icon grid */}
      <div className="flex flex-wrap items-center gap-3 mt-1">
        {card.tools.map((t) => {
          if (t.kind === "svg") {
            return (
              <div
                key={t.name}
                title={t.name}
                className="flex flex-col items-center gap-1 group/item"
              >
                <div className="size-10 flex items-center justify-center opacity-80 group-hover/item:opacity-100 transition-opacity">
                  {t.svg}
                </div>
                <span className="text-[9px] text-muted-foreground leading-tight text-center max-w-[52px] truncate">
                  {t.name}
                </span>
              </div>
            );
          }
          if (t.kind === "icon") {
            return (
              <div
                key={t.name}
                title={t.name}
                className="flex flex-col items-center gap-1 group/item"
              >
                <img
                  src={t.src}
                  alt={t.name}
                  loading="lazy"
                  className="size-10 object-contain opacity-80 group-hover/item:opacity-100 transition-opacity"
                />
                <span className="text-[9px] text-muted-foreground leading-tight text-center max-w-[52px] truncate">
                  {t.name}
                </span>
              </div>
            );
          }
          // text badge
          return (
            <div
              key={t.name}
              title={t.name}
              className="flex flex-col items-center gap-1 group/item"
            >
              <span className="inline-flex items-center justify-center rounded-md border border-primary/50 text-primary/90 font-semibold px-2 py-1.5 text-[10px] bg-background/60 group-hover/item:border-primary group-hover/item:text-primary transition-colors whitespace-nowrap">
                {t.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── Section ───────────────────────────────────────────────────────────────
function Tools() {
  return (
    <section className="mx-auto max-w-7xl px-4 md:px-8">
      <SectionBanner id="tools" title="Core Skills & Tools" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {TOOL_CARDS.map((c) => (
          <ToolCardView key={c.title} card={c} />
        ))}
      </div>
    </section>
  );
}

function Education() {
  return (
    <section className="mx-auto max-w-5xl px-4 md:px-8 py-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Education</h2>
      <div className="rounded-xl border border-border bg-card p-6">
        <h3 className="font-semibold text-lg">B.Sc. Software Development</h3>
        <p className="text-muted-foreground text-sm mt-1">
          International University of Applied Science, Germany · 2022–2025
        </p>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-3xl px-4 md:px-8 py-20 text-center">
      <h2 className="text-3xl md:text-5xl font-bold">Let's work together</h2>
      <p className="mt-4 text-foreground/75">
        Open to QA Engineer roles — remote or hybrid.
      </p>
      <a
        href={`mailto:${EMAIL}`}
        className="mt-6 inline-flex items-center gap-2 text-lg text-primary font-medium hover:underline"
      >
        <Mail className="size-5" /> {EMAIL}
      </a>
      <div className="mt-8 flex justify-center gap-3">
        <a
          {...ext(LINKEDIN)}
          aria-label="LinkedIn"
          className="size-12 grid place-items-center rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
        >
          <Linkedin className="size-5" />
        </a>
        <a
          {...ext(GITHUB)}
          aria-label="GitHub"
          className="size-12 grid place-items-center rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
        >
          <Github className="size-5" />
        </a>
        <a
          href={`mailto:${EMAIL}`}
          aria-label="Email"
          className="size-12 grid place-items-center rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
        >
          <Mail className="size-5" />
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto max-w-7xl px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© 2026 Kosisochukwu Maureen Obiekwe</p>
        <div className="flex gap-5">
          <a {...ext(LINKEDIN)} className="hover:text-primary transition-colors">LinkedIn</a>
          <a {...ext(GITHUB)} className="hover:text-primary transition-colors">GitHub</a>
          <a href={`mailto:${EMAIL}`} className="hover:text-primary transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
}

function useScrollReveal() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("animate-fade-up");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Portfolio() {
  useScrollReveal();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <MasterGuide />
        <Recommendation />
        <Tools />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
