---
title: LLM Pipeline for Outbreak Evidence Synthesis
summary: A Python pipeline that extracts structured, quote-verified evidence from the literature, applied to the 2026 Bundibugyo ebolavirus outbreak.
role: Designer and developer, CPC Analytics (for WHO Hub)
date: 2026-06-01
tags: [LLMs, Python, Evidence Synthesis, Global Health]
url: https://who-collaboratory.github.io/ebola-resources/evidence-synthesis/
linkLabel: Read the synthesis
repo: https://github.com/WHO-Collaboratory/ebola-resources
featured: true
draft: false
---

In 2025 I assessed options for automating literature surveillance at the WHO Collaboratory, reviewed existing tools and methods, and co-led the kick-off and concept note with the Epidemic Intelligence from Open Sources (EIOS) and Joint Research Centre (JRC) teams. I built an R prototype that queries several bibliographic databases and recovered up to 80% of the mpox literature that the Public Health Agency of Canada (PHAC) had curated by hand.

Building on that work, I designed and built an automated pipeline that draws on EIOS to maintain a [living list](https://docs.google.com/spreadsheets/d/1ryymcAzIfZnQL3H79H2bJBdnIzRTHIFUnyt-6zkC4_U/edit) of Bundibugyo virus publications, refreshed several times a day and open to user submissions. I also designed and built a Python pipeline that uses LLMs to extract structured evidence from journal articles and grey literature, ties every claim to a verbatim source quote, and runs a verification step before human review.

I applied the pipeline to speed up evidence synthesis for the 2026 Bundibugyo ebolavirus outbreak, covering outbreak size and the risk of geographic spread. The results are published on the [resources site](https://who-collaboratory.github.io/ebola-resources/) of the WHO Collaboratory's Ebola Outbreak Analytics community of practice.
