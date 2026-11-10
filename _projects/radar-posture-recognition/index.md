---
layout: post
title: Radar Posture Recognition and Generalization Study
short_title: Radar Posture Recognition
permalink: /projects/radar-posture-recognition/
category: Perception & Generalization
discipline: RF & Sensing
card_order: -10
animation: posture
featured: true
year: 2026
period: Spring 2026
project_status: Completed study
description: A five-class seated-posture classifier using SRS SE68 radar point clouds and depth-camera reference data, followed by an investigation of its cross-environment sensitivity.
visitor_summary: Recognizing seated posture from radar, and investigating failures across rooms.
contribution: Developing the classifier and investigating how the sensing pipeline affects performance across rooms.
skills:
  - name: Point-cloud classification
    application: Developing a five-class seated-posture classifier from sparse radar measurements.
  - name: Cross-environment evaluation
    application: Investigating room-dependent classification failures and the information reaching the model.
glance:
  - label: Task
    value: Five seated postures
  - label: Input
    value: SRS SE68 point clouds
  - label: Main finding
    value: Room-sensitive detection
main-image: /project-visual.svg
card_visual: /project-visual.svg
terminal_visual: true
visual_width: 960
visual_height: 360
visual_alt: Radar point clouds feed a five-posture classifier, with depth-camera data available as a reference. Evaluation in a different room reveals sensitivity to clutter and multipath, motivating detector research.
visual_caption: The important outcome was a generalization question that motivated the subsequent detector and multipath study.
---

## The task

I developed a classifier for five seated postures from SRS SE68 radar point clouds. Depth-camera target regions provided a reference for investigating the radar measurements.

The goal was to infer human posture from sparse radar measurements. Moving the task across environments exposed a more fundamental issue than the classifier architecture alone.

## What changed between rooms

Classification performance was strongly room-dependent. This prompted an investigation of the acquisition and processing chain. Later detector studies identified target-return loss and environment-specific multipath as contributing factors; the classifier study did not isolate every cause of the cross-room gap.

Small aperture limits angular detail, and slow body motion can merge near zero Doppler. Lower thresholds retain more weak returns, but also admit environment-specific multipath. Changing the detector input therefore changes what information reaches the classifier.

## The research decision

I reframed the problem around preserving available target information while rejecting environment-specific multipath. Improving a downstream model has limited value if relevant measurements are removed earlier in the pipeline.

This study motivated the continuing [indoor sensing research]({{ '/projects/indoor-sensing-research/' | relative_url }}) on detector information loss and learned multipath rejection.

## Scope

This project establishes the classification task and the observed generalization problem. It does not claim successful cross-room deployment, controlled isolation of every failure mechanism, or an increase in the radar's physical resolution. The later study's point-recall result belongs to that research, not to this classifier.
