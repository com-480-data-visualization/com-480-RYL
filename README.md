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

For the data preprocessing, 
- There are missing values in various attributes such as salary, benefits, or job descriptions, which need to be addressed to ensure data integrity. 
- Dealing with outliers in the data is required to prevent skewing of analysis and visualization results, or perform specific analyses on outliers.
- Data merging is needed for a more complete view of the data and convenient processing of the data.

In addition to these general preprocessing steps, further analysis of the dataset's specific characteristics and quality will determine the exact processing procedures required.


### Problematic

> Frame the general topic of your visualization and the main axis that you want to develop.
> - What am I trying to show with my visualization?
> - Think of an overview for the project, your motivation, and the target audience.

### Exploratory Data Analysis

> Pre-processing of the data set you chose
> - Show some basic statistics and get insights about the data

Data Preprocessing

1. Loading Datasets: job_postings, benefits, job_industries, job_skills, companies, employee_counts, company_industries, company_specialities, industries.
2. Merging Datasets: The job-related datasets were merged based on job_id while company-related datasets were merged based on company_id, and finally we merged job postings and company data together and we have data about company that post jobs on linkedIn.
3. Handling Missing Data: For missing data in categorical columns, it filled with "Unknown", numerical columns with zeros, descriptive columns with "Not specified", and filled with "Open" if no closing time is specified for 'closed_time' column.

After pre-processing the data, we have 33246 unique job postings with 43 columns for describing the job position, including company name, pay period, formatted work type, location, remote allowed, job posting url, application url, application type and closed time, etc.

Here are some basic statics regarding the data which will be useful for next steps of final visualization.

<img width="698" alt="截屏2024-03-29 12 52 42" src="https://github.com/com-480-data-visualization/com-480-RYL/assets/145647615/7062ef8c-989d-430b-9a51-0d88d8523317">



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

