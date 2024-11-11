/*
Javascript code to build the citations histogram
using data scraped from Google Scholar using the Python script
`Google_scholar_metrics.py`

*/

/* Data scraped from Google Scholar with Python script*/
var total_citations = 13;
var h_index = 2;
var i10_index = 0;
var last_update = "September 27 2024";
var years_cited = [2021, 2022, 2023, 2024];
var citations_per_year = [1, 4, 3, 5];
var citations_per_paper = [8, 2, 2, 1, 0, 0, 0, 0, 0];
var titles = ['Reachability of nonlinear systems with unknown dynamics', 'Maximal Ellipsoid Method for Guaranteed Reachability of Unknown Fully Actuated Systems', 'High-Frequency Vibration Reduction for Unmanned Ground Vehicles on Unstructured Terrain', 'Design, Model, and Control of a Low-Cost 3 Degree of Freedom Balancing Laminate Leg with an Actively Controlled Ankle Using Fundamental Controls Concepts', 'Guaranteed Reachability on Riemannian Manifolds for Unknown Nonlinear Systems', 'Online Learning and Control Synthesis for Reachable Paths of Unknown Nonlinear Systems', 'Assured Collision Avoidance for Learned Controllers: A Case Study of ACAS Xu', 'Identifying Single-Input Linear System Dynamics from Reachable Sets', 'Design of a two DOF laminate leg transmission for creating walking robot platforms'];
var links_citations = ['https://scholar.google.com/scholar?oi=bibs&hl=en&cites=4983265435710608085', 'https://scholar.google.com/scholar?oi=bibs&hl=en&cites=13882103573082338547', 'https://scholar.google.com/scholar?oi=bibs&hl=en&cites=7734426462927221701', 'https://scholar.google.com/scholar?oi=bibs&hl=en&cites=11817910510869185927', '', '', '', '', ''];
	
  
/* Getting the table to write citations and indices */
var table = document.getElementById("citations_table");
  
/* Updating number of citations*/
var citation_row = table.getElementsByTagName("tr")[0];
citation_row.getElementsByTagName("td")[1].innerHTML = total_citations;
  
/* Updating h-index*/
var h_index_row = table.getElementsByTagName("tr")[1];
h_index_row.getElementsByTagName("td")[1].innerHTML = h_index;
  
/* Updating i10-index*/
var i10_index_row = table.getElementsByTagName("tr")[2];
i10_index_row.getElementsByTagName("td")[1].innerHTML = i10_index;

/* Writing the date where data has last been updated*/
document.getElementById("last_update").innerHTML = "Last updated: " + last_update;
  
  
  
  
/* Getting the canvas for the histogram of citations*/
const ctx = document.getElementById('histogram');
	
/* Creating the histogram of citations*/
const hist = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: years_cited,
    datasets: [{
      data: citations_per_year,
      borderWidth: 0,
	  backgroundColor: 'rgba(50, 50, 50, 0.8)',
	  barThickness: 20,
      }]
    },
    options: {
	  responsive: false,
	  maintainAspectRatio: false,
	  events: [], /* removing the hovering effects*/
	  plugins: {legend: {display: false}},
      scales: {y: {beginAtZero: true}}
    }
});
  
/* Adjusting column width of the histogram with amount of data*/
const col_width = 40
document.getElementById('histogram').style.width = (hist.data.labels.length + 1)*col_width + "px"



/* Adding the number of citations to each paper*/
var nb_papers = citations_per_paper.length;
for (let i = 0; i < nb_papers; i++){
	document.getElementById(titles[i]).innerHTML = citations_per_paper[i];
	document.getElementById(titles[i]).href = links_citations[i];
}
