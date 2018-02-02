
import html from 'choo/html'

import style from './style'
import layout from '../aolp-layout/aolp-layout'

export default (state, emit) => {
  return html`
    <div class=${style}>
      ${layout(state, emit, html`
        <h1>About</h1>
      `)}
    </div>
  `
}

