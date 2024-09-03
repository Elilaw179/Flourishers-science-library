

const topics = [
  { name: "Quantities", subtopics: ["Formulas in quantities"] },
  { name: "Motion", subtopics: ["Formulas in motion"] },
  { name: "Heat", subtopics: ["Formulas in heat"] },
  { name: "Expansivity", subtopics: ["Formulas in expansivity"] },
  { name: "Friction", subtopics: ["Formulas in friction"] },
  { name: "Elasticity", subtopics: ["Formulas in elasticity"] },
  { name: "Work/E/P", subtopics: ["Formulas in work"] },
  { name: "Electricity", subtopics: ["Formulas in electricity"] },
  { name: "ElectricF", subtopics: ["Formulas in electric field"] },
  { name: "Scalar/V", subtopics: ["Formulas in vectors"] },
  { name: "Equilibrium", subtopics: ["Formulas in equilibrium"] },
  { name: "Machines", subtopics: ["Formulas in machines"] },
  { name: "S.H.M", subtopics: ["Formulas in shm"] },
  { name: "Momentum", subtopics: ["Formulas in momentum"] },
  { name: "Pressure", subtopics: ["Formulas in pressure"] },
  { name: "Vectors", subtopics: ["Formulas in vectors"] },
  { name: "Waves", subtopics: ["Formulas in waves"] },
  { name: "Light", subtopics: ["Formulas in light"] },
  { name: "Sound", subtopics: ["Formulas in sound"] },
  { name: "Gravitation", subtopics: ["Formulas in gravitation"] },
  { name: "Electricity2", subtopics: ["Formulas in electricity2"] },
  { name: "Radioactivity", subtopics: ["Formulas in radioactivity"] },
  { name: "Quantization", subtopics: ["Formulas in quantization"] },
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
            .map(
              (subtopic) =>
                `<option value="${subtopic
                  .toLowerCase()
                  .replace(/ /g, "-")}">${subtopic}</option>`
            )
            .join("")}
        </select>
      </span>`;
    mathsTopicsContainer.appendChild(topicDiv);
  });
}

createTopics();

function loadModalContent(url) {
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("modal-description").innerHTML = data;
      document.getElementById("modal").style.display = "block";
      document.querySelector(".modal-content").style.display = "block";
      if (window.MathJax) MathJax.typesetPromise();
      alert('Thanks for selecting a topic, please scroll down.')
    })
    .catch(console.error);
}

document.querySelectorAll(".topic select").forEach((selectElement) => {
  selectElement.addEventListener("change", function () {
    const selectedTopic = this.value;
    const topicDiv = this.closest(".topic");

    document
      .querySelectorAll(".topic")
      .forEach((div) => div.classList.remove("selected"));
    topicDiv.classList.add("selected");

    const modal = document.getElementById("modal");
    const modalContent = document.querySelector(".modal-content");

    const titlesAndUrls = {
      "formulas-in-quantities": ["Formulas in quantities", "quantities.html"],
      "formulas-in-motion": ["Motion", "motion.html"],
      "formulas-in-heat": ["Heat", "heat.html"],
      "formulas-in-expansivity": ["Expansivity", "expansivity.html"],
      "formulas-in-friction": ["Friction", "friction.html"],
      "formulas-in-elasticity": ["Elasticity", "elasticity.html"],
      "formulas-in-work": ["Work", "work.html"],
      "formulas-in-electricity": ["Electricity", "electricity.html"],
      "formulas-in-electric-field": ["Electric Field", "electricf.html"],
      "formulas-in-vectors": ["Vectors", "vectors.html"],
      "formulas-in-equilibrium": ["Equilibrium", "equilibrium.html"],
      "formulas-in-machines": ["Machines", "machines.html"],
      "formulas-in-shm": ["S.H.M", "shm.html"],
      "formulas-in-momentum": ["Momentum", "momentum.html"],
      "formulas-in-pressure": ["Pressure", "pressure.html"],
      "formulas-in-waves": ["Waves", "waves.html"],
      "formulas-in-light": ["Light", "light.html"],
      "formulas-in-sound": ["Sound", "sound.html"],
      "formulas-in-gravitation": ["Gravitation", "gravitation.html"],
      "formulas-in-electricity2": ["Electricity 2", "electricity2.html"],
      "formulas-in-radioactivity": ["Radioactivity", "radioactivity.html"],
      "formulas-in-quantization": ["Quantization", "quantization.html"],
    };

    if (selectedTopic && titlesAndUrls[selectedTopic]) {
      const [title, url] = titlesAndUrls[selectedTopic];
      document.getElementById("modal-title").textContent = title;
      url ? loadModalContent(url) : (modalContent.style.display = "block");
      modal.style.display = "block";
    } else {
      modal.style.display = "none";
    }
  });
});
