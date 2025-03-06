       // Das Hamburger-Menü
       const hamburger = document.getElementById("afiorello_hamburger_button");
       const navbar = document.getElementById("afiorello_navigationsleiste");
   
       // Event Listener für den Hamburger-Button
       hamburger.addEventListener("click", () => {
           navbar.classList.toggle("aktiv");
       });

