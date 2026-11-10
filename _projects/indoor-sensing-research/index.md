---
layout: post
title: Where Radar Loses Human Detail
short_title: 'MARGA Lab: Indoor mmWave Sensing'
permalink: /projects/indoor-sensing-research/
category: Sensing & Machine Learning Research
discipline: RF & Sensing
card_order: -50
animation: radar
featured: true
year: 2026
period: May 2026–present
project_status: Ongoing research
description: An investigation of physical resolution, processing losses, and learned multipath rejection.
visitor_summary: Tracing where human detail is lost between raw radar measurements and a point cloud.
contribution: Tracing losses through the sensing pipeline, testing detectors on real recordings, and investigating target–ghost separation.
report: /assets/reports/mmwave-cfar-summer-research.pdf
report_label: Summer research report (PDF)
report_secondary: true
skills:
  - name: Radar signal processing
    application: Tracing real TI radar measurements from raw ADC samples to point clouds in MATLAB.
  - name: Detector evaluation
    application: Comparing CFAR methods and threshold trade-offs using depth-derived target regions.
  - name: Geometric multipath separation
    application: Implementing Hough-based target–ghost separation and examining its limits in complex scenes.
main-image: /project-visual.svg
card_visual: /project-visual.svg
terminal_visual: true
visual_width: 960
visual_height: 360
visual_alt: Conceptual illustration of radar returns and multipath rejection, one branch of an ongoing sensing investigation.
visual_caption: Conceptual illustration of target returns and multipath separation.
---

## Why was so much human detail missing?

My [SRS radar posture work]({{ '/projects/radar-posture-recognition/' | relative_url }}) produced sparse measurements with little usable human detail. Over the summer, I began tracing where that detail was lost: what the sensor could physically resolve, and what its processing discarded.

This became my independent study in Georgia Tech's MARGA Lab, advised by Prof. Karthikeyan Sundaresan.

## First, separate the physical limit from processing loss

I worked through aperture physics and MIMO array geometry, including the Rayleigh resolution limit and how angular resolution changes away from boresight. That established the hardware's limits before I examined the processing.

I then followed the path from raw ADC samples to point clouds. In the recordings I examined, the stages through the range–Doppler map looked acceptable. **The detector became the stage I wanted to question.**

Reading OmniPC and the same group's ETCM-CFAR work helped focus that investigation on CFAR detection. I built a MATLAB workflow with a real TI radar and a depth-camera reference, inspected range–Doppler maps, and compared detection methods across recorded datasets.

## CFAR became the turning point

Across the datasets I tested, **CFAR emerged as a significant source of lost target information**, particularly in the CA-CFAR results. The sparse output could not be explained by the physical aperture limit alone.

Relaxing detection thresholds recovered weak human returns, but also admitted more multipath ghosts: misleading returns caused by reflections in the room. That led to the next question: could I retain more target information, then separate the ghosts afterward?

## From geometric separation to learning

I implemented a Hough-transform method based on Feng's work to identify geometric relationships between targets and their multipath reflections. It was useful in simple, single-person scenes; more complex rooms and multiple subjects made separation less reliable in my tests.

This motivated investigating **learned target–ghost relationships**. The continuing work uses a PairwiseNet baseline on the RaDICaL indoor dataset and explores representations and temporal evidence for ghost classification. The final architecture remains open.

The thread connecting the work is preserving useful human information: understanding the physical limit, locating avoidable processing loss, and testing what can distinguish the recovered returns from multipath.

## Experimental context & further reading

The summer MATLAB work uses a TI AWR6843ISK, DCA1000 capture card, and Intel RealSense D455. Depth-derived target regions provide a reference for examining radar returns. The later learned-classifier work uses the RaDICaL dataset; it is a separate experimental setting.

[Summer research report (PDF, 26 pages)]({{ '/assets/reports/mmwave-cfar-summer-research.pdf' | relative_url }}) — supporting notes on the detector experiments, alongside the hardware investigation, Hough implementation, and continuing classifier work. The report covers one part of the research.
