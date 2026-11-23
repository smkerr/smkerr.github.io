---
title: Mpox Outbreak Analytics for WHO (2024-26)
summary: Dashboards, weekly Bayesian nowcasts and briefings supporting WHO's response to the mpox outbreak in the DRC and neighboring countries.
role: Data Scientist and team co-lead, CPC Analytics (for WHO)
date: 2024-09-01
tags: [R, Shiny, Bayesian Modeling, Global Health]
url: https://worldhealthorg.shinyapps.io/mpx_global/
linkLabel: Open the dashboard
featured: true
draft: false
---

Since September 2024 I have supported WHO's response to the current mpox outbreak. I maintain and extend the [Global Trends dashboard](https://worldhealthorg.shinyapps.io/mpx_global/) in R Shiny, with data pipelines from WHO regional offices. I moved it from R Markdown to Quarto, added clade-specific views, laboratory testing and positivity data for the Democratic Republic of the Congo (DRC), and a clade I importations dataset, and later migrated the app to Posit Connect Cloud. I also worked with the WHO DRC Country Office, WHO AFRO and Africa CDC to align case counting methods, so published figures give a consistent picture. I wrote the SOP for data ingestion, validation and visualization.

Each week I ran Bayesian nowcasts and projections of the reproduction number, growth rate and cases for the DRC at national, province and health-zone level, and for other affected countries. I prepared analyses for five Emergency Committee meetings and for WHO leadership, and automated the figures in WHO's External Situation Reports. I also revised the statistical analysis for a [preprint on the multifaceted mpox outbreaks in the DRC](https://doi.org/10.21203/rs.3.rs-8195766/v1), on which I am a co-author, estimating time-varying reproduction numbers across three surveillance sources and adding sensitivity analyses on generation time and incubation period.

I also built the DRC Mpox Resource Prioritization dashboard, in English and French, to guide the vaccination response. WHO staff, the DRC Public Health Emergency Operations Centre and field epidemiologists use it. For vaccine allocation I added hotspot mapping in Kinshasa, early vaccine impact assessments and vaccine demand forecasts for WHO, Africa CDC, Gavi and UNICEF, with inputs to Imperial College London's vaccine demand model.
