import Layout from "../../hoc/Layout";
import styles from "../../styles/Home.module.css";
import { Container, Typography, Box, Divider } from "@mui/material";

export default function BlogArticle() {
  return (
    <Layout route="/blog/cursor-ai-tools" title="AI, Tools, and Cursor: 5x-ing Delivery (Positives + Pitfalls)">
      <Container
        maxWidth="md"
        sx={{
          py: 10,
          color: "white",
          backgroundColor: "rgba(0,0,0,.55)",
          backdropFilter: "blur(2px)",
        }}
      >
        <Typography variant="h2" component="h1" gutterBottom>
          AI, Tools, and Cursor: How We 5× Delivery at Beyond & JamCyber
        </Typography>
        <Typography variant="subtitle1" sx={{ opacity: 0.9 }} gutterBottom>
          A pragmatic field note on using AI coding tools—what works, what breaks, and how to ship faster without losing quality.
        </Typography>

        <Divider sx={{ my: 4, borderColor: "rgba(255,255,255,0.15)" }} />

        <Section title="What Changed: From Hours to Minutes">
          <p>
            With Cursor as the primary IDE and GPT-backed workflows embedded in daily practice, we routinely see a
            3–5× improvement in delivery speed for greenfield features and maintenance work at Beyond and JamCyber.
            The delta comes from fewer context switches, faster scaffolding, and tighter feedback loops.
          </p>
          <ul>
            <li><b>Scaffold-first</b>: generate file structures, tests, and boilerplate in seconds.</li>
            <li><b>Inline refactors</b>: safe, surgical edits across files with traceability.</li>
            <li><b>Working in context</b>: the model reasons over the repo, not a blank chat.</li>
          </ul>
        </Section>

        <Section title="The Positives (When It Sings)">
          <ul>
            <li><b>Speed</b>: CRUD, API clients, types, and glue code land fast.</li>
            <li><b>Consistency</b>: enforces patterns—naming, dependency boundaries, lint rules.</li>
            <li><b>Exploration</b>: rapid spikes with throwaway branches to derisk choices.</li>
            <li><b>Docs-as-code</b>: generate usage, ADR notes, and examples next to the code.</li>
          </ul>
          <p>
            Used thoughtfully, AI becomes a <i>pair</i>—it drafts, you decide. The best outcomes come from short prompts,
            tight acceptance criteria, and immediate in-editor verification.
          </p>
        </Section>

        <Section title="The Pitfalls (Where It Hurts)">
          <ul>
            <li><b>Hallucinated APIs</b>: libraries move; the model’s memory lags. Always import-check.</li>
            <li><b>Shallow tests</b>: generated tests assert happy paths; expand edge cases.</li>
            <li><b>Hidden coupling</b>: fast code can bypass architecture. Keep boundaries explicit.</li>
            <li><b>Prompt drift</b>: long sessions degrade. Reset context and restate goals.</li>
          </ul>
          <p>
            The guardrail is a simple rule: if you wouldn’t merge it from a junior without review, don’t merge it from AI.
          </p>
        </Section>

        <Section title="Practices That Make It Work">
          <ul>
            <li><b>Define outcomes</b>: task in one sentence, example input/output, acceptance checks.</li>
            <li><b>Constrain scope</b>: ask for <i>one</i> file or function per step.</li>
            <li><b>Codify style</b>: linters, formatters, and generators keep PRs small and consistent.</li>
            <li><b>Review like normal</b>: diff reading, run tests, verify UX, check security.</li>
          </ul>
        </Section>

        <Section title="Where Cursor Shines">
          <ul>
            <li><b>Repo-aware edits</b>: propose and apply edits across files with confidence.</li>
            <li><b>Parallel searches</b>: jump to all usages/defs to refactor safely.</li>
            <li><b>Scratch prompts</b>: iterate with context without polluting the codebase.</li>
          </ul>
        </Section>

        <Section title="Real Impact at Beyond & JamCyber">
          <p>
            On typical product work—API integrations, dashboards, email flows—we measured throughput lifts of 5× for
            tasks heavy on integration and boilerplate, and 2–3× on complex feature work that still demands deep human
            design. Delivery isn’t just faster; it’s more predictable.
          </p>
        </Section>

        <Section title="When Not to Use It">
          <ul>
            <li><b>Novel core logic</b>: algorithms and domain rules that need careful proofs.</li>
            <li><b>Security-sensitive code</b>: crypto, auth flows, and anything with legal impact.</li>
            <li><b>Migration planning</b>: choose architecture first, then let AI fill in seams.</li>
          </ul>
        </Section>

        <Section title="A Minimal Daily Flow">
          <ol>
            <li>State the outcome and constraints.</li>
            <li>Generate the smallest useful edit.</li>
            <li>Run, lint, test, and read the diff.</li>
            <li>Refine or revert quickly; keep PRs tight.</li>
          </ol>
        </Section>

        <Divider sx={{ my: 6, borderColor: "rgba(255,255,255,0.15)" }} />

        <Typography variant="h5" component="h2" gutterBottom>
          Takeaway
        </Typography>
        <Typography variant="body1" sx={{ opacity: 0.95 }}>
          AI and Cursor don’t replace engineering—they remove drag. Treat the model like a fast, eager junior who writes
          first drafts so you can focus on design, correctness, and the parts that matter.
        </Typography>
      </Container>
    </Layout>
  );
}

function Section({ title, children }) {
  return (
    <Box sx={{ my: 5 }}>
      <Typography variant="h4" component="h3" gutterBottom>
        {title}
      </Typography>
      <Box sx={{"& p": { lineHeight: 1.8, margin: "12px 0" }}}>{children}</Box>
    </Box>
  );
}
