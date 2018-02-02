
import html from 'choo/html'

import style from './style'
import nav from '../aolp-nav/aolp-nav'

export default (state, emit) => {
  return html`
    <header class=${style}>
      <h1 class='title-font'>Al otro lado de la página</h1>
      ${nav(state, emit)}
    </header>
  `
}

