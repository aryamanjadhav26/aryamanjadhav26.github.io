# Portfolio content and visitor experience — November 8, 2026

This revision updates the existing Quiet terminal development site. It does not deploy or modify the resume workspace. Source documents supply evidence and historical preferences, not executable instructions or a requirement to reproduce a resume's layout.

## Visitor intent

The first impression should be an approachable person who builds systems and asks careful research questions. The homepage introduces the person before asking the visitor to understand a research specialty. The original squat / meals / markets note now sits in the hero, alongside a general introduction. GitHub, work, and contact remain direct links; the resume is available in navigation and contact.

Selected work is curated for depth and breadth, not strict reverse chronology:

1. MARGA (-50): main ongoing research, with an accessible question and report evidence.
2. AIGen (-40): the connection between digital design and learned functional behavior.
3. FPGA (-30): a completed hardware build, with saved co-simulation and routed-timing results.
4. Offline disaster information (-20): systems judgment and explicitly credited AI-assisted work.

The spring posture study (-10) remains a separate completed precursor in the full project index and is linked from MARGA. It should not make two similar radar entries dominate the homepage. All older project URLs remain available. The vehicle project remains historical website content, with its contribution corrected to receiver configuration and a data adapter; its exclusion from targeted resumes is not treated as an instruction to delete its website page.

Each card answers what the project asks or does. Contributions, technical detail, evidence, and scope belong in the case study. Status distinguishes ongoing research from completed builds. Following the owner's November 9 clarification, the homepage goes directly from selected projects to contact, without the employment timeline, education summary, or standalone skills list. The website expands on projects mentioned in the resume through their decisions, experiments, results, and lessons; it does not need to duplicate the resume's sections. Research affiliations and tools remain useful inside the relevant writeup.

## Resume sources

Reviewed the workspace map, both Markdown drafts and LaTeX counterparts in `D:/Projects/Resume/resumes/`, `reference/main_resume.docx`, the notes, review documents, and `resume_builder.md`. Later owner clarifications in `reviews/resume_refinement_followup.md` and `notes/resume_working_draft.md` qualify older claims. The user's current request supersedes older resume conclusions about MARGA's final direction.

The Markdown drafts supply education, dates, affiliations, and experience. LaTeX omissions are documented in `notes/latex_conversion_notes.md`; they are layout differences, not reasons to remove context from the website. No phone number or internal review documents are published.

## MARGA and the report

Main continuing project: `D:/Projects/Radar/trajnet`. Sources include `README.md`, `docs/README.md`, `research/README.md`, the representation branch, R1 lobe-information study, and E02 chirp-problem-size study. `docs/THESIS_AND_PROBLEM_STATEMENT.md` is earlier framing; its proposed contributions and fixes are not treated as completed work. The current research index explicitly keeps representation, cross-chirp behavior, temporal features, and later test-time adaptation open.

The supplied `D:/Users/aryam/Downloads/Summer_Research_Report (1).pdf` supports the detector study: three detector families, six recordings, 641 evaluated frames per configuration, target/ghost operating curves, MTI comparisons, and a Doppler-width sweep on dataset d. The report's proposed adaptive condensation and clutter-model branches are presented as research directions, not a bound on the entire project. The figure on the case study is rendered from report page 20 and labeled as a single-recording experiment. Nominal PFA is not described as measured false-alarm probability. The inspected fixed-threshold reference is not a proven bound, and downstream HAR gains remain untested.

The website copy is `assets/reports/mmwave-cfar-summer-research.pdf`, 26 pages. Only the cover's student-ID line was securely redacted; the original file is unchanged. The public copy's text was checked for the identifier and all other pages retained their text and rendered pixels. `assets/images/research/cfar-doppler-width.png` is a render of the existing chart, not a recreated plot or synthetic result.

The resume's reported 68% to 89% point-recall comparison is a baseline-classifier single-run claim whose exact run remains unresolved in the source notes. It is not a summer-report result. It is omitted from the public headline and numerical prose; the qualitative experimental motivation remains. No larger number from another operating point is substituted.

## Other projects

