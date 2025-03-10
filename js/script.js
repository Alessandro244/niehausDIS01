       // Hamburger-Menü
       const hamburger = document.getElementById("afiorello_hamburger_button"); // Sucht das HTML-Element (button in der navbar) mit der ID "afiorello_hamburger_button" und speichert es in der Variable hamburger
       const navbar = document.getElementById("afiorello_navigationsleiste"); // Sucht das HTML-Element (ul in der navbar) mit der ID "afiorello_navigationsleiste" und speichert es in der Variable navbar
   
       // Event Listener für den Hamburger-Button
       hamburger.addEventListener("click", () => { // Reagiert auf einen Klick des Users auf den Button innerhalb der navbar bei kleinen Bildschirmbreiten
           navbar.classList.toggle("aktiv"); // Fügt der ul in der navbar die Klasse "aktiv" zu oder entfernt sie, um das Aufklappen der einspaltigen navbar per CSS bei kleinen Bildschirmbreiten sichtbar zu machen
       });

// Nachladen von je 2 Bildern in der bildergalerie.html
// Array mit Bildpfaden und Bildbeschreibungen
const images = [
    { src: "../bilder/fotograph_match.jpeg", caption: "Immer mit vollem Fokus dabei" },
    { src: "../bilder/interview_spieler.jpeg", caption: "Unser Torjäger im Live Interview" },
    { src: "../bilder/interview_spielerin.jpeg", caption: "Wir stehen immer Rede und Antwort" },
    { src: "../bilder/keinbahn.jpeg", caption: "Stadionvater Kurt Einbahn" },
    { src: "../bilder/mannschaft_spieler.jpeg", caption: "Ice Goats. Fearless & Unstoppable" },
    { src: "../bilder/mannschaftsfoto_sieg.jpeg", caption: "Siegreich. Die Ice Goats!" }
];

let index = 0; // Speichert, welches Bild als nächstes geladen wird

function createFigures() {
    const gallery = document.getElementById("gallery");

    // Maximal 2 neue Bilder auf einmal hinzufügen
    for (let i = 0; i < 2; i++) {
        if (index >= images.length) {
            alert("Keine weiteren Bilder verfügbar!");
            return;
        }

        // Neues figure-Element erstellen
        const figure = document.createElement("figure");

        // Bild erstellen
        const img = document.createElement("img");
        img.src = images[index].src;
        img.alt = images[index].caption;

        // figcaption hinzufügen
        const caption = document.createElement("figcaption");
        caption.textContent = images[index].caption;

        // Elemente in <figure> einfügen
        figure.appendChild(img);
        figure.appendChild(caption);

        // Figure in die Galerie einfügen
        gallery.appendChild(figure);

        index++; // Nächstes Bild im Array verwenden
    }
}

// Event Listener für den Button
document.getElementById("load-images").addEventListener("click", createFigures);

