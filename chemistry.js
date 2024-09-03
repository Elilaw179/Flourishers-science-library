


const topics = [
  { name: "Elements", subtopics: ["All elements"] },
    { name: "Gas law", subtopics: ["Formulas in gaslaw", ] },
    { name: "Stoichiometry", subtopics: ["Formulas in stoichiometry"] },
    { name: "Molarity", subtopics: ["Formulas in molarity"] },
    { name: "Acid&Base", subtopics: ["Formulas in acid&base"] },
    { name: "Thermochemistry", subtopics: ["Formulas in thermochemistry"] },
    { name: "Equilibrium", subtopics: ["Formulas in equilibrium",] },
    { name: "Electrochem", subtopics: ["Formulas in electrochemistry"] },
    { name: "Redox", subtopics: ["Formulas in redox"] },
    { name: "Kinetics", subtopics: ["Formulas in kinetic"] },
    { name: "Atoms", subtopics: ["Formulas in atoms"] },
    { name: "Nuclear", subtopics: ["Formulas in nuclear"] },
    { name: "Organic", subtopics: ["Formulas in organic"] },
   
   
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
       
        "formulas-in-gaslaw": { title: "Formulas in gaslaw", url: "gaslaw.html" },
        "formulas-in-stoichiometry": { title: "Formulas in stoichiometry", url: "stoichiometry.html" },
        "formulas-in-molarity": { title: "Formulas in molarity", url: "molarity.html" },
        "formulas-in-acid&base": { title: "Formulas in acid&base", url: "acid.html" },
        "formulas-in-thermochemistry": { title: "Formulas in thermochemistry", url: "thermo.html" },
        "formulas-in-equilibrium": { title: "Formulas in equilibrium", url: "equilibrium.html" },
        "formulas-in-electrochemistry": { title: "Formulas in electrochemistry", url: "electro.html" },
        "formulas-in-redox": { title: "Formulas in redox", url: "redox.html" },
        "formulas-in-kinetic": { title: "Formulas in kinetic", url: "kinetic.html" },
        "formulas-in-atoms": { title: "Formulas in atoms", url: "atom.html" },
        "formulas-in-nuclear": { title: "Formulas in nuclear", url: "nuclear.html" },
        "formulas-in-organic": { title: "Formulas in organic", url: "organic.html" },
        "all-elements": { title: "all-elements", url: "elements.html" },
      
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
  