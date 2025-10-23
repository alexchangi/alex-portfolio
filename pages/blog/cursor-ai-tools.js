import Layout from "../../hoc/Layout";
import { Container, Typography, Box, Divider } from "@mui/material";

export default function BlogArticle() {
  return (
    <Layout
      route="/blog/cursor-ai-tools"
      title="Using Cursor as a Copilot: Faster Shipping, Real Limits"
    >
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
          My real-world take on AI + Cursor
        </Typography>
        <Typography variant="subtitle1" sx={{ opacity: 0.9 }} gutterBottom>
          I use Cursor every day. It hasn’t replaced engineering, but it has
          absolutely changed the pace. At Beyond and JamCyber we’ve seen up to
          5× faster delivery on the kind of work that normally soaks time:
          refactors, glue code, and repetitive edits.
        </Typography>

        <Divider sx={{ my: 4, borderColor: "rgba(255,255,255,0.15)" }} />

        <Section title="Not autopilot—copilot">
          <p>
            This is the headline for me: agents are <b>not</b> ready to run
            wild on a repo. Unmoderated, they hallucinate APIs, miss edge cases,
            and drift across architectural boundaries. Used as a <b>copilot</b>,
            though—where I set outcomes, review diffs, and keep it on-rails—it’s
            a force multiplier and a very fast junior.
          </p>
        </Section>

        <Section title="What it’s genuinely great at for me">
          <ul>
            <li>
              <b>Refactoring</b>: safe, repeatable edits across files. I ask for
              the intent, it proposes edits, and I approve line-by-line.
            </li>
            <li>
              <b>Renaming</b>: types, props, functions, tests—kept in sync with
              usage. Way fewer broken imports.
            </li>
            <li>
              <b>Repetitive logic by tabbing</b>: when I start a pattern, Cursor
              completes the next 10 variations. I just tab through and keep the
              momentum.
            </li>
            <li>
              <b>Consistent styling (within limits)</b>: enforcing a shared
              <code>sx</code> pattern or component API so things look and feel
              the same.
            </li>
          </ul>
          <p>
            In its current state, these strengths—not full autonomy—are what
            actually drive development speed.
          </p>
        </Section>

        <Section title="Where it stumbles (and why I review everything)">
          <ul>
            <li>
              <b>Hallucinated APIs</b>: the snippet looks right but the
              signature changed two versions ago. I always import-check.
            </li>
            <li>
              <b>Architecture drift</b>: it’ll “just work” by skipping a layer.
              I keep boundaries explicit in prompts and in code.
            </li>
            <li>
              <b>Happy-path tests</b>: I extend with edge cases and failure
              modes before shipping.
            </li>
          </ul>
        </Section>

        <Section title="How the 5× shows up at Beyond & JamCyber">
          <p>
            The big wins land on integration-heavy work: API clients, adapters,
            dashboards, email flows, and refactors. New ideas ship faster
            because scaffolding is near-instant and follow-up edits are cheap.
            For novel core logic we slow down and design first—AI helps implement
            the seams, not the thinking.
          </p>
        </Section>

        <Section title="My daily flow">
          <ol>
            <li>State the outcome and constraints in one sentence.</li>
            <li>Ask for the smallest useful edit (one file/function).</li>
            <li>Run it, read the diff, lint and test.</li>
            <li>Iterate or revert quickly; keep PRs tight.</li>
          </ol>
        </Section>

        <Divider sx={{ my: 6, borderColor: "rgba(255,255,255,0.15)" }} />

        <Typography variant="h5" component="h2" gutterBottom>
          Takeaway
        </Typography>
        <Typography variant="body1" sx={{ opacity: 0.95 }}>
          Cursor is how I keep pace. It’s a copilot, not an autopilot—great at
          refactors, renames, repetitive edits, and keeping styling consistent
          enough to move fast. I stay in the loop and let it remove the drag.
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
