---
layout: post
title: 8-bit Processor Design Project
permalink: /projects/cse-141l-project/
category: Computer Architecture
card_order: 40
year: 2025
github: https://github.com/aryamanjadhav26/CSE-141L-Project.git
description: Designed a custom SystemVerilog CPU with a 9-bit ISA and 8-bit datapath, then used the ISA to implement integer-to-float and float-to-integer conversion routines.
card_summary: Custom CPU architecture built around the challenge of int-to-float and float-to-int conversion on an 8-bit datapath.
visual_alt: Diagram of an 8-bit pipelined CPU showing fetch, decode, execute, writeback, registers, and verification waveforms.
glance:
  - label: ISA
    value: 15 ops
  - label: Datapath
    value: 8-bit CPU
  - label: Challenge
    value: int/float convert
skills:
  - SystemVerilog
  - RTL Design
  - Computer Architecture
  - Pipelining
  - ISA Design
  - Numeric Conversion
  - Testbenches
main-image: /project-visual.svg
---

## What It Does

The processor executes a compact instruction set with ALU, memory, and control-flow operations while supporting multi-byte arithmetic on an 8-bit datapath. The main challenge was using that limited ISA to convert 8-bit integers to floating-point values and convert floating-point values back to integers.

## Architecture

- 9-bit instruction encoding with a 15-instruction ISA.
- 8-register file, including dedicated registers for immediates and flags.
- Pipelined fetch, decode, execute, and writeback stages.
- Assembly programs for 16-bit arithmetic, integer-to-float conversion, and float-to-integer conversion.

## Engineering Focus

- Iterated on the ISA to fit useful behavior into tight encoding limits.
- Mapped numeric conversion onto a tiny instruction set without dedicated floating-point hardware, using multi-step assembly routines and careful register conventions.
- Used modular SystemVerilog testbenches and waveform analysis to validate behavior.
- Learned how small datapath and encoding decisions ripple into hazards, forwarding, and usability.
