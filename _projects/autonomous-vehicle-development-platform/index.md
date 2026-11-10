---
layout: post
title: GPS-Guided RC Racing Integration
permalink: /projects/autonomous-vehicle-development-platform/
category: Embedded Autonomy
card_order: 30
animation: racing
featured: false
earlier_work: true
discipline: Real-Time Systems
short_title: GPS-guided RC racing
visitor_summary: Connecting a GPS receiver's localization output to an existing RC-car control stack.
contribution: Configured the receiver's fusion mode and built the localization data-format adapter.
year: 2025
description: A team RC-racing project, with my contribution focused on receiver configuration and a data-format adapter for an existing Donkey Car pipeline.
card_summary: Receiver configuration and localization data adaptation within a team RC-racing system.
visual_alt: Conceptual illustration of an RC-car system.
glance:
  - label: My scope
    value: Localization interface
  - label: Existing platform
    value: Donkey Car
  - label: Setting
    value: Team project
skills:
  - name: Hardware configuration
    application: Using receiver documentation to select its sensor-fusion mode for the localization pipeline.
  - name: Data interface integration
    application: Writing a localization data-format adapter for an existing ROS-based Donkey Car stack.
main-image: /project-visual.svg
---

## The team project

The team worked on GPS-guided RC racing using an existing Donkey Car control pipeline. Localization and race-line planning were parts of the broader system.

## My contribution

I read the receiver documentation, changed its fusion configuration, and developed a data-format adapter to connect the localization output to the ROS-based Donkey Car pipeline. Sensor fusion was performed by the receiver module.

The engineering work was at the interface: making an existing localization output usable by an existing control system. The team's race-line optimization provides context for the project; my documented contribution is the receiver configuration and adapter.
