
import html from 'choo/html'

import style from './style'
import layout from '../aolp-layout/aolp-layout'

export default (state, emit) => {
  return html`
    <div>
      ${layout(state, emit, html`
        <section class=${style}>
          <img src="/img/icon.png" width="200px" height="auto" style="border-radius: 200px; box-shadow: 1px 3px 5px rgba(0,0,0,.65);">
          <div>
            <h2>Sobre este blog</h2>
            <div>
              <p>
                Me llamo Pablo y soy la persona que hay detrás de este blog. Tengo ${getAge()} años y vivo en una preciosa ciudad bañada por el Atlántico y custodiada por las Islas Cies: Vigo (Galicia). Soy ingeniero de telecomunicaciones, me gusta hacer deporte, aprender de cualquier cosa, tocar y escuchar música y leer (no shit Sherlock). De pequeño empecé un poco como todo el mundo: con libros ilustrados y recopilaciones de relatos infantiles de distintas partes del mundo. Mi afición por el fantástico viene de entonces, pero no explotó de forma clara hasta que con once o doce años leí el que hasta hoy es mi libro favorito. Aquí lo normal sería insertar un «El señor de los anillos», «La historia interminable» o algo por el estilo; pero no hace falta irse tan lejos: ni en tiempo, ni en espacio. Por aquel entonces me regalaron un libro con una portada atrayente y ominosa: «La cosecha de Samhein» de José Antonio Cotrina. Quedó en la estantería un par de meses hasta que, después de acabar un libro y sin tener muy claro qué leer a continuación, lo recogí y ya no lo pude soltar. Desde entonces dedico la mayor parte de mi tiempo lector a la fantasía, la ciencia ficción y el terror (estos dos últimos los descubrí más tarde pero ahora no puedo decir cual es mi favorito) y eso es lo que encontraréis por aquí.
              </p>
              <p>
                Después de pasar un tiempo siguiendo distintos blogs, podcasts y otros medios dedicados a esto y sin participar activamente en el denominado «fandom», me decidí a empezar con el podcast que lleva el mismo nombre que esta página. Aunque ese sigue siendo el medio al que más esfuerzo dedico, muchas veces me apetece hacer alguna cosilla en formato escrito y que no me lleve tanto tiempo; de ahí nació este blog. También me encuentras en <a href="https://www.goodreads.com/pablorp">goodreads</a>, en <a href="https://twitter.com/alotroladodelap">twitter</a>, en el <a href="http://www.ivoox.com/podcast-al-otro-lado-pagina_sq_f1311477_1.html">podcast</a> o en el email <b>alotroladodelapagina@gmail.com</b>.
              </p>
              <p>
                Espero que lo que encuentres por aquí te resulte interesante. ¡Un saludo y buenas lecturas!
              </p>
            </div>
          </div>
        </section>
      `)}
    </div>
  `
}

function getAge () {
  const date = new Date()
  let years = date.getFullYear() - 1996 - 1
  if (date.getMonth() + 1 >= 5) {
    if ((date.getMonth() + 1 === 5 && date.getDate() >= 23) || date.getMonth() + 1 > 5) {
      years++
    }
  }
  return years
}

