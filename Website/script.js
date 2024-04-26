

function loadOverview() {
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
        <div class="visualization">
            <h2>Overview</h2>
            <img src="1.png" alt="Overview Image">
        </div>`;
}

function loadSearch() {
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
        <div class="visualization">
            <img src="2.png" alt="Search Image">
        </div>`;
}

function loadTrends() {
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
        <div class="visualization">
            <img src="3.png" alt="Trends Image">
        </div>`;
}

function loadMaps() {
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
        <div class="visualization">
            <img src="4.png" alt="Maps Image">
        </div>`;
}

function loadSankey() {
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
        <div class="visualization">
            <img src="5.png" alt="Sankey Image">
        </div>`;
}

// Immediately load the overview image when the page is loaded
document.addEventListener('DOMContentLoaded', function() {
    loadOverview();
});

// Event listeners for navigation buttons
document.getElementById('overviewButton').addEventListener('click', loadOverview);
document.getElementById('searchButton').addEventListener('click', loadSearch);
document.getElementById('trendsButton').addEventListener('click', loadTrends);
document.getElementById('mapsButton').addEventListener('click', loadMaps);
document.getElementById('sankeyButton').addEventListener('click', loadSankey);



    /*
    // Event listeners for navigation buttons
    function loadOverview() {
            // Select the mainContent div
        const mainContent = document.getElementById('mainContent');

        // Check if it's the first time loading overview
        if (!overviewLoaded) {
            // Create a new image element   
            const overviewImage = document.createElement('img');

            // Set the source and other attributes of the image
            overviewImage.src = 'path/to/your/image.png'; // Set the path to your image
            overviewImage.alt = 'Overview Image'; // Set alt text for accessibility

            // Append the image to the mainContent div
            mainContent.innerHTML = ''; // Clear existing content
            mainContent.appendChild(overviewImage);

            // Set overviewLoaded to true after loading the content
            overviewLoaded = true;
        } else {
            // Display a message or handle subsequent clicks (optional)
            mainContent.innerHTML = '<p>Overview content already loaded.</p>';
        }
    }

    function renderPostingChart() {
        // Generate data for posting chart (example)
        const data = [
            { category: 'Entry Level', count: 30 },
            { category: 'Mid Level', count: 50 },
            { category: 'Senior Level', count: 20 }
        ];

        // Create a pie chart using D3.js
        const width = 300;
        const height = 300;
        const radius = Math.min(width, height) / 2;

        const svg = d3.select('#postingChart')
            .append('svg')
            .attr('width', width)
            .attr('height', height)
            .append('g')
            .attr('transform', `translate(${width / 2},${height / 2})`);

        const color = d3.scaleOrdinal()
            .domain(data.map(d => d.category))
            .range(d3.schemeCategory10);

        const pie = d3.pie().value(d => d.count);
        const data_ready = pie(data);

        svg.selectAll('path')
            .data(data_ready)
            .enter()
            .append('path')
            .attr('d', d3.arc().innerRadius(0).outerRadius(radius))
            .attr('fill', d => color(d.data.category))
            .attr('stroke', 'white')
            .style('stroke-width', '2px')
            .style('opacity', 0.7);
    }

    // Function to render company chart (bubble chart)
    function renderCompanyChart() {
        // Example data
        const data = [
            { industry: 'Tech', size: 100, avgCompanySize: 500 },
            { industry: 'Finance', size: 80, avgCompanySize: 300 },
            { industry: 'Healthcare', size: 120, avgCompanySize: 600 }
        ];

        const width = 400;
        const height = 300;

        const svg = d3.select('#companyChart')
            .append('svg')
            .attr('width', width)
            .attr('height', height);

        // Create scales
        const sizeScale = d3.scaleLinear()
            .domain([0, d3.max(data, d => d.size)])
            .range([10, 50]);

        const colorScale = d3.scaleOrdinal(d3.schemeCategory10);

        // Draw bubbles
        svg.selectAll('circle')
            .data(data)
            .enter()
            .append('circle')
            .attr('cx', (d, i) => (i * 120) + 60)
            .attr('cy', height / 2)
            .attr('r', d => sizeScale(d.size))
            .attr('fill', (d, i) => colorScale(i))
            .attr('opacity', 0.7);

        // Add tooltips
        svg.selectAll('circle')
            .append('title')
            .text(d => `Industry: ${d.industry}\nJob Postings: ${d.size}\nAvg. Company Size: ${d.avgCompanySize}`);
    }

    // Function to render job chart (benefit types pie chart)
    function renderJobChart() {
        const data = [
            { benefit: 'Health Insurance', frequency: 30 },
            { benefit: '401(k) Matching', frequency: 20 },
            { benefit: 'Paid Time Off', frequency: 40 },
            { benefit: 'Flexible Schedule', frequency: 25 }
        ];

        const width = 300;
        const height = 300;
        const radius = Math.min(width, height) / 2;

        const color = d3.scaleOrdinal()
            .domain(data.map(d => d.benefit))
            .range(d3.schemeCategory10);

        const svg = d3.select('#jobChart')
            .append('svg')
            .attr('width', width)
            .attr('height', height)
            .append('g')
            .attr('transform', `translate(${width / 2},${height / 2})`);

        const pie = d3.pie().value(d => d.frequency);
        const data_ready = pie(data);

        svg.selectAll('path')
            .data(data_ready)
            .enter()
            .append('path')
            .attr('d', d3.arc().innerRadius(0).outerRadius(radius))
            .attr('fill', d => color(d.data.benefit))
            .attr('stroke', 'white')
            .style('stroke-width', '2px')
            .style('opacity', 0.7);
    }

    

    function loadSearch() {
        const searchContent = `
            <h2>Searchable Job Postings</h2>
            <table id="jobTable">
                <thead>
                    <tr>
                        <th>Job Title</th>
                        <th>Company</th>
                        <th>Location</th>
                        <th>Salary Range</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Software Engineer</td>
                        <td>Tech Co.</td>
                        <td>New York</td>
                        <td>$80,000 - $100,000</td>
                        <td>Seeking experienced software engineers for web development projects.</td>
                    </tr>
                    <tr>
                        <td>Data Analyst</td>
                        <td>Data Solutions</td>
                        <td>San Francisco</td>
                        <td>$70,000 - $90,000</td>
                        <td>Analyzing and interpreting complex data sets to provide insights.</td>
                    </tr>
                    <!-- Add more table rows dynamically -->
                </tbody>
            </table>
        `;
        displayVisualization('Search', searchContent);
    }
    
    // Function to display content in mainContent area
    function displayVisualization(title, content) {
        const mainContent = document.getElementById('mainContent');
        mainContent.innerHTML = `<div class="visualization"><h2>${title}</h2>${content}</div>`;
    }

    function loadTrends() {
        const trendsContent = `
            <!-- Insert HTML for trends visualization -->
            <p>Display interactive chart showcasing trends in job postings over time.</p>
            <div class="chart">
                <!-- Include D3.js or other charting library for trends visualization -->
            </div>
        `;
        displayVisualization('Trends', trendsContent);
    }

    // Function to load the Maps view
    function loadMaps() {
        const mapsContent = `
            <h2>Interactive Map</h2>
            <p>Display an interactive map with job posting heatmap.</p>
            <div id="map"></div>
        `;
        displayVisualization('Maps', mapsContent);

        // Initialize map with Leaflet
        const map = L.map('map').setView([51.505, -0.09], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors'
        }).addTo(map);

        // Example: Add a marker to the map
        L.marker([51.505, -0.09]).addTo(map)
            .bindPopup('Job Posting Location')
            .openPopup();
    }

    // Function to display content in mainContent area
    function displayVisualization(title, content) {
        const mainContent = document.getElementById('mainContent');
        mainContent.innerHTML = `<div class="visualization"><h2>${title}</h2>${content}</div>`;
    }

    function loadSankey() {
        const sankeyContent = `
            <!-- Insert HTML for Sankey diagram visualization -->
            <p>Present link between industry, skill, and specialty using a Sankey diagram.</p>
            <div class="sankey-diagram">
                <!-- Include D3.js or similar library for Sankey diagram -->
            </div>
        `;
        displayVisualization('Sankey Diagram', sankeyContent);
    }
    
    // Set up button click events
    document.getElementById('overviewButton').addEventListener('click', loadOverview);
    document.getElementById('searchButton').addEventListener('click', loadSearch);
    document.getElementById('trendsButton').addEventListener('click', loadTrends);
    document.getElementById('mapsButton').addEventListener('click', loadMaps);
    document.getElementById('sankeyButton').addEventListener('click', loadSankey);

    // Initial load
    loadOverview(); // Load overview by default
    */
