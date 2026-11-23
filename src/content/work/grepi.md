---
title: grEPI, Global Repository of Epidemiological Parameters
summary: Core development team member for WHO Hub's open repository of epidemiological parameters, with fixes to the {epiparameter} R package.
role: Core development team, grEPI (WHO Hub)
date: 2026-04-01
tags: [R, Open Data, Epidemiology, APIs]
url: https://collaboratory.who.int/epidemiologicalparameters/repository/
linkLabel: Browse the repository
featured: false
draft: false
---

[grEPI](https://collaboratory.who.int/epidemiologicalparameters/repository/) is a repository of epidemiological parameters such as incubation periods and serial intervals, run by the WHO Hub. Before joining the core team, I switched the WHO mpox dashboard's parameter section to grEPI, corrected discrepancies in its mpox records, and in June 2025 presented the lessons learned to the technical working group. I joined the core team as a subject matter expert in December 2025, and a proof of concept launched in April 2026. The repository grew out of a mpox parameter literature search I co-built in 2022 with a colleague, which WHO published and a 2024 _Emerging Infectious Diseases_ meta-analysis used as a reference comparison.

On the team I advise on parameter data structure, API access, AI-assisted literature surveillance and parameter extraction, and use in R packages and AI pipelines, and I draft user guidance. I keep grEPI data usable in R: when repository updates break the [{epiparameter}](https://github.com/epiverse-trace/epiparameter) package, I raise the issue with the maintainers at the London School of Hygiene & Tropical Medicine and submit the [fix](https://github.com/epiverse-trace/epiparameter/pulls?q=is:pr+author:smkerr) as a pull request. I also reviewed comparable repositories to inform the governance model and proposed designs for community feedback, versioning, preprint-to-publication tracking, API naming and unique identifiers.
