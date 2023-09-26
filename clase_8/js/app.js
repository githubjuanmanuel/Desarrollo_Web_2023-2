import { personas } from "./persona.js";
import { coputerChoiceDisplay } from "./dom.js";
import { usersChoiceDisplay } from "./dom.js";
import { resultDisplay } from "./dom.js";

const sectionMain = document.createElement('section');

sectionMain.classList.add("main");
const parrafoPrincipal = document.createElement('p')
parrafoPrincipal.innerHTML = `${personas[0].primerNombre}  ${personas[0].apellido}`;
document.body.appendChild(parrafoPrincipal);


    const seccion = `
    <section class = "main">
    <p>dentro de otro section</p>
    </section>`;


sectionMain.innerHTML = seccion;
document.body.appendChild(sectionMain);