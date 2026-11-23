---
title: Air (In)equality in Los Angeles
summary: A geospatial analysis of whether neighborhoods with different demographics and incomes breathe different air, using satellite NO2 data.
role: Geospatial Analysis course project
date: 2024-05-01
tags: [Geospatial Analysis, R, Spatial Econometrics, Environment]
repo: https://github.com/smkerr/air-inequality
featured: false
draft: false
---

This project tested whether neighborhoods with different demographics and incomes breathe different air. I combined Sentinel-5P satellite NO2 data with American Community Survey data for 2,334 census tracts in Los Angeles County, using R (sf, terra) and Python for the Copernicus API.

I fitted spatially lagged X and spatial error models. Later sensitivity checks on the spatial weights showed that NO2 is organized mostly by location, and that demographic links fade once spatial structure is modeled properly.
