---
layout: post
title: Autonomous Vehicle Development Platform
permalink: /projects/autonomous-vehicle-development-platform/
category: Embedded Autonomy
card_order: 30
year: 2025
description: Built an RC-scale autonomy stack with ROS2, Jetson Nano, RTK-GPS/IMU fusion, lane perception, and PID control.
card_summary: RC-scale self-driving platform combining perception, localization, and control on embedded hardware.
visual_alt: Diagram of an RC autonomous vehicle stack from sensors to EKF localization, perception, PID control, and actuation.
glance:
  - label: Platform
    value: Jetson + ROS2
  - label: Localization
    value: 3 cm RTK
  - label: Control
    value: 12 mph tracking
skills:
  - ROS2
  - Docker
  - OpenCV
  - Sensor Fusion
  - Embedded Linux
  - NVIDIA Jetson
  - PID Control
main-image: /project-visual.svg
---

## What It Does

This platform turns an RC vehicle into a small autonomy testbed: sensors estimate position, perception reads the lane, and a PID controller drives steering and speed commands.

## System Flow

- Camera, RTK-GPS, and IMU data enter ROS2 nodes running on the Jetson Nano.
- An EKF fuses RTK-GPS and IMU data, then upsamples state estimates from 10 Hz to 40 Hz for smoother control.
- OpenCV lane detection and OAK-D Lite inference feed perception signals into the controller.
- PID tuning improved path efficiency by 30% and kept the vehicle stable at 12 mph.

## Engineering Focus

- Built a Dockerized WSL environment that mirrored the Jetson runtime, reducing hardware-only debugging.
- Resolved Jetson dependency conflicts by building OpenCV from source.
- Kept the stack modular so perception, localization, and control nodes could be tested independently.
