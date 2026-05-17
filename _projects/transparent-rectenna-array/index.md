---
layout: post
title: Transparent Rectenna Array for Space Applications
permalink: /projects/transparent-rectenna-array/
category: RF Energy Harvesting
card_order: 20
year: 2026
description: Designed and simulated a transparent fused-quartz rectenna and six-element array at 2.45 GHz for space-compatible RF energy harvesting.
card_summary: HFSS-ADS co-simulated transparent rectenna array that converts ambient 2.45 GHz RF into usable DC power.
visual_alt: Diagram of a transparent fused-quartz rectenna array harvesting 2.45 GHz RF energy and converting it through a rectifier into DC output.
glance:
  - label: Frequency
    value: 2.45 GHz
  - label: Array
    value: 6 elements
  - label: Output
    value: 4.51 V
skills:
  - HFSS
  - ADS
  - RF Energy Harvesting
  - Antenna Design
  - S-Parameters
  - Rectifier Design
  - Fused Quartz
main-image: /project-visual.svg
paper: /_projects/transparent-rectenna-array/paper.pdf
poster: /_projects/transparent-rectenna-array/poster.pdf
---

## What It Does

This project explores transparent rectennas for spacecraft surfaces, viewports, and sensor covers: the antenna stays optically clear while harvesting ambient 2.45 GHz RF energy and converting it to DC power.

## Design Flow

- Adapted a published transparent plexiglass rectenna to fused quartz for lower outgassing, better thermal stability, and space-friendly material behavior.
- Re-tuned the strip-loop antenna and coplanar stripline feed in HFSS after changing the substrate dielectric properties.
- Exported the antenna as S-parameter models and built an ADS co-simulation with an SMS7630 voltage doubler rectifier.
- Modeled incident RF illumination as a Thevenin source and swept power density to estimate DC output and RF-to-DC efficiency.
- Expanded the design from a single element to a six-element array with 40 mm spacing and coupling below about -31 dB at 2.45 GHz.

## Results

- The single fused-quartz element achieved S11 = -17.43 dB at 2.45 GHz.
- At 42 uW/cm^2, the single element produced 0.750 V with 27.6% simulated efficiency.
- The six-element fused-quartz array produced 4.51 V into a 5.3 kOhm load at 42 uW/cm^2, with peak efficiency around 32%.
- The array result was close to the reference plexiglass array while using a substrate better suited for space environments.

## Symposium Submission

I submitted this work to the ORS symposium as a paper and poster. The poster emphasizes the motivation, HFSS/ADS flow, and main array-level result; the paper documents the modeling assumptions, substrate retuning, co-simulation method, and limitations.
