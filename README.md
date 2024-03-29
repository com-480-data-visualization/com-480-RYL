# Project of Data Visualization (COM-480)

| Student's name   | SCIPER |
| ---------------- | ------ |
| Lluka Stojollari | 360456 |
| Renqing Cuomao   | 377052 |
| Yunlong Dong     | 368659 |

[Milestone 1](#milestone-1) • [Milestone 2](#milestone-2) • [Milestone 3](#milestone-3)

## Milestone 1 (29th March, 5pm)

**10% of the final grade**

This is a preliminary milestone to let you set up goals for your final project and assess the feasibility of your ideas.
Please, fill the following sections about your project.

*(max. 2000 characters per section)*

### Dataset
> Data can be found [here](https://github.com/LukaSt99/COM-480-Data/tree/main) 

> Find a dataset (or multiple) that you will explore. Assess the quality of the data it contains and how much preprocessing / data-cleaning it will require before tackling visualization. We recommend using a standard dataset as this course is not about scraping nor data processing.
>
> Hint: some good pointers for finding quality publicly available datasets ([Google dataset search](https://datasetsearch.research.google.com/), [Kaggle](https://www.kaggle.com/datasets), [OpenSwissData](https://opendata.swiss/en/), [SNAP](https://snap.stanford.edu/data/) and [FiveThirtyEight](https://data.fivethirtyeight.com/)), you could use also the DataSets proposed by the ENAC (see the Announcements section on Zulip).

The dataset we will work on is the “LinkedIn Job Postings - 2023” from Kaggle, reflecting a snapshot into the current job market. 
https://www.kaggle.com/datasets/arshkon/linkedin-job-postings/data

This dataset contains a nearly comprehensive record of 33571 job postings. Each individual posting contains 27 valuable attributes, including the title, job description, salary, location, and work-types etc. In addition, there are separate files on job infomation containing the benefits, skills, and industries, as well as on company related details such as the company description, industries, and specialities.


### Problematic

> Frame the general topic of your visualization and the main axis that you want to develop.
> - What am I trying to show with my visualization?
> - Think of an overview for the project, your motivation, and the target audience.

#### Overview

The project aims to provide comprehensive insights into the job market landscape based on LinkedIn job postings data from 2023. The motivation behind the project is to explore patterns in the current job seeking and employment-focused factors, empower individuals with data-driven insights to make informed decisions regarding job searches, career paths, and recruitment strategies. By analyzing various attributes such as job titles, industries, locations, salaries, skills, and company profiles, the visualization will offer valuable information for job seekers, employers, and researchers exploring employment patterns and trends. 

#### Main visualisation aspects
- **Trends in Job Market**: Analyzing the distribution of job postings across different industries, locations, and job types to identify trends and patterns in the job market for the year 2023.

- **Salary Insights**: Exploring the salary distribution across different job titles, industries, and locations to provide insights into earning potentials.

- **Skill Demands**: Identifying the most in-demand skills by analyzing the skill requirements mentioned in job postings.

- **Company Profiles**: Providing a visual overview of companies including their size, locations, and industries they operate in. Visualise the location distribution of companies in different industries and salary levels, helping candidates to orientate their job search.

- **Job Description Analysis**: Analyzing job descriptions to extract and visualize key phrases, requirements, and responsibilities associated with different roles.


### Exploratory Data Analysis

> Pre-processing of the data set you chose
> - Show some basic statistics and get insights about the data

In the initial phase of data exploration and preprocessing, the dataset from job postings undergoes several crucial steps to ensure its quality and suitability for analysis.

#### Data Preprocessing:

The preprocessing phase encompasses a series of essential steps:

1. **Basic Preprocessing:**
   - Initial cleaning and formatting of the dataset are performed. This includes handling missing values, removing duplicates, and standardizing data types to ensure data integrity and consistency.

2. **Merging Data:**
   - Datasets from various sources are merged to consolidate related information. This enrichment process combines job postings with salary data, company details, or skill requirements to create a comprehensive dataset for analysis.

3. **Handling Missing Values in Salary Data:**
   - To address missing values in salary data, a multi-step approach is adopted. The dataset is grouped by job title and work type to calculate median salaries for similar positions. These medians serve as reliable estimates for missing values, ensuring accuracy in the imputation process. Additionally, skew-normal distributions are fitted to observed salary data, and random values are generated from these distributions to fill missing entries, providing a comprehensive approach to handling missing values.

#### Visualizations:

The exploration of the dataset is facilitated through visualizations, offering insights into various aspects of the job market and company landscape:

1. **Salary Statistics:**
   - A point plot visualizes median, maximum, and minimum salaries across different metrics, providing a comprehensive overview of salary statistics within the dataset.

![salaries](https://github.com/com-480-data-visualization/com-480-RYL/assets/63165737/4bec209d-2f8d-4a4a-8c87-c749f2ac0202)

2. **Mapping Most Frequent Job Postings:**
   - A scatter plot overlaid on a map showcases the top 150 locations with the highest frequency of job postings in North and South America, with red bubbles representing locations and size indicating the frequency of job postings.
   
![map](https://github.com/com-480-data-visualization/com-480-RYL/assets/63165737/76ac77e5-8b55-45e9-a4af-1486a0b9ca58)

3. **Top Posting Domains:**
   - A bar plot illustrates the top 10 posting domains with the highest number of job postings, providing insights into the most active domains in the job market.
   
![domains](https://github.com/com-480-data-visualization/com-480-RYL/assets/63165737/87d34b0a-7f28-4fa4-8af7-159ed9959812)

4. **Distribution of Job Postings by Experience Level:**
   - Presented through a pie chart, this visualization highlights the distribution of job postings by experience level, offering a quick understanding of the demand for various levels of expertise.

![experience_level](https://github.com/com-480-data-visualization/com-480-RYL/assets/63165737/613b905c-0f92-4b0c-bbe7-bf18d3fea0df)

5. **Company Overview:**
   - A scatter plot illustrates job postings by company size and city location, focusing on specific company sizes and cities. Each point represents a combination of company size and city, with point size indicating the number of job postings.

![frequency](https://github.com/com-480-data-visualization/com-480-RYL/assets/63165737/e8e2c409-2283-4c33-b2a2-5c1735de07e2)

7. **Performing Salary Analysis by Skill:**
   - A bar plot visualizes the total salary attributed to each skill, offering insights into the contribution of different skills to overall salary distribution.
![total_salary](https://github.com/com-480-data-visualization/com-480-RYL/assets/63165737/14c48f13-976e-4cfb-8aef-165e180a8928)

By combining thorough data preprocessing with insightful visualizations, this exploratory analysis lays the groundwork for deeper insights into the job market landscape and salary trends.

### Related work


> - What others have already done with the data?
> - Why is your approach original?
> - What source of inspiration do you take? Visualizations that you found on other websites or magazines (might be unrelated to your data).
> - In case you are using a dataset that you have already explored in another context (ML or ADA course, semester project...), you are required to share the report of that work to outline the differences with the submission for this class.

## Milestone 2 (26th April, 5pm)

**10% of the final grade**


## Milestone 3 (31st May, 5pm)

**80% of the final grade**


## Late policy

- < 24h: 80% of the grade for the milestone
- < 48h: 70% of the grade for the milestone

