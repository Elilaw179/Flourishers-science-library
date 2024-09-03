
document.querySelector(".close-btn").onclick = function () {
    document.getElementById("modal").style.display = "none";
    document.querySelector(".modal-content").style.display = "none";
  };
  

  window.onclick = function (event) {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
      modal.style.display = "none";
      document.querySelector(".modal-content").style.display = "none";
    }
  };
  
 
  document.getElementById("calculate-btn").onclick = function () {
    const base = document.getElementById("base").value;
    const exponent = document.getElementById("exponent").value;
    const resultElement = document.getElementById("result");
  
    if (base !== "" && exponent !== "") {
      const result = Math.pow(base, exponent);
      resultElement.textContent = `Result: ${base}^${exponent} = ${result}`;
    } else {
      resultElement.textContent = "Please enter both the base and exponent.";
    }
  };
  
  
  
  
  