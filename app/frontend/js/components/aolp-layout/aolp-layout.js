
import html from 'choo/html'

import style from './style'
import header from '../aolp-header/aolp-header'
import main from '../aolp-main/aolp-main'
import footer from '../aolp-footer/aolp-footer'

export default (state, emit, content) => {
  return html`
    <div class=${style}>
      ${header(state)}
      ${main(state, emit, content)}
      ${footer(state, emit)}
    </div>
  `
}

