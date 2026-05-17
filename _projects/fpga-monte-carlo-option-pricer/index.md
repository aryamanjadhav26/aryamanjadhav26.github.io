---
layout: post
title: Monte Carlo Asian Option Pricer on FPGA
permalink: /projects/fpga-monte-carlo-option-pricer/
category: FPGA Acceleration
card_order: 10
year: 2026
description: Vitis HLS Monte Carlo Asian option pricer on FPGA, computing price, delta, gamma, and vega through a streaming dataflow pipeline.
card_summary: Streaming HLS pipeline on FPGA that prices Asian options and computes their Greeks (Δ, Γ, vega). Five dataflow kernels — xorshift PRNG, Box-Muller via cosine LUT, GBM path simulation, payoff reduction — with a Taylor approximation that shares one expf across base and vol-bumped paths.
visual_alt: Diagram of a 5-kernel HLS dataflow pipeline on FPGA. Seeds stream into a xorshift PRNG, into a Box-Muller transform with cosine LUT, into GBM path simulation across 64 paths × 64 timesteps, into a payoff reduction stage that emits price, delta, gamma, and vega. Show inter-kernel hls::stream channels and the parallel base / vol-up / vol-down paths in the GBM stage.
glance:
  - label: Speedup
    value: 3,228× over baseline
  - label: Optimized latency
    value: 4.4 µs
  - label: Pipeline
    value: 5 dataflow kernels
card_skills:
  - Vitis HLS
  - C++
  - FPGA
  - Monte Carlo
  - Quantitative Finance
skills:
  - Vitis HLS
  - C++
  - FPGA
  - Monte Carlo
  - Quantitative Finance
main-image: /project-visual.svg
---

## Overview

Vitis HLS implementation of a Monte Carlo pricer for Asian options, simulating 64 paths × 64 timesteps under geometric Brownian motion to compute the option price along with three Greeks: delta, gamma, and vega. The whole pricer runs as a single FPGA kernel.

## Architecture

The design is a five-kernel `#pragma HLS DATAFLOW` pipeline, with each stage running concurrently and communicating only through `hls::stream` channels.

- Seed load streams per-path PRNG seeds into the pipeline.
- Xorshift PRNG generates uniform random pairs, eight paths bundled per cycle.
- Box-Muller transform converts uniforms to standard normals; the cosine half is replaced with a 2048-entry LUT, duplicated across lanes to give each unrolled iteration its own read port.
- GBM path simulation propagates each path forward under geometric Brownian motion. To compute vega, the pricer needs paths under base, bumped-up, and bumped-down volatilities. A naive implementation calls `expf` three times per step; this design uses a first-order Taylor expansion around the base drift so a single `expf` covers all three, with error bounded under 1% across the full simulation horizon.
- Payoff reduction averages each path, computes the discounted Asian-call payoff under base / S +/- Delta S / sigma +/- Delta sigma shocks, and folds the results into price, delta, gamma, and vega via finite differences.

## Optimizations

- `#pragma HLS DATAFLOW` for inter-kernel concurrency.
- `II=1` pipelining on the critical inner loops; `frp` style on the PRNG and Box-Muller stages.
- Cyclic array partitioning with factor 4-8 for parallel BRAM access.
- Bit-width-minimized loop counters, including `ap_uint<7>` and `ap_uint<10>`, to keep the synthesized control logic tight.
- Cosine LUT duplicated into per-lane ROMs to eliminate read-port contention under unroll.
- Constant folding of all drift and volatility coefficients at compile time.
- First-order Taylor approximation on the vol-bumped paths to share one `expf` across base, up, and down, the single largest cycle saving in the design.

## Results

| Metric | Baseline (Gold) | Optimized | Improvement |
| --- | ---: | ---: | ---: |
| Latency | 14.32 ms | 4.4 µs | - |
| Cycles | 1,838,622 | 1,650 | ~1,114× |
| Clock period | 7.788 ns | 2.688 ns | ~2.9× |
| Speedup (latency) | - | - | ~3,228× |

## Tech Stack

Vitis HLS, C++, `ap_fixed<32,16>` and `ap_fixed<48,24>` for I/O and accumulators, `hls::stream`, `cmath` (`logf`, `sqrtf`, `expf`), and TCL synthesis flow.
