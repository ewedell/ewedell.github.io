/*
Javascript code to build the citations histogram
using data scraped from Google Scholar using the Python script
`Google_scholar_metrics.py`

*/

/* Data scraped from Google Scholar with Python script*/
var total_citations = 61;
var h_index = 3;
var i10_index = 3;
var last_update = "September 17 2025";
var years_cited = [2021, 2022, 2023, 2024, 2025];
var citations_per_year = [2, 12, 16, 12, 19];
var citations_per_paper = [25, 18, 12, 2, 2, 2, 0, 0, 0, 0, 0];
var titles = ['Center-periphery structure in research communities', 'SCAMPP: scaling alignment-based phylogenetic placement to large trees', 'Scalable and accurate phylogenetic placement using pplacer-XR', 'BSCAMPP: Batch-Scaled Phylogenetic Placement on Large Trees', 'TIPP3 and TIPP3-fast: Improved abundance profiling in metagenomics', 'BATCH-SCAMPP: Scaling phylogenetic placement methods to place many sequences', 'TIPP-SD: A New Method for Species Detection in Microbiomes', 'FastEnsemble: A new scalable ensemble clustering method', 'FastEnsemble: scalable ensemble clustering on large networks', '23rd International Workshop on Algorithms in Bioinformatics (WABI 2023)', 'SCAMPP: Scalable alignment-based phylogenetic placement'];
var links_citations = ['https://scholar.google.com/scholar?oi=bibs&hl=en&cites=17886567727414323311', 'https://scholar.google.com/scholar?oi=bibs&hl=en&cites=12911586867405934236', 'https://scholar.google.com/scholar?oi=bibs&hl=en&cites=11462105373143681199', 'https://scholar.google.com/scholar?oi=bibs&hl=en&cites=4505879241081408106', 'https://scholar.google.com/scholar?oi=bibs&hl=en&cites=3308394324546610284', 'https://scholar.google.com/scholar?oi=bibs&hl=en&cites=6439494667752595507', '', '', '', '', ''];
	
  
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
});Thesis

  
/* Adjusting column width of the histogram with amount of data*/
const col_width = 60
document.getElementById('histogram').style.width = (hist.data.labels.length + 1)*col_width + "px"



/* Adding the number of citations to each paper*/
var nb_papers = citations_per_paper.length;
for (let i = 0; i < nb_papers; i++){
	document.getElementById(titles[i]).innerHTML = citations_per_paper[i];
	document.getElementById(titles[i]).href = links_citations[i];
}
