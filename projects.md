---
layout: page
title: Projects
tagline: What I've worked on
permalink: /projects.html
ref: projects
order: 2
---


# <a id="uk-covid-dashboard">UK COVID Dashboard for Different Age Groups</a>
Together with fellow master's students [Kai Foerster](https://github.com/kaifoerster) and [Dominik Cramer](https://github.com/DominikCramer), I created a dashboard to track COVID case rates in England with the option to disaggregate by age group. We extracted our data using the API for [the official UK government website for data and insights on COVID](https://coronavirus.data.gov.uk). To build our map, we downloaded boundary data for all 309 local authority districts from [the Office of National Statistics' web portal](https://geoportal.statistics.gov.uk/datasets/local-authority-districts-december-2019-boundaries-uk-bfc-1/explore). As seen below, the user can observe COVID case rates for selected age groups during different time periods.

[Go to GitHub](https://github.com/intro-to-data-science-21/data-project-covid_dashboard_uk) :octocat:

![UK COVID Dashboard](assets/img/uk-covid-dashboard.png "UK COVID Dashboard")

# <a id="validating-covid-self-tests">Validating COVID Self Tests with Image Recognition</a>
With the understanding that COVID rapid tests will continue to play a key role in the post-pandemic world, I once again found myself working alongside [Kai Foerster](https://github.com/kaifoerster) and [Dominik Cramer](https://github.com/DominikCramer) to develop a program capable of validating COVID self tests using image recognition. We used data from the [MNIST database of handwritten digits](http://yann.lecun.com/exdb/mnist/), a collection of more than 60,000 examples, to train our Machine Learning algorithm to recognize handwritten serial numbers and COVID test results.

[Go to GitHub](https://github.com/smkerr/DSA--Final-Project) :octocat:

![Validating COVID Test Results](assets/img/validating-covid-test-results.png "Validating COVID Test Results"){: .center-image }

[Go to the Home Page]({{ '/' | absolute_url }})
