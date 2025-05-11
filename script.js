const pictures = document.getElementsByClassName("picture");
const images = document.getElementById("bigimg");
const modales = document.getElementById("modale");

for (let i = 0; i < pictures.length; i++) {
    pictures[i].addEventListener("click", () => {
      images.src = pictures[i].src;
      modales.style.display = "flex";  
    });
  }
  modales.addEventListener("click", ()=>{
    modales.style.display = "none";
  })