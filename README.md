# Project of Data Visualization (COM-480)

| Student's name   | SCIPER |
| ---------------- | ------ |
| Lluka Stojollari | 360456 |
| Renqing Cuomao   | 377052 |
| Yunlong Dong     | 368659 |

[Milestone 1]([https://github.com/LukaSt99/COM-480-Data/tree/main) • [Milestone 2](https://lukast99.github.io/mileston2.github.io/) • [Milestone 3](https://lukast99.github.io/COM-480/)

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

### [Website Milestone 2](https://lukast99.github.io/mileston2.github.io/)

### Visualization

Here are several sketches of the main visualizations:

1. **Basic Overview of Dataset**

![image](https://github.com/com-480-data-visualization/com-480-RYL/assets/145647615/610d4da5-df1e-466d-9933-23bb6eca0721)

There are 3 visualization cards displaying an overview of the dataset, each card represents some basic visualizations of descriptive analysis for postings, companies, and jobs. For example:
- Posting: A pie chart showing the distribution of LinkedIn job postings by expected experience level. Users can interact with this pie chart by hovering over the segments to get more details such as the exact number or percentage of job postings in each category.
- Company: A bubble chart representing the top 10 companies by size across industries. Moving the cursor over a bubble enables users to see a tooltip with more detailed information, such as exact company size, country, and number of employees.
- Job: A pie chart showing the distribution of job benefit types. When users click each segment, the job postings offering that benefit would appear, giving them a quick and clear understanding of the benefits landscape.

2. **Searchable Job Posting Table**

![image](https://github.com/com-480-data-visualization/com-480-RYL/assets/145647615/f2142b24-8bd6-44b9-ba95-ba8850cec30c)

A Searchable Job Posting Table allowing users to access the table with job postings that match the filters applied. Columns include the job title, company name, location, salary range, and a brief description. Users can click on a job title to get more details, sort the table by any of the column headings, and use a search bar to refine the results within the filtered subset further.

3. **Interactive Job Postings Map**

![image](https://github.com/com-480-data-visualization/com-480-RYL/assets/145647615/6ba457b0-8b92-4f46-ada6-4c435885b1ea)

An interactive map that users can zoom in on a particular region on the map to explore more information on jobs or companies in this area. Users can choose different aspects they are interested in on the left panel to refine the data displayed on the map. For example, the 'Quantity' field will show the geographical distribution of the number of companies in the map, while clicking ‘Industry’ would update the map to show the location distribution of various industries.
Several interactions are as follows:

- **Zooming in** a certain area for more details on additional information about job postings.
- **Hovering over** a hexagon can display a tooltip with more detailed information, such as the exact number of job postings, the most popular industries, or the average salary range for that location.
- **Clicking on** a hexagon will drill down to a more detailed view of job postings in that area or open a sidebar with a list of available jobs, companies posting jobs, and other statistics.

4. **Trends in Job Postings over Time**

![image](https://github.com/com-480-data-visualization/com-480-RYL/assets/145647615/f9aa242b-21b4-4f32-aae4-36625739653f)

A line chart showcasing the trend in job postings over time, such as the fluctuations in demand for various skills or industries, the rise in remote job opportunities… Users can choose one certain panel to check its changing trend. When hovering over a line, this line would be highlighted and some related information will be shown beside.

5. **How Different Skills Relate to Various Industries and Specialties**

![image](https://github.com/com-480-data-visualization/com-480-RYL/assets/145647615/462d6c42-419f-4ec4-84fb-53fb9351cab5)

A Sankey diagram to illustrate how different skills relate to various industries and specialties. The width of the bands connecting these categories represents the volume from one category to another. For example, a wide band flowing from skill "Analyst" to industry "Information Technology \& Services" and then converging on specialty "Consulting" suggests that a significant number of people with analyst skill are employed in this industry as consulting. Users could hover over the flows to see additional information, such as the percentage of each of different skills required for a particular industry, what skills are required of employees in a particular position and their corresponding proportions. There also could be interactive filters that allow users to refine the diagram by skill level, industry sector, or specialty.


### Tools

- d3.js: A JavaScript library for creating dynamic, interactive charts and data visualizations.
- Figma: A popular design tool widely used for interface design, prototyping, and collaboration.
- Boostrap: A front-end framework for rapid, responsive development of web pages
- leaflet: A JavaScript library for creating interactive maps.
- jQuery: A JavaScript library to improve development efficiency and code maintainability.
- Python: Data processing for further data visualization.

### Lectures

- We will build the foundation of our project using the basic web development skills covered in **weeks 1-3**, including HTML, CSS, and JavaScript.

- For data visualization, we will make extensive use of the D3.js library introduced in the lectures of **weeks 4-5**. Our project will benefit from D3.js for its ability to create interactive and dynamic visualizations that allow users to explore job market trends and details within our dataset.

- The practical mapping techniques learned in **week 7** will be used to present an interactive map, showing the distribution of job postings across different regions. This will enhance our user interface by providing a spatial analysis of job opportunities.

- The lectures on tabular data in **week 12** will be invaluable in manipulating and managing tabular data formats, ensuring that our back-end data handling is as seamless as the front-end experience.


### Extra ideas

The proposed enhancements to the visualization part of the project may include more creative or challenging approaches:

1. Real-time Data Visualization: Incorporate updates to the visualization as new job postings are added to LinkedIn, allowing users to see trends and changes in real-time. This will help in tracking the dynamics of job markets across different industries and locations as they evolve.

2. Skill gap analysis visualization: Create a visualization that compares the skills required in job postings with the skills listed in the LinkedIn profiles of users who applied for those jobs. This can help identify skill gaps in different industries or specific job roles. The visualization can use heat maps or gap charts to show where demand exceeds supply and vice versa, providing insights for both job seekers looking to upgrade their skills and educational institutions designing curriculum.

3. Predictive trend forecasting: Integrate machine learning models to predict future trends in the job market based on historical data from 2023 job postings. The visualization can show predicted hotspots for job growth, industries expected to expand, and skills likely to be in higher demand. By presenting this data in an interactive area chart, users can more effectively plan their career paths or business strategies.

## Milestone 3 (31st May, 5pm)
### [Website Milestone 3](https://lukast99.github.io/COM-480/)
### [Process Book Milestone 3](https://github.com/com-480-data-visualization/com-480-RYL/blob/master/Process%20book.pdf)

## Authors
- **Lluka Stojollari - Main Website - Data Preproceesing - Process Book - ScreenCast **
- **Yunlong Dong  - Main Website - Data Preproceesing - Process Book - ScreenCast **
- **Renqing Cuomao - Job Search Platform **
- 
**80% of the final grade**




## Late policy

- < 24h: 80% of the grade for the milestone
- < 48h: 70% of the grade for the milestone

