# Original project proposals — superseded

Historical design proposal, now superseded by the implemented project pages. AIGen and offline disaster information have been added to the local project collection with the resume-informed contribution wording. See `content-sources.md` for the current evidence and status. Nothing has been deployed.

## AIGen — Learning to generate logic circuits

Source: `D:/Projects/ML/AIGen`.

Proposed summary: Researching generative models that turn truth tables into small, depth-bounded logic circuits, with exact simulation to check what they actually compute.

Lead with the connection between ML and digital design, backed by an evaluation system. Explain the current whole-graph discrete flow-matching model, circuit representation, simulator, ABC comparison tools, controlled experiments, and investigation of refinement failures. Attribute inherited teammate work separately. Describe RL and final correction as later stages, not delivered capabilities.

Use the November 7 completed-results review and actual result artifacts: several experiment README files still show pre-run status. E039 is NEUTRAL under the registered rule. Mean normalized error improved from 0.7914 to 0.7453 in the reported comparison, but missed acceptance criteria and has baseline-provenance caveats. All seven runs have zero exact-within-eight on the main six-input cohort. Do not promote bit accuracy as circuit correctness or silicon quality.

Suggested visual: truth table → generated AIG → exact-simulation check. Optionally highlight differing output rows from one actual saved sample. Results figures must identify cohort, seeds, sampling budget, and metric direction.

## Reception-aware offline information — Keeping disaster updates fresh

Source: `D:/Projects/Embedded/reception-aware-offline-rag`.

Proposed summary: A simulation-based system for deciding which disaster updates to broadcast when offline devices share a slow, unreliable link.

Lead with constrained scheduling, freshness, and correct lifecycle handling. The contribution is the scheduler and offline information pipeline, not a new radio. Explain airtime, encoding/packing, receiver state, priority tradeoffs, baselines, paired trials, and Meshtasticator replay. Radio and propagation evidence is simulated, not field measurement or deployed hardware.

The channel abstraction agrees with mesh replay within 0.0024 in the reported 48-hour window. The November 7 follow-up includes 495 experimental cells, with mixed reception benefits on official workloads and average gains under a particular synthetic stress workload. Preserve the full-score versus valid-period distinction. Both small answering models failed evaluation; present the documented deterministic-template fallback for critical questions. Do not claim usable social fusion or reliable autonomous RAG answering.

Suggested visual: gateway → scarce airtime → receivers; show current, stale, and withdrawn facts. A replay not driven by a frozen recorded run must say “Illustrative replay.”

## Visual options

1. **Engineering miniatures (recommended):** one small bespoke terminal-colored diagram per selected project, plus a plain-language caption. Fast to scan, authentic, and easy to maintain.
2. **Short interactive replays:** optional playback of a recorded circuit-generation trace or packet/freshness timeline. Higher explanatory value, with more implementation and evidence work. Keep a useful static first frame and reduced-motion fallback.
3. **Evidence-led previews:** a compact result comparison or actual output excerpt with one engineering takeaway. Keep scope visible and avoid ambiguous headline percentages.

Recommended mix: miniatures on the homepage, an evidence figure near the top of each case study, and optional replays deeper in the page. Understanding must never depend on motion or interaction.
