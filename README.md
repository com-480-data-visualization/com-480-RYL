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

Over the course of two separate days, months apart, this dataset captures over 33,000 job postings. Each posting is enriched with 27 essential attributes, covering details such as the job title, description, salary range, location, and work types (including remote and contract opportunities). Additionally, accompanying files provide insights into benefits, required skills, and associated industries for each job. 

Moreover, it establishes connections between job postings and specific companies, enabling exploration into various attributes such as company descriptions, headquarters locations, and follower counts on LinkedIn. Additionally, the dataset captures temporal dimensions, including the listing times of jobs and recording times of employee and follower counts, offering avenues for analyzing temporal trends within the job market and corporate landscape.

For the data preprocessing, 
- There are missing values in various attributes such as salary, benefits, or job descriptions, which need to be addressed to ensure data integrity. 
- Dealing with outliers in the data is required to prevent skewing of analysis and visualization results, or perform specific analyses on outliers.
- Data merging is needed for a more complete view of the data and convenient processing of the data.

### Problematic

> Frame the general topic of your visualization and the main axis that you want to develop.
> - What am I trying to show with my visualization?
> - Think of an overview for the project, your motivation, and the target audience.

#### Overview:
This project aim to develops a website using the LinkedIn Job Postings - 2023 dataset and to provide comprehensive insights into the job market landscape based on LinkedIn job postings data from 2023.  The platform aims to offer users intuitive visualizations to navigate the job market landscape effectively.

#### Motivation:
The motivation behind the project is to explore patterns in the current job seeking and employment-focused factors, empower individuals with data-driven insights to make informed decisions regarding job searches, career paths, and recruitment strategies. By analyzing various attributes such as job titles, industries, locations, salaries, skills, and company profiles, the visualization will offer valuable information for job seekers, employers, and researchers exploring employment patterns and trends.

For instance, users will be able to interact with dynamic charts that showcase trends in job postings over time, such as the rise in remote job opportunities or the fluctuations in demand for specific skills. They can hover over data points to see detailed information and filter the visualization based on criteria like job title, location, or industry.

Additionally, our website will feature interactive maps that allow users to explore job postings geographically. Users can zoom in on a particular region to see a heatmap of job availability or click on map markers to view detailed information about job postings in that area.

Furthermore, we will implement a search function that enables users to efficiently find relevant information. For example, users can search for job postings based on specific criteria such as job title, company name, required skills, or salary range. The search results will be dynamically updated as users type, providing instant feedback and facilitating a smoother browsing experience.

#### Target Audience:
The target audience for this project includes:
- Job seekers looking for career opportunities and insights into the job market landscape. (potential for real-time data).
- Recruiters and hiring managers seeking talent and industry trends for strategic recruitment. (potential for real-time data).
- Researchers and analysts interested in studying employment patterns, salary trends, and skill demands.

#### Main visualisation aspects

1. **Trend Analysis Dashboard:**
   - **Objective:** Provide an interactive dashboard illustrating trends in job postings across industries, locations, and job types.
   - **Features:**
     - Dynamic visualizations to identify emerging patterns and market trends.
     - Filters for refining data based on industry, location, and job type.

2. **Salary Insights Tool:**
   - **Objective:** Offer a user-friendly tool for visualizing salary distributions across diverse job titles, industries, and geographical regions.
   - **Features:**
     - Interactive charts and graphs for comparing earning potentials.
     - Filters to customize salary data by job title, industry, and location.

3. **Skill Demand Visualization Module:**
   - **Objective:** Visualize the most in-demand skills extracted from job postings to aid in skill development and career planning.
   - **Features:**
     - Visualizations showcasing skill requirements across different roles and industries.
     - Skill mapping to highlight relevant skills for specific job roles.

4. **Company Profiles Section:**
   - **Objective:** Provide visually engaging profiles of companies, including size, geographical presence, and industry sectors.
   - **Features:**
     - Company profiles with key attributes such as size, location, and industry sector.
     - Interactive maps displaying the geographical distribution of companies.

5. **Job Description Visualization Feature:**
   - **Objective:** Visualize job descriptions to highlight key phrases, requirements, and responsibilities associated with different roles.
   - **Features:**
     - Visual representations of job descriptions for enhanced understanding.
     - Keyword extraction tools to identify important phrases and requirements.

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

6. **Performing Salary Analysis by Skill:**
   - A bar plot visualizes the total salary attributed to each skill, offering insights into the contribution of different skills to overall salary distribution.
