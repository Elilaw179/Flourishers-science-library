

document.addEventListener("DOMContentLoaded", () => {
  
  document.querySelectorAll(".navigations nav ul li").forEach((item) => {
    item.addEventListener("click", function () {
      
      const activeItem = document.querySelector(".navigations nav ul li.active");
      if (activeItem) {
        activeItem.classList.remove("active");
      }
      this.classList.add("active");
      let targetPage = "";

      switch (this.textContent.trim().toLowerCase()) {
        case "home":
          targetPage = "index.html";
          break;
        case "mathematics":
          targetPage = "maths.html";
          break;
        case "physics":
          targetPage = "physics.html";
          break;
        case "chemistry":
          targetPage = "chemistry.html";
          break;
        case "about":
          targetPage = "details.html";
          break;
        default:
          targetPage = "index.html";
      }

      
      if (navigator.onLine) {
        if (targetPage) {
          showLoadingIndicator();
          setTimeout(() => {
            window.location.href = targetPage;
          }, 2000);
        }
      } else {
        showErrorMessage();
      }
    });
  });

 
 


 
       
  
    
  

  const year = new Date().getFullYear();
  const foot = document.getElementById("foot");
  const txt = "© SirLaw Limited. All Rights Reserved.";
  foot.innerHTML = `${year} ${txt}`;

  const images = [
    "mummy1.jpg",   "", "sci.jpg", "sirlaw pic.jpg",
    "really-like.webp",  "telescope.webp", "cake.jpg"
  ];

  let currentIndex = 0;
  setInterval(() => {
    document.getElementById('img').src = `${images[++currentIndex % images.length]}`;
  }, 2000);

  function showLoadingIndicator() {
    const loadingIndicator = document.querySelector(".loading-indicator");
    loadingIndicator.style.display = "block";
    document.body.classList.add("loading");
  }

  
  function showErrorMessage() {
    const errorMessage = document.querySelector(".error-message");
    errorMessage.style.display = "block";
    setTimeout(() => {
      errorMessage.style.display = "none";
    }, 3000);
  }
});

let arrow = document.getElementById('arrow');
  arrow.addEventListener('click', ()=>{
    window.location.href="index.html"
  });


  
  document.getElementById('play-music').addEventListener('click', function() {
    const audio = document.getElementById('background-music');
    audio.play();
});
