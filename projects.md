---
layout: page
title: Projects
tagline: What I've worked on
permalink: /projects.html
ref: projects
order: 2
---

<a id="uk-covid-dashboard">
# UK COVID dashboard disaggregated by age group
</a>
### [Go to GitHub](https://github.com/intro-to-data-science-21/data-project-covid_dashboard_uk)
Together with fellow master's students [Kai Foerster](https://github.com/kaifoerster) and [Dominik Cramer](https://github.com/DominikCramer), I created a dashboard to track COVID case rates in England with the option to disaggregate by age group. We pulled data from [the official UK government website for data and insights on COVID's API](https://coronavirus.data.gov.uk). To build our map, we downloaded data for the boundaries of all 309 local authority districts from [the Office of National Statistics' web portal](https://geoportal.statistics.gov.uk/datasets/local-authority-districts-december-2019-boundaries-uk-bfc-1/explore). As seen below, the user can observe COVID case rates for selected age groups during different time periods.

![UK COVID Dashboard](assets/img/uk-covid-dashboard.png "UK COVID Dashboard")

<a id="validating-covid-self-tests">
# Validating COVID self tests using image recognition
</a>
### [Go to GitHub](https://github.com/smkerr/DSA--Final-Project)
With the understanding that COVID rapid tests will continue to play a key role in the post-pandemic world, I worked alongside [Kai Foerster](https://github.com/kaifoerster) and [Dominik Cramer](https://github.com/DominikCramer) to develop a program capable of validating COVID self tests using image recognition. We used data from the [MNIST database of handwritten digits](http://yann.lecun.com/exdb/mnist/), a collection of more than 60,000 examples, to train our Machine Learning algorithm to recognize handwritten serial numbers and COVID test results.

![Validating COVID Test Results](assets/img/validating-covid-test-results.png "Validating COVID Test Results")

[Go to the Home Page]({{ '/' | absolute_url }})
