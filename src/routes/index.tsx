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
      { title: "Kosisochukwu Maureen Obiekwe — QA Engineer" },
      {
        name: "description",
        content:
          "QA Engineer specializing in marketplace platforms, AI products, API automation, performance, security and accessibility testing.",
      },
      { property: "og:title", content: "Kosisochukwu Maureen Obiekwe — QA Engineer" },
      {
        property: "og:description",
        content:
          "I find the bugs that cost you users, revenue, and trust — before your customers do.",
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
    "4+ Products Tested End-to-End",
    "450+ Test Cases Written",
    "145+ Bugs Documented",
    "3+ Years Experience",
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
          QA Engineer
        </p>
        <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-foreground/85 leading-relaxed">
          I find the bugs that cost you users, revenue, and trust — before your customers do.
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
        I work across the full testing lifecycle — from understanding FRD, TRD, PRDs to finding
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
    company: "Owens and Xley Consults",
    role: "QA Engineer",
    date: "Jun 2023 – Oct 2024",
    summary: "QA for client-facing web products and internal tools at a Lagos-based consulting firm.",
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
        body: "Traced a single Paystack payment bug to 30+ downstream blocked test cases across fulfillment, contracts, escrow, and withdrawals — documented each with root-cause traceability rather than marking them as untested.",
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
      { title: "Critical Bug Found", body: "Caught a P0 defect in the rental checkout flow where booking confirmation could trigger before the payment status returned — preventing released-but-unpaid bookings from reaching production." },
      { title: "API Testing", body: "Postman testing against listing, booking, messaging, and payment endpoints — asserting status codes, response shape, error handling, and rate limiting. Documented contract mismatches between frontend and backend." },
      { title: "Localization & Responsiveness", body: "Verified multi-language experience (English, French, Italian, Dutch, German) across core flows. Surfaced layout breaks, untranslated strings, and currency formatting issues at 375px, 768px, and 1440px viewports." },
      { title: "Security", body: "Tested ID verification and KYC flows for renters and owners. Validated edge cases on document upload (file size limits, unsupported formats, expired IDs). Flagged anti-enumeration gaps on login and forgot-password endpoints." },
      { title: "Regression Discipline", body: "Wrote regression suites tied to each milestone and re-ran after every fix. Bugs linked to parent tickets with reproduction steps, Jam.dev recordings, screenshots, severity, and priority." },
      { title: "Mobile Testing", body: "Tested across Android Studio Emulator, Xcode Simulator, and BrowserStack for cross-device coverage." },
    ],
  },
  {
    name: "Owens and Xley Consults",
    badge: "Professional",
    nda: true,
    description:
      "QA for client-facing web products and internal tools at a Lagos-based business consulting firm serving SMEs and entrepreneurs across recruitment, advisory, and business development services.",
    types: ["Functional","Cross-Browser","Responsive","Performance","Usability"],
    stats: [
      "16 Months",
      "Recruitment Portal + Company Website",
      "Lighthouse & GTmetrix Audits",
    ],
    details: [
      { title: "Recruitment Portal", body: "Validated end-to-end: job listing submission, candidate application forms, CV uploads, email confirmations. Flagged validation gaps on email fields, phone formats, and required-field bypasses." },
      { title: "Website QA", body: "Audited contact, lead-capture, and consultation booking forms. Surfaced missing client-side validation, weak error messaging, and forms submitting with empty required fields." },
      { title: "Process Improvement", body: "Introduced a structured bug report template (steps to reproduce, environment, severity, priority, evidence) in ClickUp, replacing ad-hoc Slack reports." },
      { title: "Performance", body: "Ran Lighthouse and GTmetrix audits and flagged regressions on image sizes, render-blocking resources, and Core Web Vitals after every content update." },
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
      <div className="grid md:grid-cols-2 gap-6 md:gap-8">
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
            A comprehensive methodology framework I built covering the full QA lifecycle —
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

const ICON = (name: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}.svg`;

type ToolItem =
  | { kind: "icon"; name: string; src: string }
  | { kind: "text"; name: string };

const ic = (name: string, path: string): ToolItem => ({
  kind: "icon",
  name,
  src: ICON(path),
});
const tx = (name: string): ToolItem => ({ kind: "text", name });

type ToolCard = { title: string; tools: ToolItem[] };

const TOOL_CARDS: ToolCard[] = [
  {
    title: "Testing & Automation",
    tools: [
      ic("Playwright", "playwright/playwright-original"),
      ic("Postman", "postman/postman-original"),
      tx("Newman"),
      ic("k6", "k6/k6-original"),
      tx("curl"),
      ic("SQL", "azuresqldatabase/azuresqldatabase-original"),
    ],
  },
  {
    title: "Browser & Performance",
    tools: [
      ic("Chrome DevTools", "chrome/chrome-original"),
      tx("Lighthouse"),
      tx("GTmetrix"),
    ],
  },
  { title: "Security", tools: [tx("OWASP")] },
  {
    title: "Accessibility",
    tools: [tx("axe DevTools"), tx("WAVE")],
  },
  {
    title: "CI/CD & Version Control",
    tools: [ic("GitHub Actions", "githubactions/githubactions-original")],
  },
  {
    title: "Project Management & Test Management",
    tools: [
      ic("Jira", "jira/jira-original"),
      tx("ClickUp"),
      tx("Linear"),
      tx("TestRail"),
    ],
  },
  {
    title: "Mobile Testing",
    tools: [
      tx("BrowserStack"),
      tx("Android Studio Emulator"),
      tx("Xcode Simulator"),
    ],
  },
  {
    title: "Documentation & Reporting",
    tools: [
      ic("Google Sheets", "google/google-original"),
      ic("Google Docs", "google/google-original"),
      ic("Markdown", "markdown/markdown-original"),
      tx("Jam.dev"),
    ],
  },
];

function ToolCardView({ card }: { card: ToolCard }) {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const idx = activeIdx ?? 0;
  const active = card.tools[idx];

  return (
    <div className="group rounded-2xl border border-border bg-[#1E293B] p-6 flex flex-col text-center min-h-[280px] transition-colors hover:border-primary/70 hover:shadow-[0_0_0_1px_rgba(20,184,166,0.35),0_10px_40px_-10px_rgba(20,184,166,0.35)]">
      {/* TOP: title + separator */}
      <div>
        <h3 className="text-sm font-semibold uppercase tracking-wider">
          {card.title}
        </h3>
        <div className="w-10 h-px bg-primary/60 mx-auto mt-2" />
      </div>

      {/* CENTER: preview zone */}
      <div className="flex-1 grid place-items-center py-6">
        <div className="flex flex-col items-center gap-3">
          {active.kind === "icon" ? (
            <img
              src={active.src}
              alt={active.name}
              loading="lazy"
              className="size-20 md:size-24 object-contain transition-transform duration-200"
            />
          ) : (
            <div className="relative grid place-items-center">
              <div className="absolute inset-0 -m-3 rounded-full bg-primary/15 blur-md" />
              <span className="relative inline-flex items-center justify-center rounded-full border-2 border-primary/60 text-primary font-bold px-5 py-3 text-base bg-background/60">
                {active.name}
              </span>
            </div>
          )}
          <span className="text-xs text-foreground/70 font-medium">
            {active.name}
          </span>
        </div>
      </div>

      {/* BOTTOM: all tool icons */}
      <div className="mt-2 -mx-2 px-2 py-2 rounded-lg transition-colors group-hover:bg-primary/5">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {card.tools.map((t, i) => {
            const isActive = i === idx;
            const common =
              "transition-all duration-150 cursor-pointer rounded-md outline-none";
            return (
              <button
                key={t.name}
                type="button"
                onMouseEnter={() => setActiveIdx(i)}
                onMouseLeave={() => setActiveIdx(null)}
                onFocus={() => setActiveIdx(i)}
                onBlur={() => setActiveIdx(null)}
                onClick={() =>
                  setActiveIdx((prev) => (prev === i ? null : i))
                }
                aria-label={t.name}
                title={t.name}
                className={`${common} ${
                  isActive ? "scale-110" : "opacity-70 hover:opacity-100"
                }`}
              >
                {t.kind === "icon" ? (
                  <img
                    src={t.src}
                    alt={t.name}
                    loading="lazy"
                    className="size-7 object-contain"
                  />
                ) : (
                  <span
                    className={`inline-flex items-center justify-center rounded-md border px-2 py-1 text-[10px] font-semibold ${
                      isActive
                        ? "border-primary text-primary bg-primary/10"
                        : "border-primary/50 text-primary/90"
                    }`}
                  >
                    {t.name}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function Tools() {
  return (
    <section className="mx-auto max-w-7xl px-4 md:px-8">
      <SectionBanner id="tools" title="Core Skills & Tools" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
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