![total_salary](https://github.com/com-480-data-visualization/com-480-RYL/assets/63165737/14c48f13-976e-4cfb-8aef-165e180a8928)

By combining thorough data preprocessing with insightful visualizations, this exploratory analysis lays the groundwork for deeper insights into the job market landscape and salary trends.

### Related work


> - What others have already done with the data?
> - Why is your approach original?
> - What source of inspiration do you take? Visualizations that you found on other websites or magazines (might be unrelated to your data).
> - In case you are using a dataset that you have already explored in another context (ML or ADA course, semester project...), you are required to share the report of that work to outline the differences with the submission for this class.

#### What others have already done with the data?
There is currently some analysis and visualisation based on this dataset in [Kaggle](https://www.kaggle.com/datasets/arshkon/linkedin-job-postings/code), however, the results are rather basic and only provide static visualizations, mainly for the descriptive analysis of the job and company information, such as the distribution of company size and salary, the top 10 most frequent job titles, and the top 10 skills in-demand.

#### Why is your approach original?
Our project stands out for its emphasis on interactive visualizations of job and company-related data. By prioritizing interactivity, we aim to provide users with a more engaging and enriching experience, allowing them to dynamically interact with and explore the data.  We will also provide a search function based on the attributes of interest to provide viewers with a more efficient display of the information.

#### Source of Inspiration

Our inspiration also stems from our personal experiences as master's students actively seeking internships and jobs. We understand the importance of staying informed and making data-driven decisions in the competitive job market landscape. Accessing a website with interactive features would greatly facilitate our job search process. Platforms like Tableau Public and Information is Beautiful serve as prime examples of how interactive data visualizations can empower users to explore data effectively and make informed decisions, further motivating our approach to incorporate similar functionalities in our project.

## Milestone 2 (26th April, 5pm)

**10% of the final grade**

Link to the website

Sketches of initial visualization

Here are several sketches to explain the main visualizations for the project:

1. **Visualization 1: Searchable Job Posting Table**

   The first and core visualization of the project is Searchable Job Posting Table, allowing users to access the table with job postings that match the filters applied. Columns include the job title, company name, location, salary range, and a brief description. Users can click on a job title to get more details, sort the table by any of the column headings, and use a search bar to refine the results within the filtered subset further.

   ![image](https://github.com/com-480-data-visualization/com-480-RYL/assets/145647615/7a99b94c-c6c3-461d-9863-bc82c3cad3f1)

2. **Visulization 2: Basic overview of datasets**

Each card in second Figure represents the visualizations for each dataset:

*Posting Card:*
This card contains a pie chart, which is a common way to represent parts of a whole. Different pie chart segments represent different expected experience levels in LinkedIn job postings. Users can interact with this pie chart by hovering over the segments to get more details such as the exact number or percentage of job postings in each category.

*Company Card:*
Each bubble in the bubble chart represents one of the top 10 companies, placed on a grid that aligns company names on the y-axis and their respective industries on the x-axis. The size of each bubble appears to correspond to the company's size. Moving the cursor over a bubble enabe users to see a tooltip with more detailed information, such as exact company size, country, and number of employees.

*Job Card:*
The pie chart would show segments representing the distribution of benefit types, with the size of each segment corresponding to how frequently each benefit is offered in the dataset. When users clicking each segment, the job postings offering that benefit would appear, giving them a quick and clear understanding of the benefits landscape.

![image](https://github.com/com-480-data-visualization/com-480-RYL/assets/145647615/1e1d427f-40cf-47b6-925a-f19bb7c52a23)

3. **Visulization 3: Job Postings Map**

The third goal of the project is to allow users can zoom in a particular region on the map to explore job postings in that area. The following interactions can be imagine:

- **Zoom in**

Users can zoom in on the map to see more details. This can reveal more cities, smaller areas, or additional information about job postings.

- **Hover**

Hovering over a hexagon can display a tooltip with more detailed information, such as the exact number of job postings, the most popular industries, or the average salary range for that location.

- **Click**

Clicking on a hexagon will drill down to a more detailed view of job postings in that area or open a sidebar with a list of available jobs, companies posting jobs, and other statistics.

- **Filter**

Users can use the filters in the left panel to refine the data displayed on the map. For example, selecting a specific industry would update the map to show only job postings related to that industry.

![image](https://github.com/com-480-data-visualization/com-480-RYL/assets/145647615/6ba457b0-8b92-4f46-ada6-4c435885b1ea)

4. **Visualization 4: Trends in job postings over time**

The third visualizaiton focuses on the change in the number of job postings over a period, and each line represents a different skill, industry, or benefit category, showing how demand for these has fluctuated with time. If user clicks on a line, it filters the chart to only show the trend for that skill, industry, or benefit, allowing for a focused view.

![image](https://github.com/com-480-data-visualization/com-480-RYL/assets/145647615/48236bb1-84ae-4564-9b5e-a6de25899701)

5. **Visualization 5: How different skills relate to various industries and specialties**

The last visualization illustrates how different skills relate to various industries and specialties. As the figure shows, the width of the bands connecting these categories represents the volume from one category to another. For example, a wide band flowing from "Master's" to "Government-State" and then converging on "Nurse" suggests that a significant number of individuals with a Master's degree are employed in the Government-State sector as Nurses. Users could hover over the flows to see additional information, such as the percentage of each of the skills required for a particular industry, what kind of skills come from individuals in a certain position, and in what proportion. There also could be interactive filters that allow users to refine the diagram by skill level, industry sector, or specialty.

![image](https://github.com/com-480-data-visualization/com-480-RYL/assets/145647615/462d6c42-419f-4ec4-84fb-53fb9351cab5)


**Tools:**

d3.js: A JavaScript library for creating dynamic, interactive charts and data visualizations.
Figma: 
Boostrap: A front-end framework for rapid, responsive development of web pages
leaflet: A JavaScript library for creating interactive maps.
jQuery: A JavaScript library to improve development efficiency and code maintainability.
Python: Data processing for further data visualization.

**Lectures:**

**Extra ideas:**


## Milestone 3 (31st May, 5pm)

**80% of the final grade**





## Late policy

- < 24h: 80% of the grade for the milestone
- < 48h: 70% of the grade for the milestone

