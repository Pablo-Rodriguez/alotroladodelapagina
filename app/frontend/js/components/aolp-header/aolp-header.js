
import html from 'choo/html'

import style from './style'
import nav from '../aolp-nav/aolp-nav'

export default (state, emit) => {
  return html`
    <header id="jump-here" class=${style}> <!-- the id is for jump.js -->
      <h1 class='title-font'>Al otro lado de la página</h1>
      ${nav(state, emit)}
    </header>
  `
}

