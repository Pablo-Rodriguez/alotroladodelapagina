
import html from 'choo/html'

import style from './style'
import readings from '../aolp-goodreads-read/aolp-goodreads-read'
import addon from '../aolp-addon-button/aolp-addon-button'

const social = [{
  text: '@alotroladodelap',
  link: 'https://twitter.com/alotroladodelap',
  config: { type: 'twitter', icon: 'icon-twitter' }
}, {
  text: 'goodreads',
  link: 'https://www.goodreads.com/pablorp',
  config: { type: 'goodreads', text: 'g' }
}]

export default (state, emit) => {
  return html`
    <footer class=${style}>
      <div>
        <aside>${readings(state.goodreads, emit)}</aside>
        <div>
          <aside>
            ${social.map(({text, link, config}) => addon(text, link, config))}
          </aside>
          <header>
            <h2>Al otro lado de la página</h2>
          </header>
        </div>
      </div>
      <h5>Publicando bajo los auspicios del gran Cthulhu desde 2016.</h5>
    </footer>
  `
}

