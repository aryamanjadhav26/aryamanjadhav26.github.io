---
layout: post
title: Database Management System
permalink: /projects/database-management-system/
category: Systems Architecture
github: https://github.com/Aryamanj26/DatabaseManagementSystem.git
description: Built a lightweight C++ DBMS skeleton with a tokenizer, command router, block storage layer, and tabular output views.
card_summary: Layered C++ database engine prototype that separates parsing, command routing, storage, and presentation.
visual_alt: Diagram of a C++ DBMS pipeline from CLI input through tokenizer, command routing, execution, block storage, and table output.
glance:
  - label: Language
    value: C++
  - label: Core
    value: Parser + storage
  - label: Pattern
    value: Command chain
skills:
  - C++
  - Database Internals
  - Parsing
  - Block Storage
  - API Design
  - Regression Testing
main-image: /project-visual.svg
---

## What It Does

This project is a database engine foundation: user commands are tokenized, routed through command handlers, executed against storage abstractions, and returned through view objects.

## Architecture

- `AppController` coordinates command routing, errors, and output.
- Tokenizer and scanner own lexical parsing so execution never manipulates raw strings.
- Chain-of-responsibility command processors make new commands easy to add.
- Block-oriented storage APIs prepare the engine for buffer pools, free-space maps, and logging.
- `View` and `TabularView` keep presentation separate from execution logic.

## Engineering Focus

- Designed for growth instead of one-off demo behavior.
- Kept interfaces small so parser, executor, storage, and output can evolve independently.
- Used script-level tests that exercise the same controller path as interactive CLI use.
