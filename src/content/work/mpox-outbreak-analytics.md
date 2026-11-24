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

Since September 2024 I have supported WHO's response to the current mpox outbreak. I maintained and developed the [Global Trends dashboard](https://worldhealthorg.shinyapps.io/mpx_global/) in R Shiny, with pipelines in WHO's xMart data platform that automate the upload and validation of data from WHO regional offices. I added views for the current outbreak, including clade-specific trends, laboratory testing and positivity data for the Democratic Republic of the Congo (DRC), and clade I importations. I also worked with the WHO DRC Country Office, the WHO Regional Office for Africa (AFRO) and the Africa Centres for Disease Control and Prevention (Africa CDC) to align case counting methods and resolve discrepancies, so that published figures gave a consistent and transparent picture of the outbreak.

Each week I ran Bayesian nowcasts and projections of the reproduction number (Rt), growth rate and cases for the DRC at national, province and health-zone level, with clade-specific estimates on request, as well as for Burundi, Sierra Leone and other affected countries. I prepared analyses and slides for WHO decision-makers, including five Emergency Committee meetings, deep dives for the WHO Health Emergencies Programme (WHE), weekly updates for the Incident Management Support Team and briefings for WHE leadership. I also automated the figures in WHO's regular External Situation Reports and checked each draft against the data before publication. I am a co-author of a [preprint on the multifaceted mpox outbreaks in the DRC](https://doi.org/10.21203/rs.3.rs-8195766/v1).

I also built and maintained the DRC Mpox Resource Prioritization dashboard to guide the vaccination response, with weekly data for health zones and the health areas within them, in English and French. WHO staff supporting the vaccination response, the DRC Public Health Emergency Operations Centre and field epidemiologists use it. To support vaccine allocation, I produced GPS-based hotspot mapping in Kinshasa, early assessments of vaccine impact and case projections for AFRO, and provided vaccine demand forecasts to the International Coordinating Group (ICG) on Vaccine Provision, with inputs to Imperial College London's vaccine demand model.
