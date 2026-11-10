# Aryaman Jadhav — Engineering Portfolio

A Jekyll portfolio for electrical and computer engineering across hardware, software, machine learning, and systems research. The Quiet terminal design uses a charcoal canvas, readable sans-serif prose, monospace accents, lime highlights, and a short typed introduction.

## Run locally

Install Ruby and Bundler, then:

```sh
bundle install
bundle exec jekyll serve
```

Open the local address printed by Jekyll. GitHub Pages continues to use the existing Jekyll setup.

## Content

- `_config.yml`: name, intro, personal note, contact links, and resume link.
- `_projects/<slug>/index.md`: project metadata and case-study content.
- `Reference/project-template.md`: copyable starter for a new project.
- `design/adding-projects.md`: publishing flags, filters, image conventions, and authoring instructions.
- `design/content-sources.md`: source notes for the newer projects, research updates, attribution, and scoped results.

The homepage moves from a short personal introduction to selected projects and contact. It does not repeat employment history, education, or a standalone skills inventory; the resume remains linked in navigation and contact. Project writeups expand on the work with problems, design choices, individual contributions, experiments, results, and lessons. Tools and research affiliations belong in the relevant project's context.

The homepage shows five selected projects with `featured: true`: MARGA, AIGen, FPGA, offline disaster information, and radar posture recognition. Both lists follow `card_order` (lower first); choose placement by contribution and visitor relevance, keeping MARGA as the lead research project. Use `period` for the known date/term and `earlier_work: true` for historical entries. The full index includes every entry without `hidden: true`; filters come from each project's `discipline`. Existing project URLs are retained.

## Presentation

- `_layouts/wrapper.html`: shared document, metadata, navigation, and footer.
- `_layouts/post.html`: case study, section navigation, resources, and next project.
- `css/terminal.css`: active styles and responsive layouts.
- `assets/js/script.js`: intro, project filters, contents links, and email copy.

The site works without JavaScript. The full intro is available to assistive technology; reduced-motion users see static text. Navigation and content never wait for animation. Project filters preserve the selected area in the URL.

## Verify

```sh
bundle exec jekyll build
python scripts/check-site.py
node --check assets/js/script.js
```

The generated-site check verifies local links, fragments, assets, heading structure, next-project links, and authoring-directory exclusions. Review desktop and mobile layouts in a browser before deployment.

The site originally used the [free-to-engineer portfolio template](https://github.com/leea12/freeToEngineer). See LICENSE for license details.
