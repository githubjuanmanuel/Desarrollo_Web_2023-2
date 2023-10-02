const Header = document.createElement('header');
const Main = document.createElement('main')

const appHeader = `<header >
<h1>Tarea n°7</h1>
<p>Proyecto pagina <span>Js</span></p>
</header>`

const appMain = `<main>
<h3>Este proyecto involucra</h3>
<article>
    <section>
        <img src="sources/img1.webp" alt="Imagen 1">
    </section>
    <section>
        <p>Estos son algunos lenguaje básicos para crear pagínas web</p>
        <ul>
            <li>Html:<span> Se utiliza para crear la estructura</span><li>
            <li>Css: <span>Es usado para darle estilos</span><li>
            <li>JavaScript: <span>Se usa para darle interactividad</span><li>
        </ul>
    </section>
</article>
</main>`

Header.innerHTML = appHeader;
Main.innerHTML = appMain;

document.body.appendChild(Header);
document.body.appendChild(Main);