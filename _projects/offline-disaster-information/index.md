---
layout: post
title: Offline Disaster Information over Low-Bandwidth Links
short_title: Offline Disaster Information
permalink: /projects/offline-disaster-information/
category: Real-Time Systems & Communications
discipline: Real-Time Systems
card_order: -20
animation: broadcast
featured: true
year: 2026
period: Fall 2026–present
project_status: In progress
description: An AI-assisted research prototype studying how to schedule compact disaster updates over unreliable, low-bandwidth links while keeping offline receiver information current.
visitor_summary: Keeping offline disaster updates current over a slow, unreliable link.
contribution: Directing AI-assisted research and critically reviewing design assumptions, information lifecycle rules, and evaluation criteria.
skills:
  - name: Systems requirements analysis
    application: Reviewing AI-proposed lifecycle rules to distinguish stale, withdrawn, and confirmed information.
  - name: Simulation evaluation design
    application: Setting airtime constraints, comparison baselines, and receiver-state metrics for AI-assisted experiments.
glance:
  - label: Scoped simulation result
    value: 24% less critical wrong-state time
  - label: Operating condition
    value: Nominal radio · 10% airtime cap
  - label: Evaluation
    value: Hurricane Florence replay
main-image: /project-visual.svg
card_visual: /project-visual.svg
terminal_visual: true
visual_width: 960
visual_height: 360
visual_alt: Official updates enter a gateway, are encoded and scheduled across a scarce broadcast link, and reach offline receivers with different packet reception. Receiver stores distinguish current, stale, and withdrawn information.
visual_caption: System concept evaluated in simulation. The contribution is update scheduling and offline information handling, not a new radio or a field-deployed disaster service.
---

## The problem

During a connectivity outage, downloading more information is not always possible. A receiver may miss an evacuation update, keep an old shelter status, or lose the message that withdraws a previous instruction.

This graduate Real Time Embedded Systems project asks which compact updates should be sent and repeated so offline receivers retain useful, current information over a thin, unreliable link. LoRa provides the simulation setting; the scheduling question is broader than one radio technology.

## My contribution

I direct AI agents in researching and prototyping the system, review the proposed assumptions, and set evaluation criteria. AI agents produce much of the implementation; my role emphasizes problem definition, critical review, and engineering decisions.

One consequential review was rejecting rules that treated an expired alert as an all-clear. Stale information must remain distinct from a confirmed status change, and retransmitting an update must not extend the source's validity. I also challenged source-independence assumptions and the difference between delivering a record correctly and establishing its real-world truth.

## How it works

1. A gateway receives updates and represents them as compact, versioned facts.
2. A scheduler chooses which facts to broadcast and repeat under an airtime budget, accounting for their importance and estimated receiver delivery.
3. Encoding and packing determine the actual bytes sent. Receiver stores decode delivered packets and apply the information lifecycle rules.
4. A replay evaluates how receiver information changes when packets are missed, updates expire, or newer versions arrive.

The intended application also includes local answering and gateway social-information fusion. These remain incomplete capabilities, separate from the implemented scheduler and codec/receiver experiments.

## The scoped result

For official Hurricane Florence updates, the selected scheduler reduced critical wrong-state time by **24%** relative to repeat-and-refresh under nominal radio conditions and a 10% airtime cap.

| Measure | Repeat-and-refresh | Selected scheduler |
| --- | ---: | ---: |
| Critical wrong-state time | 5.476243 weighted hours | 4.151964 weighted hours |

The result is the mean of five paired simulation seeds for one deployment with 27 kiosks. The comparator sends each new version twice and uses spare slots for periodic refresh. The metric is weighted exposure to incorrect critical states; it is not answer accuracy or a duration saved for every visitor.

Results vary with workload, radio conditions, and the chosen metric. Reception estimates have mixed benefits on official updates; the headline must not be read as a universal gain or attributed solely to reception awareness.

## Validation and limits

The scheduler, codec/receiver path, mesh replay, and a generic uplink sensitivity study are implemented and evaluated. Replaying the scheduler's transmissions through Meshtasticator agreed closely with the abstract channel evaluation in the tested 48-hour window. Both are simulations; this is not field validation of radio propagation.

Two local 3B answering models failed the declared evaluation, including errors on withdrawn and scheduled facts. A deterministic-template reference succeeded on the tested question cases, supporting a bounded fallback for critical questions. It does not establish unrestricted question answering.

The social-fusion draft also failed its quality target. The project is an ongoing prototype, not a completed or validated end-to-end RAG deployment.

## Next steps

The remaining work includes offline-cache organization, lifecycle presentation, and a declared traffic profile for the intended official-only uplink. These are follow-up research questions, not capabilities established by the current experiments.
