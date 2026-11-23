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

In 2025 I started the WHO Collaboratory's automated literature surveillance work. I reviewed existing tools and methods, co-led the kick-off and concept note with the EIOS, JRC and ADAPPT teams, and built an R prototype that queries several bibliographic databases. It recovered up to 80% of the mpox literature that the Public Health Agency of Canada (PHAC) had curated by hand.

Building on that, I designed a Python pipeline that uses LLMs (via the Anthropic Citations API) to extract structured evidence from journal articles and grey literature. It ties every claim to a verbatim source quote and runs a red-team verification step before human review. I led the evidence synthesis for the 2026 Bundibugyo ebolavirus outbreak in the DRC with PHAC and the WHO Library, covering outbreak size, the risk of geographic spread, imported cases and long-term sequelae.

I also co-built an automated monitoring pipeline that pulls from EIOS and bibliographic APIs (PubMed, OpenAlex, Crossref, Europe PMC, medRxiv and bioRxiv), then deduplicates, enriches and publishes reviewed pages to the [resources site](https://who-collaboratory.github.io/ebola-resources/) of the WHO Collaboratory's Ebola Outbreak Analytics community of practice. It feeds a [living list](https://docs.google.com/spreadsheets/d/1ryymcAzIfZnQL3H79H2bJBdnIzRTHIFUnyt-6zkC4_U/edit) of Bundibugyo virus publications from eight databases, refreshed twice daily and open to community submissions. I contributed the outbreak-size evidence section and built a chart pipeline that syncs ensemble projections from the BDBV Modeling Hub.
