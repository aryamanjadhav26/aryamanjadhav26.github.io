# Terminal redesign exploration

Branch: `codex/terminal-redesign`

Quiet terminal was selected and implemented on this branch. The presentation layer and visitor-facing project summaries have been rebuilt; existing project URLs and technical case-study content are preserved. Nothing has been deployed. The homepage features MARGA, AIGen, FPGA, and offline disaster information. The posture precursor remains in the full index. The intro and hero graphic are general; domain detail lives in the projects.

## Directions

- **Quiet terminal (recommended):** charcoal canvas, grey monospace, lime accents, generous spacing, a small pixel radar graphic, and clearly written project rows. Contemporary and readable with terminal character.
- **Field notebook:** warm black, amber accents, boxy headings, an index rail, numbered engineering entries, and compact pixel diagrams. More rustic and personal.
- **Phosphor:** a green terminal with shell prompts, a directory-style project index, and expandable project readouts. Strongest terminal identity; still uses ordinary links and buttons.

## Shared visitor experience

1. Name and short typed introduction with an underscore cursor. Keep the animation to about two seconds, reserve its space, and show the complete text immediately for reduced motion, absent JavaScript, and repeat visits. Never block navigation or project content behind typing. Preserve the intro text for screen readers without announcing each character.
2. Selected projects, with a plain-language explanation of what each does and what Aryaman contributed. Keep deeper technical detail in the existing project pages.
3. Project writeups explain the problems, engineering choices, contributions, experiments, and lessons. Current radar research stays within its project, clearly marked as work in progress.
4. Contact follows selected work. The personal note appears in the hero; employment history, education, and a standalone skills inventory stay off the homepage.
5. Resume, GitHub, email, and LinkedIn remain available as links, with the resume in navigation and contact.

Use monospace for readable text and a restrained pixel face for selected headings. Highlight links, key words, and focused controls. Use pixel art that refers to the actual work: radar returns, an FPGA pipeline, or an 8-bit processor. Preserve the specific personal writing; keep decorative terminal commands secondary to visitor tasks.

## Efficient implementation

Choose one direction and record any borrowed element from another. Then implement one complete vertical slice: mobile and desktop home page plus one project page. Review typography, content order, and animation together before carrying the design across the remaining pages.

Keep the existing Jekyll and GitHub Pages setup and Markdown project collection. Rebuild the presentation layer rather than migrating the content to another framework. Preserve existing project URLs and search metadata.

## Review criteria

- Visitors can identify the engineering focus and find a project, resume, or contact link immediately.
- Each project states its purpose, contribution, and evidence; estimates remain labeled as estimates.
- Navigation works by keyboard and touch; no hover-only information or required terminal commands.
- Layout fits 320px screens; body text remains readable and has accessible contrast.
- Intro has a static fallback, reduced-motion behavior, and no layout shift.
- Existing project links, media, metadata, and GitHub Pages build remain valid.

The original three-direction preview records the exploration. The branch implementation uses the selected Quiet terminal direction and the intro behavior above. See `adding-projects.md` for authoring instructions and `content-sources.md` for the current project and research evidence.
