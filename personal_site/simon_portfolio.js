/*I used the help of AI on the getting the filtering functionality to work. */

const projects = [
  { title: "Portfolio Website", category: "software" },
  { title: "Weather App", category: "software" },
  { title: "Personal Finance Tracker", category: "data" },
  { title: "Stock Market Analyzer", category: "data" }
];

function displayProjects(list) {
  const container = document.getElementById("projects-container");
  container.innerHTML = "";

  list.forEach(project => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.textContent = project.title;
    container.appendChild(div);
  });
}

function filterProjects(category) {
  let filtered;

  if (category === "all") {
    filtered = projects;
  } else {
    filtered = projects.filter(p => p.category === category);
  }

  displayProjects(filtered);
}

displayProjects(projects);