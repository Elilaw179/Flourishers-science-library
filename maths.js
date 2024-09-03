



const topics = [
  { name: "Indices", subtopics: ["Laws of indices"] },
  { name: "Logarithms", subtopics: ["Laws of logarithms"] },
  { name: "Surds", subtopics: ["Laws of surds"] },
  { name: "Fractions", subtopics: ["Formulas in fractions"] },
  { name: "Sequence", subtopics: ["Formulas in sequence"] },
  { name: "Mensurations", subtopics: ["Formulas in mensuration", "Calculations"] },
  { name: "Statistics", subtopics: ["Formulas in statistics"] },
  { name: "Probability", subtopics: ["Formulas in probability"] },
  { name: "Coordinate", subtopics: ["Formulas in coordinate"] },
  { name: "Matrix", subtopics: ["Formulas in matrix"] },
  { name: "Commercial", subtopics: ["Formulas in commercial"] },
  { name: "Modulo", subtopics: ["Formulas in modulo"] },
  { name: "Logic", subtopics: ["Formulas in logic"] },
  { name: "Mapping", subtopics: ["Formulas in mapping"] },
  { name: "Circle", subtopics: ["Formulas in circle"] },
  { name: "Vectors", subtopics: ["Formulas in vectors"] },
  { name: "Quadractic", subtopics: ["Formulas in quadractic"] },
  { name: "Trigonometry", subtopics: ["Formulas in trigonometry"] },
  { name: "Geometry", subtopics: ["Formulas in geometry"] },
  { name: "Calculus", subtopics: ["Formulas in calculus"] },
];

const mathsTopicsContainer = document.getElementById("maths-topics");

function createTopics() {
  topics.forEach(({ name, subtopics }) => {
    const topicDiv = document.createElement("div");
    topicDiv.className = "topic";
    topicDiv.innerHTML = `
      ${name}
      <span>
        <select>
          <option value=""></option>
          ${subtopics
            .map(subtopic => `<option value="${subtopic.toLowerCase().replace(/ /g, "-")}">${subtopic}</option>`)
            .join("")}
        </select>
      </span>
    `;
    mathsTopicsContainer.appendChild(topicDiv);
  });
}

createTopics();

function loadModalContent(url) {
  fetch(url)
    .then(response => response.text())
    .then(data => {
      document.getElementById("modal-description").innerHTML = data;
      document.getElementById("modal").style.display = "block";
      document.querySelector(".modal-content").style.display = "block";
      window.MathJax && MathJax.typesetPromise();
      alert('Thanks for selecting a topic, please scroll down.')
    })
    .catch(error => console.error("Error loading content:", error));
}

document.querySelectorAll(".topic select").forEach(selectElement => {
  selectElement.addEventListener("change", function () {
    const selectedTopic = this.value;
    const topicDiv = this.closest(".topic");

    document.querySelectorAll(".topic").forEach(div => div.classList.remove("selected"));
    topicDiv.classList.add("selected");

    const modal = document.getElementById("modal");
    const modalContent = document.querySelector(".modal-content");
    const modalMap = {
     
      "laws-of-indices": { title: "Law's of Indices", url: "laws-of-indices.html" },
      "laws-of-logarithms": { title: "Laws of Logarithms", url: "laws-of-log.html" },
      "laws-of-surds": { title: "Laws of surds", url: "laws_of_surds.html" },
      "formulas-in-mensuration": { title: "Formulas in mensuration", url: "mensurations-formula.html" },
      "formulas-in-fractions": { title: "Formulas in fractions", url: "fractions.html" },
      "formulas-in-statistics": { title: "Formulas in statistics", url: "statistics.html" },
      "formulas-in-probability": { title: "Formulas in probability", url: "probability.html" },
      "formulas-in-sequence": { title: "Formulas in sequence", url: "sequence.html" },
      "formulas-in-matrix": { title: "Formulas in matrix", url: "matrix.html" },
      "formulas-in-modulo": { title: "Formulas in modulo", url: "modulo.html" },
      "formulas-in-logic": { title: "Formulas in logic", url: "logic.html" },
      "formulas-in-geometry": { title: "Formulas in geometry", url: "geometry.html" },
      "formulas-in-circle": { title: "Formulas in circle", url: "circle.html" },
      "formulas-in-mapping": { title: "Formulas in mapping", url: "mapping.html" },
      "formulas-in-vectors": { title: "Formulas in vectors", url: "vectors.html" },
      "formulas-in-commercial": { title: "Formulas in commercial", url: "commercial.html" },
      "formulas-in-calculus": { title: "Formulas in calculus", url: "calculus.html" },
      "formulas-in-coordinate": { title: "Formulas in coordinate", url: "coordinate.html" },
      "formulas-in-quadractic": { title: "Formulas in quadractic", url: "quadractic.html" },
      "calculations": { redirect: "mensuration_calculation.html" }
    };

    const modalConfig = modalMap[selectedTopic];
    if (modalConfig) {
      document.getElementById("modal-title").textContent = modalConfig.title;
      modalConfig.content ? 
        (document.getElementById("modal-description").innerHTML = modalConfig.content, modal.style.display = "block", modalContent.style.display = "block") 
        : modalConfig.url ? loadModalContent(modalConfig.url) : window.location.href = modalConfig.redirect;
    } else {
      modal.style.display = "none";
      modalContent.style.display = "none";
    }
  });
});
