       // Hamburger-Menü
       const hamburger = document.getElementById("afiorello_hamburger_button"); // Sucht das HTML-Element (button in der navbar) mit der ID "afiorello_hamburger_button" und speichert es in der Variable hamburger
       const navbar = document.getElementById("afiorello_navigationsleiste"); // Sucht das HTML-Element (ul in der navbar) mit der ID "afiorello_navigationsleiste" und speichert es in der Variable navbar
   
       // Event Listener für den Hamburger-Button
       hamburger.addEventListener("click", () => { // Reagiert auf einen Klick des Users auf den Button innerhalb der navbar bei kleinen Bildschirmbreiten
           navbar.classList.toggle("aktiv"); // Fügt der ul in der navbar die Klasse "aktiv" zu oder entfernt sie, um das Aufklappen der einspaltigen navbar per CSS bei kleinen Bildschirmbreiten sichtbar zu machen
       });