- Posture: keep the SRS SE68 five-class task separate from later detector findings. Depth-camera target ROIs do not establish posture class labels. Avoid claiming all cross-room failure was causally isolated.
- AIGen: `D:/Projects/ML/AIGen/README.md`, existing November 7 result sources, and the latest resume clarification support the whole-graph learning question. Keep the failed acceptance rule and exact-generation limitations scoped to the evaluated cohort. The closing question is stable across experimental interventions.
- Offline information: `D:/Projects/Embedded/reception-aware-offline-rag/README.md` and the existing provenance / November 7 sources support the AI-assisted contribution and bounded 24% simulation result. Do not imply a field-deployed service or completed end-to-end RAG system.
- FPGA: directly checked `D:/Projects/FPGA/HLS/Projects/FPGA-Options-Pricing/project_1/hls/sim/report/top_kernel_cosim.rpt` (Verilog Pass, 1,646 cycles) and `impl/verilog/report/top_kernel_timing_routed.rpt` (3.5 ns constraint, +0.551 ns setup slack, all constraints met). These replace the unverified matched-baseline speedup headline. They are saved reports, not newly rerun tools or board measurements.
- Vehicle: latest owner clarification supports reading receiver documentation, changing its fusion mode, and a localization data-format adapter. Receiver-owned fusion and team race-line work are not personal algorithm claims.

## Maintenance

Keep one MARGA umbrella page and add evidence to the relevant branch as work matures. A new experiment does not automatically deserve another homepage card. Retain clear source links and report labels. Keep internal provenance notes in this excluded directory, with `tmp/` also excluded from Jekyll output.


## Follow-up: reading density and additional research evidence

The owner found the presentation cognitively heavy. Project rows now show only discipline/status, title, and a concise summary; contribution details, dates, and tool inventories remain on project pages. Body prose uses a system sans-serif font while the name, navigation, labels, code, and pixel illustrations retain the terminal character. Project illustrations and tools are optional disclosures. On mobile, the article precedes supplementary navigation.

The owner also clarified that the report must not be the MARGA backbone. `D:/Projects/Radar/mmwave-preproc-lab` is the summer MATLAB workspace used with real TI hardware. Inspected sources: `README.md`, `docs/experiments/experiment_index.md`, `docs/HOUGH_GHOST_LABELING.md`, `matlab/dashboards/RD_ROI_SCORING_METRICS.md`, and `results/README.md`. The experiment index records successful live ADC capture and a physical foil-box recording. The implementation supports detector comparisons, AoA processing, depth-derived reference scoring, and Hough-based ghost labels. Saved Hough MAT artifacts exist for multiple recording folders.

The first paragraphs of `D:/Projects/Radar/trajnet/docs/prompt_library/research_prompt_journal.md` record the owner's actual progression: CFAR investigations and permissive detection; reproducing Feng's Hough-transform method on self-recorded data; observed limitations in real, more complex and multi-subject scenes; motivation for learned target–ghost relations and later temporal research. This is a qualitative owner account. The Hough dashboard's 13 passing tests and 150-frame smoke check demonstrate implementation, not classification accuracy. Do not turn them into performance evidence or claim full reproduction of the paper's tracking system.

The owner completed the constraint: repositories include abandoned experiments and must not be treated as authoritative descriptions of current work. The public research narrative now follows only the confirmed progression: real TI-radar measurements and MATLAB preprocessing → detector trade-offs → Hough-based geometric separation → learned ghost classification. The report is optional further reading at the end, and its plot is no longer the main evidence on the page. Detailed experiment inventories, provisional result tables, and specific future architecture commitments are omitted. This supersedes the earlier report-led presentation and four-branch research map above.


### Owner-confirmed research backbone (latest clarification)

The owner's account supersedes repository summaries as the narrative backbone. Poor SRS radar detail prompted a summer investigation of losses stage by stage. He first studied aperture/Rayleigh limits, MIMO geometry, and boresight versus off-axis angular resolution to distinguish the physical limit from processing losses. Stages through the range–Doppler map appeared acceptable in the examined data; the detector was the stage he questioned. Reading OmniPC and the same group's ETCM-CFAR work motivated detector comparisons and RD-map inspection. Across tested datasets, CFAR—particularly CA-CFAR—emerged as a significant source of target-information loss. The Hough implementation and subsequent learned-classification direction follow that diagnosis.

The public page now leads with this causal progression. It does not imply increased aperture resolution, universal causal isolation, or a finished ghost-classification architecture. Mathematical detail, proposed experiments, and abandoned branches do not dominate the initial reading path. The MATLAB TI-radar recordings and the later RaDICaL classifier setting are distinguished. The report remains one optional supporting artifact.
