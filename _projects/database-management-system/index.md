---
layout: post
title: Database Management System
permalink: /projects/database-management-system/
category: Systems Architecture
card_order: 60
animation: database
featured: false
earlier_work: true
discipline: Software & ML
visitor_summary: A small C++ database engine that routes commands through parsing, execution, and storage layers.
contribution: Built the engine foundation with separate command, storage, and presentation layers.
year: 2024
description: Built a lightweight C++ DBMS skeleton with a tokenizer, command router, block storage layer, and tabular output views.
card_summary: C++ database-engine foundation with explicit boundaries between tokenization, command dispatch, block storage, and presentation.
visual_alt: Diagram of a C++ DBMS pipeline from CLI input through tokenizer, command routing, execution, block storage, and table output.
card_glance:
  - label: Pattern
    value: Layered architecture
  - label: Core
    value: Command dispatch + block storage
  - label: Lesson
    value: Separation of concerns
glance:
  - label: Language
    value: C++
  - label: Core
    value: Parser + storage
  - label: Pattern
    value: Command chain
skills:
  - name: C++ interface design
    application: Separating command handling, block storage, and output behind small interfaces.
  - name: Command parsing
    application: Building tokenization and command dispatch so execution logic does not manipulate raw input.
  - name: Regression testing
    application: Exercising the interactive controller path through script-level tests.
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
