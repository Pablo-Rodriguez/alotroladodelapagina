
import html from 'choo/html'

import style from './style'
import layout from '../aolp-layout/aolp-layout'

export default (state, emit) => {
  return html`
    <div>
      ${layout(state, emit, html`
        <section class=${style}>
          <h2>La página a la que intenta acceder no existe :(</h2>
        </section>
      `)}
    </div>
  `
}

