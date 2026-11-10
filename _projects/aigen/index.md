---
layout: post
title: Whole-Graph Circuit Generation with Discrete Flow Matching
short_title: 'AIGen: Circuit Generation'
permalink: /projects/aigen/
category: Generative ML & Digital Design
discipline: Software & ML
card_order: -40
animation: circuit
featured: true
year: 2026
period: Oct 2026–present
project_status: In progress
description: Investigating truth-table-conditioned discrete flow matching for circuit generation, with complete And-Inverter Graphs refined in parallel and depth bounded by construction.
visitor_summary: Teaching a generative model to build functionally correct logic circuits.
contribution: Developing the fundamental flow-matching model and investigating its learned behavior through controlled experiments.
skills:
  - name: Generative model development
    application: Developing a discrete flow-matching model in PyTorch for whole-graph circuit refinement.
  - name: Functional circuit evaluation
    application: Using exact simulation to distinguish valid wiring from correct Boolean behavior.
  - name: Controlled ML experiments
    application: Testing context use and self-conditioning against declared acceptance criteria.
glance:
  - label: Specification
    value: Boolean truth table
  - label: Generation
    value: Parallel whole-graph refinement
  - label: Main question
    value: Learning circuit function
main-image: /project-visual.svg
card_visual: /project-visual.svg
terminal_visual: true
visual_width: 960
visual_height: 360
visual_alt: A target truth table conditions the parallel refinement of an And-Inverter Graph. Exact simulation compares the circuit output with the target and supplies functional feedback.
visual_caption: The model under study. Legal graph structure and bounded depth do not by themselves guarantee the correct circuit function.
---

## The question

A circuit can have valid wiring and still compute the wrong function. This research asks whether a generative model can learn the relationships needed to construct a circuit from its Boolean truth table.

The model starts with a random graph and repeatedly revises a complete And-Inverter Graph (AIG). It predicts changes across the graph in parallel, allowing every layer to change. The layered representation bounds logical depth by construction.

## My contribution

My individual scope is the fundamental flow-matching generative model and the investigation of what it learns. I use my digital circuit design background to reason about the difference between predicting plausible connections and learning the circuit's behavior.

The experimental work tests learned relationships, failure modes, and attainable functional capabilities. Earlier team work supplies context; inherited results are kept separate from the current experiments.

## How it works

- A truth table specifies the desired Boolean function.
- A discrete flow-matching model refines a complete, depth-constrained graph through parallel wire predictions.
- Exact simulation evaluates the function computed by the current circuit, rather than treating structural similarity as correctness.
- Functional feedback and self-conditioning are investigated as ways to use intermediate computations during later refinement steps.

Circuit size and depth describe structural quality. Functional error measures the mismatched truth-table rows. Exact equivalence is a separate, stricter outcome; high bit accuracy is not proof of a correct circuit.

## What the experiments show

Controlled completion probes expose an important gap: the model can recover small missing pieces when the surrounding reference circuitry and output are fixed, but performs much worse when the whole graph is free to change.

This supports investigating context use and preservation during refinement. It does not isolate a single cause: fixing the context also reduces the task's freedom and fixes the output pointer.

In the November 7 six-input evaluation, repeated self-conditioning improved mean normalized error but **did not pass the preregistered acceptance rule**. All seven evaluated training runs had zero exact-within-eight on the main cohort. The project remains an investigation of functional learning, not a completed circuit-synthesis solution.

## Current direction

I'm investigating whether the model learns the circuit relationships needed for functionally correct whole-graph generation on unseen Boolean functions. Simulation-guided learning and self-conditioning are approaches under test; the question remains broader than any one intervention.

Logical depth is not a measured silicon timing result. RL fine-tuning and final external correction are later pipeline stages, outside the current fundamental-model contribution. No advantage over conventional synthesis or broad exact-generation capability is claimed.
